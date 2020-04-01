const Freelancer = require('../models/Freelaner.model')

// @desc Get all freelancers
// @route GET /api/v1/freelancers
// @access Public (don't need a token)
exports.getFreelancers = (req, res, next) => {
  // whatever we want to do go here
  res.status(200).json({
    success: true,
    msg: `Show all freelancers in Utah.`
  })
}

// @desc Get single freelancer
// @route GET /api/v1/freelancers/:id
// @access Public (don't need a token)
exports.getFreelancer = (req, res, next) => {
  // whatever we want to do go here
  res.status(200).json({
    success: true,
    msg: `Show freelancer ${req.params.id}.`
  })
}

// @desc Create new freelancer
// @route POST /api/v1/freelancers
// @access Private (need a token)
exports.createFreelancer = async (req, res, next) => {
  // whatever we want to do go here
  try {
    const freelancer = await Freelancer.create(req.body);

    res.status(201).json({
      success: true,
      data: freelancer
    })
  } catch (error) {
    res.status(400).json({ success: false })
  }
  // console.log(req.body);
  // res.status(200).json({
  //   success: true,
  //   msg: `Create new freelancer.`
  // })
}

// @desc Update freelancer
// @route PUT /api/v1/freelancers/:id
// @access Private (need a token)
exports.updateFreelancer = (req, res, next) => {
  // whatever we want to do go here
  res.status(200).json({
    success: true,
    msg: `Update freelancer ${req.params.id}.`
  })
}

// @desc Delete freelancer
// @route Delete /api/v1/freelancers/:id
// @access Private (need a token)
exports.deleteFreelancer = (req, res, next) => {
  // whatever we want to do go here
  res.status(200).json({
    success: true,
    msg: `Delete freelancer ${req.params.id}.`
  })
}