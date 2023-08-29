const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts')

// GET /workouts/new
router.get('/new', workoutsCtrl.new);
// POST /workouts
router.post('/', workoutsCtrl.create);
// GET workouts/:id
router.get('/:id', workoutsCtrl.show);

module.exports = router;