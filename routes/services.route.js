const express = require('express')
const {
  getServices,
  getService,
  addService,
  updateService,
  deleteService
} = require('../controllers/services.controller')

const Service = require('../models/Service.model')
const advancedResults = require('../middleware/advancedResults.middleware')

const router = express.Router({
  mergeParams: true
});

router
  .route('/')
  .get(advancedResults(Service, {
    path: 'freelancer',
    select: 'name bio'
  }), getServices)
  .post(addService);
router.route('/:id').get(getService).put(updateService).delete(deleteService);

module.exports = router;