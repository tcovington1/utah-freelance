const express = require('express')
const {
  getServices,
  getService,
  addService,
  updateService,
  deleteService
} = require('../controllers/services.controller')

const Service = require('../models/Service.model')

const router = express.Router({
  mergeParams: true
});

// bring in protected route middleware
const advancedResults = require('../middleware/advancedResults.middleware')
const {
  protect,
  authorize
} = require('../middleware/auth.middleware')

router
  .route('/')
  .get(advancedResults(Service, {
    path: 'freelancer',
    select: 'name bio'
  }), getServices)
  .post(protect, authorize('publisher', 'admin'), addService);
router.route('/:id')
  .get(getService)
  .put(protect, authorize('publisher', 'admin'), updateService)
  .delete(protect, authorize('publisher', 'admin'), deleteService);

module.exports = router;