var express = require('express');
var router = express.Router();
var productoController = require('../controllers/productoController');

/* Segundo nivel de routeo */
router.get('/', productoController.getAll);
router.post('/', productoController.create);
router.put('/:id', productoController.update);
router.delete('/:id', productoController.delete);
//router.get('/:id', productoController.getById);
module.exports = router;
