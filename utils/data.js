const { Schema, Types } = require('mongoose');

const thoughtsSeed = [
  {
    thoughtText: "I am user 1!",
    createdAt: "7/30/2023",
    user: 'usersSeed[0]._id',
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
    user: 'usersSeed[1]._id',
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
    user: 'usersSeed[2]._id',
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
    user: 'usersSeed[0]._id',
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

const usersSeed = [
  {
    username: "user1",
    email: "user1@gmail.com",
    thought: [
      {
        thought: 'thoughtsSeed[0]._id',
      },
      {
        thought: 'thoughtsSeed[3]._id',
      }
    ],
    friends: [
      {
        user: 'usersSeed[1]._id',
      },
      {
        user: 'usersSeed[2]._id',
      }
    ]
  },
  {
    username: "user2",
    email: "user2@gmail.com",
    thought: [
      {
        thought: 'thoughtsSeed[1]._id',
      },
    ],
    friends: [
      {
        user: 'usersSeed[0]._id',
      },
      {
        user: 'usersSeed[2]._id',
      }
    ],
  },
  {
    username: "user3",
    email: "user3@gmail.com",
    thought: [
      {
        thought: 'thoughtsSeed[2]._id',
      },
    ],
    friends: [
      {
        user: 'usersSeed[0]._id',
      },
      {
        user: 'usersSeed[1]._id',
      }
    ]
  },
];



module.exports = { usersSeed, thoughtsSeed }
