const path = require('path')

const ErrorResponse = require('../utils/errorResponse.utils')
const asyncHandler = require('../middleware/async.middleware')
const Freelancer = require('../models/Freelaner.model')

// @desc Get all freelancers
// @route GET /api/v1/freelancers
// @access Public (don't need a token)
exports.getFreelancers = asyncHandler(async (req, res, next) => {
  // whatever we want to do go here

  res.status(200).json(res.advancedResults)

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
  console.log(req.body)
  // Add user to req.body
  req.body.user = req.user.id;
  // req.body.user = id;

  // Check for published freelaner profile
  const publishedFreelancer = await Freelancer.findOne({
    user: req.user.id
  })

  // Id the user is not the admin, they can only add one freelancer profile
  if (publishedFreelancer && req.user.role !== 'admin') {
    return next(new ErrorResponse(`The user with ID ${req.user.id} has already published a freelancer profile`, 400))
  }

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

  let freelancer = await Freelancer.findById(req.params.id);

  if (!freelancer) {
    return next(new ErrorResponse(`Freelancer not found with id of ${req.params.id}`, 404));
  }

  // make sure user is freelancer profile owner
  if(freelancer.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new ErrorResponse(`User ${req.params.id} is not authorized to update this freelacer profile`, 401));
  }

  freelancer = await Freelancer.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

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

  // make sure user is freelancer profile owner
  if(freelancer.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new ErrorResponse(`User ${req.params.id} is not authorized to delete this freelacer profile`, 401));
  }
  

  //this will use the middle created in model to cascade delete services
  freelancer.remove();

  res.status(200).json({
    success: true,
    data: {}
  });

});

//* @desc Upload photo for freelancer
//* @route PUT /api/v1/freelancers/:id/photo
//* @access Private (need a token)
exports.freelancerPhotoUpload = asyncHandler(async (req, res, next) => {
  // whatever we want to do go here

  const freelancer = await Freelancer.findById(req.params.id);

  if (!freelancer) {
    return next(new ErrorResponse(`Freelancer not found with id of ${req.params.id}`, 404));
  }

    // make sure user is freelancer profile owner
    if(freelancer.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return next(new ErrorResponse(`User ${req.params.id} is not authorized to update this freelacer profile`, 401));
    }  
    // what is the req.files coming back as? right now undefined
    console.log('file: ', req.files)

  //this will use the middle created in model to cascade delete services
  if (!req.files) {
    return next(new ErrorResponse(`Please upload a photo`, 400));

  }

  const file = req.files.file;

  // Make sure the image is a photo
  if (!file.mimetype.startsWith('image')) {
    return next(new ErrorResponse(`Please upload an image file`, 404));
  }

  // Check file size
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(new ErrorResponse(`Please upload a photo less than ${process.env.MAX_FILE_UPLOAD}`, 400));
  }

  // Create custom filename
  // file.name = `photo_${freelancer._id}${path.parse(file.name).ext}`;
  file.name = `photo_${freelancer._id}_${file.name}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }

    await Freelancer.findByIdAndUpdate(req.params.id, {
      photo: file.name
    });
  })

  res.status(200).json({
    success: true,
    data: file.name
  });
});

exports.getPhoto = async (req,res) => {
  const path =  require('path');
  const photoName = path.join(__dirname, '../public/uploads/test.jpeg' )
  res.sendFile(photoName)
}


//* Get the users freelancer profile
//* @route GET /api/v1/freelancers/me
//* @access Private (need a token)

exports.getUserFreelancer = async (req, res, next) => {
  console.log('getting it now!')
  try {
    const freelancer = await Freelancer.findOne({ user: req.user.id }).populate(
      'user', 
      ['firstName']
      );

    if(!freelancer) {
      return res.status(400).json({ msg: 'There is no freelancer for this user'});
    }
    res.json(freelancer);

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error")
  }
};