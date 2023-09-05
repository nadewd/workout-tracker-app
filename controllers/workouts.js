const Workout = require('../models/workout');

module.exports = {
    new: newWorkout, 
    create,
    show, 
    index,
    edit,
    delete: deleteWorkout, 
   // update
};

async function create(req, res) {
    try {
        const workout = await Workout.create(req.body);
        res.redirect(`/workouts/${workout._id}`);
    } catch (err) {
        console.log(err);
        res.render('workouts/new', { errorMsg: err.message });
    }
}

function newWorkout(req, res) {
    res.render('workouts/new', { title: 'New Workout', errorMsg: '' });
}

async function show(req, res) {
    const workout = await Workout.findById(req.params.id);
    res.render('workouts/show', { title: 'Workout Detail', workout });
}

async function index(req, res) {
    const workouts = await Workout.find({});
    res.render('workouts/index', { title: 'Workout History', workouts });
}  

async function edit(req, res) {
    const workout = await Workout.findById(req.params.id);
    res.render('workouts/edit', { title: 'Edit Workout', workout});
}

async function deleteWorkout(req, res) {
    const workout = await Workout.findOneAndDelete({'_id': req.params.id});
    const workouts = await Workout.find({});
    res.render('workouts/index', { title: 'Workout History', workouts });
} 
/*
async function update(req, res) {
    try {
        const workout = await Workout.findOneAndUpdate(req.params.id, req.body);
        const workouts = await Workout.find({});
        res.render('workouts/index', { title: 'Workout History', workouts });
    } catch(err) {
        console.log(err);
        res.render('workouts/edit', { errorMsg: err.message }); 
    }
} */



