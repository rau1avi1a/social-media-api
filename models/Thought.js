const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
        reactions: [Reaction],
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }

);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;