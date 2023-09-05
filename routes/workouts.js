const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /workouts/new
router.get('/new', ensureLoggedIn, workoutsCtrl.new);
// POST /workouts
router.post('/', ensureLoggedIn, workoutsCtrl.create);
// GET /workouts/:id
router.get('/:id', workoutsCtrl.show);
// GET /workouts
router.get('/', workoutsCtrl.index);
// GET /workouts/:id/edit
router.get('/:id/edit', ensureLoggedIn, workoutsCtrl.edit);
// PUT /workouts/:id
router.put('/:id', workoutsCtrl.update); 
// DELETE /workouts/:id
router.delete('/:id', ensureLoggedIn, workoutsCtrl.delete)

module.exports = router;