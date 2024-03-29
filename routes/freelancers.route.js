const express = require('express')
const {
  getFreelancers,
  getFreelancer,
  getUserFreelancer,
  createFreelancer,
  updateFreelancer,
  deleteFreelancer,
  getPhoto,
  freelancerPhotoUpload
} = require('../controllers/freelancers.controller');

const Freelancer = require('../models/Freelaner.model')

// Include other resource routers
const serviceRouter = require('./services.route')
const reviewRouter = require('./reviews.route')

const router = express.Router();

const advancedResults = require('../middleware/advancedResults.middleware');
// bring in protected route middleware
const { protect, authorize } = require('../middleware/auth.middleware')

// Re-route into other resource routers
router.use('/:freelancerId/services', serviceRouter)
router.use('/:freelancerId/reviews', reviewRouter)

// We just pulled in the controller api urls
//these two only need the normal url from the controller, no id
// the URL can be found in the server.js file
router
  .route('/')
  .get(advancedResults(Freelancer, 'services'), getFreelancers)
  .post(protect, authorize('publisher', 'admin'), createFreelancer)
  // .post(createFreelancer)

  router.route('/me')
  .get(protect, authorize('publisher', 'admin'), getUserFreelancer);


//these need the id
router
  .route('/:id')
  .get(getFreelancer)
  .put(protect, authorize('publisher', 'admin'), updateFreelancer)
  .delete(protect, authorize('publisher', 'admin'), deleteFreelancer);

router.route('/:id/photo')
  .put(protect, authorize('publisher', 'admin'), freelancerPhotoUpload)
  .get(protect, authorize('publisher', 'admin'), getPhoto)

module.exports = router;