const express = require('express');

const router = express.Router();

const { meetPeople } = require('./controllers/admin');

router.route('/').get(meetPeople);

exports.router = router;
