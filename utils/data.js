const { Schema, Types } = require('mongoose');

const usersSeed = [
  {
    username: "user1",
    email: "user1@gmail.com",
    thought: [
      "I am user 1!",
      "FIRST!!!"
    ],
    friends: [
      "user2",
      "user3",
    ]
  },
  {
    username: "user2",
    email: "user2@gmail.com",
    thought: [
      "I am user 2!",
    ],
    friends: [
      "user1",
      "user3",
    ]
  },
  {
    username: "user3",
    email: "user3@gmail.com",
    thought: [
      "I am user 3!",
    ],
    friends: [
      "user1",
      "user2",
    ]
  },
];

const thoughtsSeed = [
  {
    thoughtText: "I am user 1!",
    createdAt: "7/30/2023",
    username: "user1",
    reactions: [
      {
        reactionId: new Types.ObjectId(),
        reactionBody: "nice!",
        username: "user 2",
        createdAt: "7/30/2023"
      }
    ]
  },
  {
    thoughtText: "I am user 2!",
    createdAt: "7/30/2023",
    username: "user2",
    reactions: [
      {
        reactionId: new Types.ObjectId(),
        reactionBody: "cool!",
        username: "user 3",
        createdAt: "7/30/2023"
      }
    ]
  },
  {
    thoughtText: "I am user 3!",
    createdAt: "7/30/2023",
    username: "user3",
    reactions: [
      {
        reactionId: new Types.ObjectId(),
        reactionBody: "awsome!",
        username: "user 1",
        createdAt: "7/30/2023"
      }
    ]
  },
  {
    thoughtText: "FIRST!!!",
    createdAt: "7/30/2023",
    username: "user1",
    reactions: [
      {
        reactionId: new Types.ObjectId(),
        reactionBody: "WHAATT!",
        username: "user 2",
        createdAt: "7/30/2023"
      },
      {
        reactionId: new Types.ObjectId(),
        reactionBody: "LUCKYY!",
        username: "user 3",
        createdAt: "7/30/2023"
      }
    ]
  }
];

module.exports = { usersSeed, thoughtsSeed }
