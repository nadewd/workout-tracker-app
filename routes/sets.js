const express = require('express');
const router = express.Router();
const setsCtrl = require('../controllers/sets');

// POST /workouts/:id/sets
router.post('/workouts/:id/sets', setsCtrl.create);
// DEELETE /workouts/:id/sets
//router.delete('/workouts/:id/sets', setsCtrl.delete);

module.exports = router;