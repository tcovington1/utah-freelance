const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const logger = require('./middleware/logger.middleware')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error.middleware')
const fileupload = require('express-fileupload')

// Load env vars
dotenv.config({
  path: './config/config.env'
});

//connect to db.js file
connectDB();


// we are bringing in the router files to use
const freelancers = require('./routes/freelancers.route')
const services = require('./routes/services.route')

const app = express();

// body parser - this helps us get req.body in controllers
app.use(express.json());


// Dev logging middleware
// only want to run if you're in the development env
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  //using morgan here instead of our own logger because it shows us more information like server status and time
}

// File Uploading
app.use(fileupload());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))


// Now we mount the route files from line 4 to a url
// Mount routers
// this is how the route and controller know what the URL is
app.use('/api/v1/freelancers', freelancers)
app.use('/api/v1/services', services)

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message.red.bold}`);
  // Close server & exit process
  server.close(() => process.exit(1))
})