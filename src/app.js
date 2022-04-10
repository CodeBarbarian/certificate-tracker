/**
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 *  @name:      Certificate Tracker
 *  @version:   1.0
 *  @author:    Morten Haugstad
 *  @description: Backend for Poploftet
 * 
 *  @file: app.js
 * https://www.bezkoder.com/node-js-express-file-upload/
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 */

/**
 * The ability to pull params from .env file
 */
 require('dotenv').config();


/**
 * Include required modules
 */
const express = require('express');
const cors = require("cors");
const helmet = require('helmet');
const morgan = require('morgan');


/**
 * Set app = express
 */
const app = express();

// Include the router
const Router = require('./Routers/Router')

/**
 * Requiring log-timestamp to get timestamps on all console logs
 */
require('log-timestamp');

/**
 * Use Morgan for logging
 */
app.use(morgan('combined'))

/**
 * Security Middleware
 */
app.use(helmet());

/**
 * Middleware allows us to access the request.body.<params>
 */
app.use(express.json());

/**
 * Middleware use CORS
 */
app.use(cors());

/**
 * Middleware to use urlencode
 */
app.use(express.urlencoded({extended:false}));

/**
 * Sett which router to use
 */
app.use('/api/v1', Router);

app.use('/api/v1', (req, res, next) => {
    res.json(["Test"]);
})

/**
 * Let us setup the storage
 */

/**
 * Get the port from the environment
 */
const PORT = process.env.PORT;

/**
 * On start function to prettyfy the code a bit
 */
function onStart() {
    console.log(`Certificate Tracker is running on ${PORT}`);
}

/**
 * Start the express web server
 */
app.listen(PORT, onStart);