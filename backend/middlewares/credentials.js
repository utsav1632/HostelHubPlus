const allowedOrigins = require('./../utils/allowedOrigins');

const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    // ✅ DO NOT manually set headers — let cors() handle them
    next();
  } else {
    next();
  }
};

module.exports = credentials;
