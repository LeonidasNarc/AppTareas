const express = require('express')
const router = express.Router()
const {getTareas, postTareas, putTareas, deleteTareas}= require('../controllers/tareasControllers')

router.route('/').get(getTareas).post(postTareas)


// router.get('/', getTareas)

// router.post('/', postTareas)

router.route('/:id').delete(deleteTareas).put(putTareas)

// router.put('/:id', putTareas)

// router.delete('/:id',deleteTareas)

module.exports= router