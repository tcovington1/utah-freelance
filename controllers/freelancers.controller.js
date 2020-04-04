const ErrorResponse = require('../utils/errorResponse.utils')
const asyncHandler = require('../middleware/async.middleware')
const Freelancer = require('../models/Freelaner.model')

// @desc Get all freelancers
// @route GET /api/v1/freelancers
// @access Public (don't need a token)
exports.getFreelancers = asyncHandler(async (req, res, next) => {
  // whatever we want to do go here
  let query;

  //Copy req.query
  const reqQuery = { ...req.query };

  //Fields to exclude
  const removeFields = ['select', 'sort', 'page', 'limit'];

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach(param => delete reqQuery[param]);

  console.log(reqQuery)

  //Create query string
  let queryStr = JSON.stringify(reqQuery);

  // Create operators like ($gt, $gte, etc)
  queryStr =  queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match =>`$${match}`)

  // Finding resource
  query = Freelancer.find(JSON.parse(queryStr)).populate('services')

  //Select Fields
  if(req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields)
  }

  // Sort Fields
  if(req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy)
  } else {
    query = query.sort('-createdAt') // - is descending
  }

  //{{URL}}/api/v1/freelancers?select=name,bio,createdAt&sort=name

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 25;
  const startIndex = (page -1) * limit;
  const endIndex = page * limit;
  const total = await Freelancer.countDocuments();

  query = query.skip(startIndex).limit(limit);

  // {{URL}}/api/v1/freelancers?limit=2&select=name


  //Executing query
    const freelancers = await query;

  //pagination result
    const pagination = {};

    if(endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      }
    }
    if(startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      }
    }

    res.status(200).json({
      success: true,
      count: freelancers.length,
      pagination,
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

    const freelancer = await Freelancer.findById(req.params.id);

    if (!freelancer) {
      return next(new ErrorResponse(`Freelancer not found with id of ${req.params.id}`, 404));
    }

    //this will use the middle created in model to cascade delete services
    freelancer.remove();

    res.status(200).json({
      success: true,
      data: {}
    });

});