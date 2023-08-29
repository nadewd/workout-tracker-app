const Workout = require('../models/workout');

module.exports = {
    create,
};

async function create(req, res) {
    const workout = await Workout.findById(req.params.id);
    // We can push (or unshift) subdocs into Mongoose arrays
    workout.sets.push(req.body);
    try {
      // Save any changes made to the movie doc
      await workout.save();
    } catch (err) {
      console.log(err);
    }
    // Step 5:  Respond to the Request (redirect if data has been changed)
    res.redirect(`/workouts/${workout._id}`);
  }