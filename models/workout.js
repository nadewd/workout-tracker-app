const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setSchema = new Schema ({
    weight: Number,
    reps: Number
})

const workoutSchema = new Schema({
    exercise: String,
    date: Date,
    sets: [setSchema]
})

module.exports = mongoose.model('Workout', workoutSchema);
