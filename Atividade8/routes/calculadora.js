const express = require('express');
const router = express.Router();
const calculadoraController = require('../controllers/calculadoraController');

router.post('/', calculadoraController.novoCalculo);

module.exports = router;
