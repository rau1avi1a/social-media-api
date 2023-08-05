const { User, Thought, Reaction } = require('../models');

module.exports = {
  // Get all students
  getUsers(req, res) {
    User.find()
      .populate('thought')
      .then(async (users) => {
        const userData = {
          users,
        };
        return res.json(userData);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  getUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate('thought')
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
              user
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such user exists' })
          : Thought.deleteMany({ user: user._id})
      )
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({
              message: 'User deleted, but no thoughts found',
            })
          : res.json({ message: 'User successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  //Reactions
  postReaction(req, res) {
    const userId = req.params.userId;
    const thoughtId = req.params.thoughtId

    const newReaction = {
      reactionBody: req.body.reactionBody,
      user: userId
    }
  
    Thought.findOneAndUpdate(
      { _id: thoughtId },
      { $addToSet: { reactions: newReaction } },
      { new: true }
    )
    .then((updatedThought) => {
      if (!updatedThought) {
        console.log('Thought not found.');
        return res.status(404).json({ error: 'Thought not found.' });
      }
  
      console.log('Thought updated with the new reaction:', updatedThought);
      res.status(200).json(updatedThought);
    })
    .catch((error) => {
      console.error('Error adding reaction:', error);
      res.status(500).json({ error: 'Unable to add reaction' });
    });
  },
  deleteReaction(req, res) {
    const thoughtId = req.params.thoughtId;
    const reactionId = req.params.reactionId;

    Thought.findOneAndUpdate(
      { _id: thoughtId},
      { $pull: { reactions: { reactionId: reactionId } } },
      { new: true }
    )
    .then((updatedThought) => {
      if (!updatedThought) {
        console.log('Thought not found.');
        return res.status(404).json({ error: 'Thought not found.' });
      }
  
      console.log('Reaction removed');
      res.status(200).json(updatedThought);
    })
    .catch((error) => {
      console.error('Error removing reaction:', error);
      res.status(500).json({ error: 'Unable to remove reaction' });
    });
  },

  //Friends
  addFriend(req, res) {
    const userId = req.params.userId;
    const friendId = req.params.friendId;

    User.findOneAndUpdate(
      { _id: userId},
      { $addToSet: { friends: friendId } },
      { new: true }
    )
    .then((updatedFriend) => {
      if (!updatedFriend) {
        console.log('User not found.');
        return res.status(404).json({ error: 'User not found.' });
      }
  
      console.log('User updated with the new friend:', updatedFriend);
      res.status(200).json(updatedFriend);
    })
    .catch((error) => {
      console.error('Error adding friend:', error);
      res.status(500).json({ error: 'Unable to add friend' });
    });
  },
  removeFriend(req, res) {
    const userId = req.params.userId;
    const friendId = req.params.friendId;

    User.findOneAndUpdate(
      { _id: userId},
      { $pull: { friends: friendId } },
      { new: true }
    )
    .then((updatedFriend) => {
      if (!updatedFriend) {
        console.log('User not found.');
        return res.status(404).json({ error: 'User not found.' });
      }
  
      console.log('Friend removed');
      res.status(200).json(updatedFriend);
    })
    .catch((error) => {
      console.error('Error removing friend:', error);
      res.status(500).json({ error: 'Unable to remove friend' });
    });
  },
}

