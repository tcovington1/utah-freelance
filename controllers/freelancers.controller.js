const Freelancer = require('../models/Freelaner.model')

// @desc Get all freelancers
// @route GET /api/v1/freelancers
// @access Public (don't need a token)
exports.getFreelancers = async (req, res, next) => {
  // whatever we want to do go here
  try {
    const freelancers = await Freelancer.find();

    res.status(200).json({
      success: true,
      count: freelancers.length,
      data: freelancers
    })
  } catch (error) {
    res.status(400).json({
      success: false
    })
  }
}

// @desc Get single freelancer
// @route GET /api/v1/freelancers/:id
// @access Public (don't need a token)
exports.getFreelancer = async (req, res, next) => {
  // whatever we want to do go here
 try {
   console.log(req.params)
   const freelancer = await Freelancer.findById(req.params.id);

   // need to check if the ID is in the DB // we use a return here so it'll break
   if(!freelancer) {
    return res.status(400).json({
      success: false
    });
  
   }

   res.status(200).json({
    success: true,
    data: freelancer
  })

 } catch (error) {
  res.status(400).json({
    success: false
  });
 }
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
    res.status(400).json({
      success: false
    })
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
exports.updateFreelancer = async (req, res, next) => {
  // whatever we want to do go here
  try {
    const freelancer = await Freelancer.findByIdAndUpdate(req.params.id, req.body, {
      new: true, 
      runValidators: true
    });

    if(!freelancer) {
      return res.status(400).json({
        success: false
      });
    }

      res.status(200).json({
        success: true,
        data: freelancer
      });
    

  } catch (error) {
    res.status(400).json({
      success: false
    })
  }
}

// @desc Delete freelancer
// @route Delete /api/v1/freelancers/:id
// @access Private (need a token)
exports.deleteFreelancer = async (req, res, next) => {
  // whatever we want to do go here
  try {
    const freelancer = await Freelancer.findByIdAndDelete(req.params.id);

    if(!freelancer) {
      return res.status(400).json({
        success: false
      });
    }

      res.status(200).json({
        success: true,
        data: {}
      });
    
  } catch (error) {
    res.status(400).json({
      success: false
    })
  }
}