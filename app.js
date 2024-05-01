const express = require('express');
const morgan = require('morgan');

const app = express();

// useful middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// middleware
app.use(express.json());

//middleware to serve static files
app.use(express.static(`${__dirname}/public`));

// routes
const userRouter = require('./routes/userRoutes');
const tourRouter = require('./routes/tourRoutes');

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
