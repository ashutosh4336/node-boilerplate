const fs = require('fs');
const util = require('util');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');

dotenv.config({ path: './config/config.env' });

// Middleware for Better Performance
const {
  userAgentCheck,
  stringifyBody,
} = require('./middleware/customMiddleware');

// I'm Slave
// I'm Going to Act Like only salve / child / server :NOTHING ELSE:
// Import DB
const connectDB = require('./config/db');
connectDB();

// Import Routes
const allRoute = require('./routes/router');

const app = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(userAgentCheck);
app.use(stringifyBody);

allRoute.routeLoader(app);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    colors.green.bold(
      `Server Started in ${process.env.NODE_ENV} Mode on ${process.env.PORT} Port`
    )
  );
});

// Handle Unhandled Rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  // Close Server and Exit
  server.close(() => process.exit(1));
});

module.exports = app;
