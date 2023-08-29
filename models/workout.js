const mongoose = reqiore('mongoose');
const Schema = mongoose.Schema;

const setSchema = newSchema ({
    weight: Number,
    reps: Number
})

const workoutSchema = new Schema({
    exercise: String,
    date: Date,
    sets: [setSchema]
})

module.exports = mongoose.model('Workout', workoutSchema);
