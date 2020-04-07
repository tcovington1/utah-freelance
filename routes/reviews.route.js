const express = require('express')
const {
  getReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview
} = require('../controllers/reviews.controller')

const Review = require('../models/Review.model')

const router = express.Router({
  mergeParams: true
});

// bring in protected route middleware
const advancedResults = require('../middleware/advancedResults.middleware')
const {
  protect,
  authorize
} = require('../middleware/auth.middleware')

// '/' is getReviews
router
  .route('/')
    .get(advancedResults(Review, {
      path: 'freelancer',
      select: 'name bio'
      }), getReviews)
    .post(protect, authorize('user', 'admin'), addReview)

  router
    .route('/:id')
      .get(getReview)
      .put(protect, authorize('user', 'admin'), updateReview)
      .delete(protect, authorize('user', 'admin'), deleteReview)



module.exports = router;