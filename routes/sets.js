const express = require('express');
const router = express.Router();
const setsCtrl = require('../controllers/sets');

// POST /movies/:id/reviews (create review for a movie)
router.post('/workouts/:id/sets', setsCtrl.create);

module.exports = router;