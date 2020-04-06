const ErrorResponse = require('../utils/errorResponse.utils')
const asyncHandler = require('../middleware/async.middleware')
const Service = require('../models/Service.model')
const Freelancer = require('../models/Freelaner.model')

// @desc Get services
// @route GET /api/v1/offerings
// @route GET /api/v1/freelancers/:freelancerId/offerings
// @access Public (don't need a token)
exports.getServices = asyncHandler(async (req, res, next) => {

  if (req.params.freelancerId) {
    const services = await Service.find({
      freelancer: req.params.freelancerId
    });

    return res.status(200).json({
      success: true,
      count: courses.length,
      data: courses
    })
  } else {
    res.status(200).json(res.advancedResults);
  }

  const services = await query;

  res.status(200).json({
    success: true,
    count: services.length,
    data: services
  })
});

// @desc Get single service
// @route GET /api/v1/services/:id
// @access Public (don't need a token)
exports.getService = asyncHandler(async (req, res, next) => {
  const service = await Service.findById(req.params.id).populate({
    path: 'freelancer',
    select: 'name description'
  });

  if (!service) {
    return next(new ErrorResponse(`No service with the id of ${req.params.id}`), 404)
  }

  res.status(200).json({
    success: true,
    data: service
  })
});

// @desc Add a service
// @route POST /api/v1/bootcamps/:bootcampId/services
// @access Private (does need a token)
exports.addService = asyncHandler(async (req, res, next) => {
  req.body.freelancer = req.params.freelancerId;
  req.body.user = req.user.id;

  const freelancer = await Freelancer.findById(req.params.freelancerId);

  if (!freelancer) {
    return next(new ErrorResponse(`No freelancer with the id of ${req.params.freelancerId}`), 404)
  }

  // make sure user is freelancer profile owner
  if (freelancer.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new ErrorResponse(`User ${req.user.id} is not authorized to add a service to freelancer profile ${freelaner._id}`, 401));
  }


  const service = await Service.create(req.body)

  res.status(200).json({
    success: true,
    data: service
  })
});
// @desc update a service
// @route PUT /api/v1/services/:id
// @access Private (does need a token)
exports.updateService = asyncHandler(async (req, res, next) => {
  let service = await Service.findById(req.params.id);

  if (!service) {
    return next(new ErrorResponse(`No service with the id of ${req.params.id}`), 404)
  }

  // make sure user is freelancer service owner
  if (service.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new ErrorResponse(`User ${req.user.id} is not authorized to update the service ${service._id}`, 401));
  }


  service = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })

  res.status(200).json({
    success: true,
    data: service
  })
});

// @desc delete a service
// @route DELETE /api/v1/services/:id
// @access Private (does need a token)
exports.deleteService = asyncHandler(async (req, res, next) => {
  const service = await Service.findById(req.params.id);

  if (!service) {
    return next(new ErrorResponse(`No service with the id of ${req.params.id}`), 404)
  }

  // make sure user is freelancer service owner
  if(service.user.toString() !== req.user.id && req.user.role !== 'admin') {
  return next(new ErrorResponse(`User ${req.user.id} is not authorized to delete the service ${service._id}`, 401));
}

  await service.remove()

  res.status(200).json({
    success: true,
    data: {}
  })
});