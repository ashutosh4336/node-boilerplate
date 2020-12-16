const express = require('express');

const router = express.Router();

const { homeTest } = require('./controllers/home');

router.route('/').get(homeTest);

exports.router = router;
