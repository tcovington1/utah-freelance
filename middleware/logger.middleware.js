//middleware
// @desc Logs request to console
const logger = (req, res, next) => {
  // get           //http   ://localhost/5000 /api/v1/freelancers
console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl} `);
//have to call next piece of middleware in the cycle
next();
};

module.exports = logger