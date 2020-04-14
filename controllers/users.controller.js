const ErrorResponse = require('../utils/errorResponse.utils')
const asyncHandler = require('../middleware/async.middleware')
const User = require('../models/User.model');
const Freelancer = require('../models/Freelaner.model')

//* @desc Get all users
//* @route GET /api/v1/auth/users
//* @access Private/Admin (needs admin access)
exports.getUsers = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
});

//* @desc Get single user
//* @route GET /api/v1/auth/users/:id
//* @access Private/Admin (needs admin access)
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: user
  })
});

//* @desc Create user
//* @route POST /api/v1/auth/users
//* @access Private/Admin (needs admin access)
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user
  })
});

//* @desc Update user
//* @route PUT /api/v1/auth/users/:id
//* @access Private/Admin (needs admin access)
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: user
  })
});

//* @desc Delete user
//* @route DELETE /api/v1/auth/users/:id
//* @access Private/Admin (needs admin access)
exports.deleteUser = asyncHandler(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: {}
  })
});

//* @desc Get Users freelancer profile
//* @route GET /api/v1/auth/user/:id/freelancer
//* @access private (does need a token)
// exports.getUserFreelancer = asyncHandler(async (req, res, next) => {
//   // whatever we want to do go here
//   const user = await User.findById(req.params.id);
//   console.log(user)

//   if (!user) {
//     return next(new ErrorResponse(`Freelancer not found with id of ${req.params.id}`, 404));
//   }

//       // make sure user is freelancer profile owner
//       if (user.toString() !== req.user.id && req.user.role !== 'admin') {
//         return next(new ErrorResponse(`User ${req.user.id} is not authorized to view this freelancer profile ${freelaner._id}`, 401));
//       }
  
//   if (user) {
//     console.log(user)
//     const freelancer = await Freelancer.find({
//       user: req.params.id
//     });

//     res.status(200).json({
//       success: true,
//       data: freelancer
//     })
//   } 

//   const freelancer = await query;

//   res.status(200).json({
//     success: true,
//     data: freelancer
//   })

// });

