const express = require('express');
const router = express.Router();
const lux2019controller = require('../controllers/lux2019controller')
router.get('/',lux2019controller.peliculas);

module.exports =router;