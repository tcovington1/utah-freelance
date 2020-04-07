const ErrorResponse = require('../utils/errorResponse.utils')
const asyncHandler = require('../middleware/async.middleware')
const Review = require('../models/Review.model')
const Freelancer = require('../models/Freelaner.model')


// @desc Get reviews
// @route GET /api/v1/reviews
// @route GET /api/v1/freelancers/:freelancerId/reviews
// @access Public (don't need a token)
exports.getReviews = asyncHandler(async (req, res, next) => {

  if (req.params.freelancerId) {
    const reviews = await Review.find({
      freelancer: req.params.freelancerId
    });

    return res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews
    })
  } else {
    res.status(200).json(res.advancedResults);
  }

});
// @desc Get a single review
// @route GET /api/v1/reviews/:id
// @access Public (don't need a token)
exports.getReview = asyncHandler(async (req, res, next) => {
  const review = await (await Review.findById(req.params.id)).populate({
    path: 'freelancer',
    select: 'name bio'
  });

  if (!review) {
    return next(new ErrorResponse(`No review found with the id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: review
  })
});

// @desc Add review
// @route POST /api/v1/freelancers/:freelancerId/reviews
// @access Private (need a token)
exports.addReview = asyncHandler(async (req, res, next) => {
  req.body.freelancer = req.params.freelancerId;
  req.body.user = req.user.id;

  const freelancer = await Freelancer.findById(req.params.freelancerId);

  if (!freelancer) {
    return next(new ErrorResponse(`No freelancer found with the id of ${req.params.freelancerId}`, 404));
  }
  //create review
  const review = await Review.create(req.body);

  res.status(201).json({
    success: true,
    data: review
  })
});

// @desc Update review
// @route PUT /api/v1/reviews/:id
// @access Private (need a token)
exports.updateReview = asyncHandler(async (req, res, next) => {

  let review = await Review.findById(req.params.id);

  if (!review) {
    return next(new ErrorResponse(`No review found with the id of ${req.params.id}`, 404));
  }

  //make sure review belongs to user or user is an admin
  if(review.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new ErrorResponse('Not authorized to update review', 401));
  }


  review = await Review.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: review
  })
});

// @desc Delete review
// @route DELETE /api/v1/reviews/:id
// @access Private (need a token)
exports.deleteReview = asyncHandler(async (req, res, next) => {

  const review = await Review.findById(req.params.id);

  if (!review) {
    return next(new ErrorResponse(`No review found with the id of ${req.params.id}`, 404));
  }

  //make sure review belongs to user or user is an admin
  if(review.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new ErrorResponse('Not authorized to delete review', 401));
  }


  await review.remove();

  res.status(200).json({
    success: true,
    data: {}
  })
});