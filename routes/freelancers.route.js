const express = require('express')
const {
  getFreelancers,
  getFreelancer,
  createFreelancer,
  updateFreelancer,
  deleteFreelancer
} = require('../controllers/freelancers.controller')

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
  .get(getFreelancers)
  .post(createFreelancer);

//these need the id
router
  .route('/:id')
  .get(getFreelancer)
  .put(updateFreelancer)
  .delete(deleteFreelancer);

module.exports = router;