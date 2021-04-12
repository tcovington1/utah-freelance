const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const logger = require('./middleware/logger.middleware')
const cookieParser = require('cookie-parser')
const errorHandler = require('./middleware/error.middleware')
const fileupload = require('express-fileupload')
const connectDB = require('./config/db')
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit')
const hpp = require('hpp')
var cors = require('cors')



// Load env vars
dotenv.config({
  path: './config/config.env'
});

//connect to db.js file
connectDB();


// we are bringing in the router files to use
//Anytime we create a route, need to bring it in here.
const freelancers = require('./routes/freelancers.route')
const services = require('./routes/services.route')
const auth = require('./routes/auth.route')
const users = require('./routes/users.route')
const reviews = require('./routes/reviews.route')

const app = express();

// body parser - this helps us get req.body in controllers
app.use(express.json());

// Cookie Parser
app.use(cookieParser());


// Dev logging middleware
// only want to run if you're in the development env
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  //using morgan here instead of our own logger because it shows us more information like server status and time
}

// File Uploading
app.use(fileupload());

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100
})

app.use(limiter);

// Prevent http param pollution
app.use(hpp());

//! Enable CORS

 app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))


// Now we mount the route files from line 4 to a url
// Mount routers
// this is how the route and controller know what the URL is
app.use('/api/v1/freelancers', freelancers)
app.use('/api/v1/services', services)
app.use('/api/v1/auth', auth)
app.use('/api/v1/users', users)
app.use('/api/v1/reviews', reviews)

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log("There was an error connecting to MongoDb")
  console.log(`Error: ${err.message.red.bold}`);
  // Close server & exit process
  server.close(() => process.exit(1))
})