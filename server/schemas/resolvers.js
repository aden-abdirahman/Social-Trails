const { AuthenticationError } = require('apollo-server-express');
const { User, Trail, Trip } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find().populate('trails');
      },
      user: async (parent, { username }) => {
        return User.findOne({ username }).populate('trails');
      },
      trips: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Trip.find(params).sort({ createdAt: -1 });
      },
      trip: async (parent, { tripId }) => {
        return Trip.findOne({ _id: tripId });
      },
      trails: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Trail.find(params).sort({ createdAt: -1 });
      },
      trail: async (parent, { trailId }) => {
        return Trail.findOne({ _id: trailId });
      },
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id }).populate('trails');
        }
        throw new AuthenticationError('You need to be logged in!');
      },
    },
  
    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      },

      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      },

      addTrip: async (parent, { tripText }, context) => {
        if (context.user) {
          const trip = await Trip.create({
            tripText,
            tripAuthor: context.user.username,
          });
  
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { trips: trip._id } }
          );
  
          return trip;
        }
        throw new AuthenticationError('You need to be logged in!');
      },

      addTrail: async (parent, { trailText }, context) => {
        if (context.user) {
          const trail = await Trail.create({
            trailText,
            trailAuthor: context.user.username,
          });
  
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { trails: trail._id } }
          );
  
          return trail;
        }
        throw new AuthenticationError('You need to be logged in!');
      },

      addComment: async (parent, { trailId, tripId, commentText }, context) => {
          if(!trailId && !tripId) {return new Error(`You must provide a trail id or trip id to proceed`)}
        if (context.user) {
          return Trail.findOneAndUpdate(
            { _id: trailId },
            {
              $addToSet: {
                comments: { commentText, commentAuthor: context.user.username },
              },
            },
            {
              new: true,
              runValidators: true,
            }
          );
        }
        throw new AuthenticationError('You need to be logged in!');
      },


      removeTrip: async (parent, { tripId }, context) => {
        if (context.user) {
          const trip = await Trip.findOneAndDelete({
            _id: tripId,
            tripAuthor: context.user.username,
          });
  
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { trips: trip._id } }
          );
  
          return trip;
        }
        throw new AuthenticationError('You need to be logged in!');
      },

      removeTrail: async (parent, { trailId }, context) => {
        if (context.user) {
          const trail = await Trail.findOneAndDelete({
            _id: trailId,
            trailAuthor: context.user.username,
          });
  
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { trails: trail._id } }
          );
  
          return trail;
        }
        throw new AuthenticationError('You need to be logged in!');
      },

      removeComment: async (parent, { trailId, commentId }, context) => {
        if (context.user) {
          return Trail.findOneAndUpdate(
            { _id: trailId },
            {
              $pull: {
                comments: {
                  _id: commentId,
                  commentAuthor: context.user.username,
                },
              },
            },
            { new: true }
          );
        }
        throw new AuthenticationError('You need to be logged in!');
      },
    },
  };
  
  module.exports = resolvers;
  