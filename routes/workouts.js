const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /workouts/new
router.get('/new', workoutsCtrl.new);
// POST /workouts
router.post('/', workoutsCtrl.create);
// GET /workouts/:id
router.get('/:id', workoutsCtrl.show);
// GET /workouts
router.get('/', workoutsCtrl.index);
// GET /workouts/:id/edit
router.get('/:id/edit', workoutsCtrl.edit);
/*// PUT /workouts/:id
router.put('/:id', workoutsCtrl.update); */
// DELETE /workouts/:id
router.delete('/:id', workoutsCtrl.delete)

module.exports = router;