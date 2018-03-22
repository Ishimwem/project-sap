const express = require('express');
const router = express.Router();

//Set up variables to hold our routes
const userRoutes = require('./user.route');
const mainRoutes = require('./main.route');
const categoryRoutes = require('./category.route');

//Mount all routes to /api
router.use('/user', userRoutes);
router.use('/main', mainRoutes);
router.use('/category', categoryRoutes);

module.exports = router;
