const ErrorResponse = require('../utils/errorResponse.utils')
const asyncHandler = require('../middleware/async.middleware')
const User = require('../models/User.model')

// @desc Register user
// @route GET /api/v1/auth/register
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
  const token = user.getSignedJwtToken()

  res.status(200).json({
    success: true,
    token
  })
});