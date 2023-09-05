const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setSchema = new Schema ({
    weight: Number,
    reps: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    userName: String,
    userAvatar: String
});

const workoutSchema = new Schema({
    exercise: String,
    date: Date,
    sets: [setSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    userName: String,
    userAvatar: String
});

module.exports = mongoose.model('Workout', workoutSchema);
