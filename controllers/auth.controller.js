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

  // Create token
  // this method sits in User.model
  const token = user.getSignedJwtToken()

  res.status(200).json({
    success: true,
    token
  })
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

  // Create token
  const token = user.getSignedJwtToken()

  res.status(200).json({
    success: true,
    token
  })
});