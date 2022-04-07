const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const trailSchema = new Schema({
  trailText: {
    type: String,
    required: 'You need to leave a trail!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  trailAuthor: {
    type: String,
    required: true,
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

const Trail = model('Trail', trailSchema);

module.exports = Trail;
