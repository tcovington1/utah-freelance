const express = require('express')
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/users.controller')

const User = require('../models/User.model')

const router = express.Router({
  mergeParams: true
});

// bring in protected route middleware
const advancedResults = require('../middleware/advancedResults.middleware')
const {
  protect,
  authorize
} = require('../middleware/auth.middleware')

// this is saying anything below this will use 'protect'
router.use(protect);
router.use(authorize('admin'));

router
  .route('/')
  .get(advancedResults(User), getUsers)
  .post(createUser)

router
  .route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser)

module.exports = router;