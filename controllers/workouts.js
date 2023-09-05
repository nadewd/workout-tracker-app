const Workout = require('../models/workout');

module.exports = {
    new: newWorkout, 
    create,
    show, 
    index,
    edit,
    delete: deleteWorkout, 
    update
};

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
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
    const workouts = await Workout.find({}).sort({ date: -1 });
    res.render('workouts/index', { title: 'Workout History', workouts });
}  

async function edit(req, res) {
    const workout = await Workout.findById(req.params.id);
    res.render('workouts/edit', { title: 'Edit Workout', workout});
}

async function deleteWorkout(req, res) {
    await Workout.findByIdAndRemove(req.params.id);
    res.redirect('/workouts');
} 

async function update(req, res) {
    try {
        const workout = await Workout.findByIdAndUpdate(req.params.id, req.body);
        const workouts = await Workout.find({});
        res.render('workouts/index', { title: 'Workout History', workouts });
    } catch(err) {
        console.log(err);
        res.render('workouts/edit', { errorMsg: err.message }); 
    }
}



