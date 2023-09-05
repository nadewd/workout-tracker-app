const Workout = require('../models/workout');

module.exports = {
    create,
    delete: deleteSet
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

  async function deleteSet(req, res) {
    const workout = await Workout.findOne({ 'sets._id': req.params.id, 'sets.user': req.user._id });
    if (!workout) return res.redirect('/workouts');
    workout.sets.remove(req.params.id);
    await workout.save();
    res.redirect(`/workouts/${workout._id}`);
}
 
