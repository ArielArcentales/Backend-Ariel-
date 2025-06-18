let express = require('express');
let tareasController = require('../controllers/tareasController.js')
let router = express.Router();

router.get('/', tareasController.getTareas)

router.post('/', tareasController.addTarea)

router.delete('/:id', tareasController.deleteTarea)

router.put('/:id', tareasController.actualizarTarea)

module.exports = router;