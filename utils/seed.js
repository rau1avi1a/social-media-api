const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { usersSeed, thoughtsSeed } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  await User.collection.insertMany(usersSeed);
  await Thought.collection.insertMany(thoughtsSeed);

  console.table(usersSeed);
  console.table(thoughtsSeed);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
