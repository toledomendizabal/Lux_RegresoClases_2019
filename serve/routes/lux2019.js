const express = require('express');
const router = express.Router();
const lux2019controller = require('../controllers/lux2019controller')

router.get('/',lux2019controller.inicio);

router.get('/maikita',lux2019controller.maikita);
router.get('/marchon',lux2019controller.marchon);
router.get('/luxotica',lux2019controller.luxotica);
router.get('/safilo',lux2019controller.safilo);

router.get('/photoquiz',lux2019controller.photoquiz);
router.get('/runner',lux2019controller.runner);
router.get('/jellyhipster',lux2019controller.jellyhipster);
router.get('/carrera',lux2019controller.carrera);
router.get('/calvinklein',lux2019controller.calvinklein);
router.get('/moviequiz',lux2019controller.moviequiz);

router.get('/endphotoquiz/:data',lux2019controller.endphotoquiz);
router.get('/endrunner',lux2019controller.endrunner);
router.get('/endjellyhipster',lux2019controller.endjellyhipster);
router.get('/endcarrera',lux2019controller.carrera);
router.get('/endcalvinklein',lux2019controller.endcalvinklein);
router.get('/endmoviequiz/:data',lux2019controller.endmoviequiz);


module.exports =router;