const express = require('express')
const {
  getFreelancers,
  getFreelancer,
  createFreelancer,
  updateFreelancer,
  deleteFreelancer,
  freelancerPhotoUpload
} = require('../controllers/freelancers.controller');

const Freelancer = require('../models/Freelaner.model')
const advancedResults = require('../middleware/advancedResults.middleware');

// Include other resource routers
const serviceRouter = require('./services.route')

const router = express.Router();

// Re-route into other resource routers
router.use('/:freelancerId/services', serviceRouter)

// We just pulled in the controller api urls
//these two only need the normal url from the controller, no id
// the URL can be found in the server.js file
router
  .route('/')
  .get(advancedResults(Freelancer, 'services'), getFreelancers)
  .post(createFreelancer);

//these need the id
router
  .route('/:id')
  .get(getFreelancer)
  .put(updateFreelancer)
  .delete(deleteFreelancer);

router.route('/:id/photo').put(freelancerPhotoUpload)

module.exports = router;