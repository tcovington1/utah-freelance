const crypto = require('crypto')
const ErrorResponse = require('../utils/errorResponse.utils')
const asyncHandler = require('../middleware/async.middleware')
const sendEmail = require('../utils/sendEmail.utils')
const User = require('../models/User.model')

//* @desc Register user
//* @route POST /api/v1/auth/register
//* @access Public (don't need a token)
exports.register = asyncHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    password,
    role
  } = req.body;

  // Create user
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    role
  });

  sendTokenResponse(user, 200, res)

});

//* @desc Login user
//* @route GET /api/v1/auth/login
//* @access Public (don't need a token)
exports.login = asyncHandler(async (req, res, next) => {
  const {
    email,
    password
  } = req.body;

  // Validate email & password
  if (!email || !password) {
    return next(new ErrorResponse('Please provide email and password', 400))
  }

  // Check for user                        // we do want the password to login
  const user = await User.findOne({
    email
  }).select('+password');

  if (!user) {
    return next(new ErrorResponse('Invalid credentials', 401))
  }

  // Check if password matches
  // This method sits in User.method
  const isMatch = await user.matchPassword(password)

  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials', 401))
  }

  sendTokenResponse(user, 200, res)
  // // Create token
  // const token = user.getSignedJwtToken()

  // res.status(200).json({
  //   success: true,
  //   token
  // })
});

//* @desc Log user out / clear cookie
//* @route GET /api/v1/auth/logout
//* @access Private (does need a token)
exports.logout = asyncHandler(async (req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  })

  res.status(200).json({
    success: true,
    data: {}
  })
})
//* @desc Get current logged in user
//* @route GET /api/v1/auth/me
//* @access Private (does need a token)
exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user
  })
})

//* @desc Update user details
//* @route PUT /api/v1/auth/updatedetails
//* @access Private (does need a token)
exports.updateDetails = asyncHandler(async (req, res, next) => {

  const fieldsToUpdate = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  }

  const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: user
  })
});

//* @desc Update password
//* @route Put /api/v1/auth/updatepassword
//* @access Private (does need a token)
exports.updatePassword = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('+password');

  // Check current password
  if (!(await user.matchPassword(req.body.currentPassword))) {
    return next(new ErrorResponse('Passwrod is incorrect', 401));
  }

  user.password = req.body.newPassword
  await user.save();

  sendTokenResponse(user, 200, res)
})

//* @desc Forgot password
//* @route POST /api/v1/auth/forgotpassword
//* @access Public (does NOT need a token)
exports.forgotPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({
    email: req.body.email
  });

  if (!user) {
    return next(new ErrorResponse('There is no user with that email.', 404))
  }

  // Get reset token
  const resetToken = user.getResetPasswordToken();

  await user.save({
    validateBeforeSave: false
  })

  // Create reset url
  const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/auth/resetpassword/${resetToken}`

  // Look into replace on the front end
  const message = `You are receiving this email because you (or someone else) has requested
  the reset of a password. Please make a PUT request to: \n\n ${resetUrl}`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Reset Password',
      message
    });

    res.status(200).json({
      success: true,
      data: 'Email sent'
    })
  } catch (error) {
    console.log(error)
    user.getResetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({
      validateBeforeSave: false
    })

    return next(new ErrorResponse('Email could not be sent', 500))
  }

  res.status(200).json({
    success: true,
    data: user
  })
})

//* @desc Reset password
//* @route PUT /api/v1/auth/resetpassword/:resettoken
//* @access Private (does need a token)
exports.resetPassword = asyncHandler(async (req, res, next) => {
  // Get hashed token
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.resettoken)
    .digest('hex');

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: {
      $gt: Date.now()
    }
  });

  if (!user) {
    return next(new ErrorResponse('Invalid token', 400));
  }

  // Set new password
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordToken = undefined;
  await user.save();

  sendTokenResponse(user, 200, res)

});


// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = { //gives us 30 days from now
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true
  }

  if (process.env.NODE_ENV === 'production') {
    options.secure = true
  }

  res
    .status(statusCode)
    //key     value    //options like expiration
    .cookie('token', token, options)
    .json({
      success: true,
      token
    });
};