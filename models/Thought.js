const { Schema, Types, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction')
const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: time => dateFormat(time)
    },
    username: {
        type: String,
        required: true
    },
     reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
