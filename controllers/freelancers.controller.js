const ErrorResponse = require('../utils/errorResponse.utils')
const asyncHandler = require('../middleware/async.middleware')
const Freelancer = require('../models/Freelaner.model')

// @desc Get all freelancers
// @route GET /api/v1/freelancers
// @access Public (don't need a token)
exports.getFreelancers = asyncHandler(async (req, res, next) => {
  // whatever we want to do go here
  let query;

  let queryStr = JSON.stringify(req.query);

  queryStr =  queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match =>`$${match}`)

  query = Freelancer.find(JSON.parse(queryStr))

    const freelancers = await query;

    res.status(200).json({
      success: true,
      count: freelancers.length,
      data: freelancers
    })
 
});

// @desc Get single freelancer
// @route GET /api/v1/freelancers/:id
// @access Public (don't need a token)
exports.getFreelancer = asyncHandler(async (req, res, next) => {
  // whatever we want to do go here
    const freelancer = await Freelancer.findById(req.params.id);

    // need to check if the ID is in the DB // we use a return here so it'll break
    if (!freelancer) {
      return next(new ErrorResponse(`Freelancer not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
      success: true,
      data: freelancer
    })
});

// @desc Create new freelancer
// @route POST /api/v1/freelancers
// @access Private (need a token)
exports.createFreelancer = asyncHandler(async (req, res, next) => {
  // whatever we want to do go here

    const freelancer = await Freelancer.create(req.body);

    res.status(201).json({
      success: true,
      data: freelancer
    })
 
  // console.log(req.body);
  // res.status(200).json({
  //   success: true,
  //   msg: `Create new freelancer.`
  // })
});

// @desc Update freelancer
// @route PUT /api/v1/freelancers/:id
// @access Private (need a token)
exports.updateFreelancer = asyncHandler(async (req, res, next) => {
  // whatever we want to do go here
  
    const freelancer = await Freelancer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!freelancer) {
      return next(new ErrorResponse(`Freelancer not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
      success: true,
      data: freelancer
    });

});

// @desc Delete freelancer
// @route Delete /api/v1/freelancers/:id
// @access Private (need a token)
exports.deleteFreelancer = asyncHandler(async (req, res, next) => {
  // whatever we want to do go here

    const freelancer = await Freelancer.findByIdAndDelete(req.params.id);

    if (!freelancer) {
      return next(new ErrorResponse(`Freelancer not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
      success: true,
      data: {}
    });

});