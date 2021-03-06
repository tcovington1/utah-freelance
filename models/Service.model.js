const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please add service name']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  price: {
    type: Number,
    required: [true, 'Please enter a price for your service']
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

module.exports = mongoose.model('Service', ServiceSchema)