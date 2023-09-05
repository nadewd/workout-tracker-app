const express = require('express');
const router = express.Router();
const setsCtrl = require('../controllers/sets');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /workouts/:id/sets
router.post('/workouts/:id/sets', ensureLoggedIn, setsCtrl.create);
// DELETE /workouts/:id/sets
router.delete('/workouts/:id/sets', ensureLoggedIn, setsCtrl.delete);

module.exports = router;