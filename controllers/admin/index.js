const express = require('express');

const router = express.Router();

const { adminTest } = require('./controllers/admin');

router.route('/').get(adminTest);

exports.router = router;
