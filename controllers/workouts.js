const Workout = require('../models/workout');

module.exports = {
    new: newWorkout, 
    create,
    show
};

function newWorkout(req, res) {
    res.render('workouts/new', { errorMsg: '' });
}

async function create(req, res) {
    try {
        const workout = await Workout.create(req.body);
        res.redirect(`/workouts/${workout._id}`, { title: 'Workout Details' });
    } catch (err) {
        console.log(err);
        res.render('workouts/new', { errorMsg: err.message });
    }
}

async function show(req, res) {
    const workout = await Workout.findById(req.params.id);
    res.render('workouts/show', { title: 'Workout Detail', workout });
  }