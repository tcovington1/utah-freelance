const ErrorResponse = require('../utils/errorResponse.utils')
const asyncHandler = require('../middleware/async.middleware')
const User = require('../models/User.model')

// @desc Register user
// @route POST /api/v1/auth/register
// @access Public (don't need a token)
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

  // Create token
//   // this method sits in User.model
//   const token = user.getSignedJwtToken()

//   res.status(200).json({
//     success: true,
//     token
//   })
});

// @desc Login user
// @route GET /api/v1/auth/login
// @access Public (don't need a token)
exports.login = asyncHandler(async (req, res, next) => {
  const {
    email,
    password
  } = req.body;

  // Validate email & password
  if (!email || !password) {
    return next(new ErrorResponse('Please provided email and pasword', 400))
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


// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {                                    //gives us 30 days from now
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000 ),
    httpOnly: true
  }

  if(process.env.NODE_ENV === 'production') {
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

// @desc Get current logged in user
// @route GET /api/v1/auth/me
// @access Private (does need a token)
exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user
  })
})
