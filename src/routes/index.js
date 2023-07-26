const express = require('express');

const router = express.Router();

const paypalRouter = require('./paypal.routes');

router.use('/paypal', paypalRouter);


module.exports = router;