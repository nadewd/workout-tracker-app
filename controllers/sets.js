const Workout = require('../models/workout');

module.exports = {
    create,
};

async function create(req, res) {
    const workout = await Workout.findById(req.params.id);
    workout.sets.push(req.body);
    try {
      await workout.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/workouts/${workout._id}`);
  }


  

 
