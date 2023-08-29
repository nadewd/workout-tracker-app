const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts')

// GET /workouts/new
router.get('/', workoustCtrl.new);