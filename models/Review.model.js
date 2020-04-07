const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Please add a title for the review'],
    maxLength: 100
  },
  text: {
    type: String,
    required: [true, 'Please add some text']
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    required: [true, 'Please add a rating between 1-10']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  // relationship to freelancer
  freelancer: {
    type: mongoose.Schema.ObjectId,
    //which model to reference? 
    ref: 'Freelancer',
    required: true
  },
  user: {
    type: mongoose.Schema.ObjectId,
    //which model to reference? 
    ref: 'User',
    required: true
  }
});

// Prevent user from submitting more than one review per freelancer profile
ReviewSchema.index({
  freelancer: 1,
  user: 1
}, {
  unique: true
});

// Static method to get the average rating of freelancer reviews
ReviewSchema.statics.getAverageRating = async function(freelancerId) {
  const obj = await this.aggregate([
    {
      $match: { freelancer: freelancerId }
    },
    {
      $group: {
        _id: '$bootcamp',
        averageRating: { $avg: '$rating'}
      }
    }
  ]);

  try {
    await this.model('Freelancer').findByIdAndUpdate(freelancerId, {
      averageRating: obj[0].averageRating
    });
  } catch (error) {
    console.log(error)
  }
};

// Call getAverageRating after save
ReviewSchema.post('save', function() {
  this.constructor.getAverageRating(this.freelancer)
});

// Call getAverageRating before remove
ReviewSchema.pre('remove', function() {
  this.constructor.getAverageRating(this.freelancer)
})

module.exports = mongoose.model('Review', ReviewSchema)