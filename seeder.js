const fs = require('fs');
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')

// Load env vars
dotenv.config({
  path: './config/config.env'
});

//load models
const Freelancer = require('./models/Freelancer.model.js')

//Connect to Db
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// Read the JSON files
const freelancers = JSON.parse(fs.readFileSync(`${__dirname}/_data/freelancers.json`, 'utf-8'))

// import into DB
const importData = async () => {
  try {
    await Freelancer.create(freelancers)

    console.log('Data seeded...'.green.inverse)
    process.exit();
  } catch (error) {
    console.error(error)
  }
}

//Delete data
const deleteData = async () => {
  try {
    await Freelancer.deleteMany()

    console.log('Data destroyed...'.red.inverse)
    process.exit();
  } catch (error) {
    console.error(error)
  }
}

if(process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}