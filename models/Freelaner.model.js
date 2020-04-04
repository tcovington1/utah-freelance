const mongoose = require('mongoose')
const slugify = require('slugify')
const geocoder = require('../utils/geocoder.utils')

const FreelancerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add your name'],
    unique: true,
    trim: true,
    maxLength: [50, 'Name cannot be more than 50 characters'],
  },
  slug: String,
  bio: {
    type: String,
    required: [true, 'Please add your bio'],
    maxLength: [500, 'Bio cannot be more than 500 characters'],
  },
  website: {
    type: String,
    match: [
      // /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\6([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a alid URL with HTTP or HTTPS'
    ]
  },
  phone: {
    type: String,
    maxlength: [20, 'Phone number cannot be longer than 20 characters']
  },
  email: {
    type: String,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  address: {
    type: String
    // not required, only used for a business office if freelancer wants to add one.
  },
  loction: {
    //GeoJson Point
    type: {
      type: String,
      enum: ['Point'],
      //removed required
    },
    coordinates: {
      type: [Number],
      //removed required
      index: '2dsphere'
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  title: {
    //Array of strings
    type: [String],
    required: true,
    //enum = these are the only available
    enum: [
      'Junior Developer',
      'Senior Developer',
      'Front-End Developer',
      'Back-End Developer',
      'Web Developer',
      'Software Engineer',
      'Mobile Developer',
      'UI/UX',
      'Data Science',
      'Freelancer',
      'Other'
    ]
  },
  averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [10, 'Rating cannot be more than 10']
  },
  averagePrice: Number,
  photo: {
    type: String,
    default: 'no-photo.png'
    // default: 'no-photo.jpg'
  },
  moneyBackGuarantee: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Create freelancer slug from name
FreelancerSchema.pre('save', function (next) {
  this.slug = slugify(this.name, {
    lower: true
  });
  next();
});

//Geocode & create location field
FreelancerSchema.pre('save', async function(next) {
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: c=loc[0].formattedAddress,
    street: loc[0].streetName,
    city: loc[0].city,
    state: loc[0].stateCode,
    zipcode: loc[0].zipcode,
    country: loc[0].countryCode
  }
  console.log('hit'.green)

  // Do not save address in DB
  this.address = undefined;

  next();
});

// Cascade delete services when a freelancer is deleted
FreelancerSchema.pre('remove', async function (next) {
  console.log(`Services being removed from freelancer ${this._id}`)
  await this.model('Service').deleteMany({ bootcamp: this._id });
  next();
})

// Reverse populate with virtuals
FreelancerSchema.virtual('services', {
  ref: 'Service',
  localField: '_id',
  foreignField: 'freelancer',
  justOne: false
})

module.exports = mongoose.model('Freelancer', FreelancerSchema)