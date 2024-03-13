const express = require('express');
const router = express.Router();
const ctrlStuff = require('../controllers/controllers.stuff')

router.get('/stuff', ctrlStuff.responseStuff);

module.exports = router;