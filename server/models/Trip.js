const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const tripSchema = new Schema({
  tripText: {
    type: String,
    required: "Tell us where you're going!",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  tripAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Trip = model('Trip', tripSchema);

module.exports = Trip;