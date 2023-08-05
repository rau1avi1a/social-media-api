const { Thought, User, Reaction } = require('../models');


module.exports = {
    // Get all students
    getThoughts(req, res) {
      Thought.find()
        .populate('user')
        .then(async (thoughts) => {
          const thoughtData = {
            thoughts,
          };
          return res.json(thoughtData);
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    getSingleThought(req, res) {
      Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
      const { thoughtText, createdAt } = req.body;
      const userId = req.params.userId;
    
      Thought.create({
        thoughtText,
        createdAt,
        user: userId, 
      })
      .then((thought) => {
        res.json(thought);
        return User.findOneAndUpdate(
          { _id: userId },
          { $push: { thought: thought._id } },
          { new: true },
        )
      })
      .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res) {
      Thought.findOneAndRemove({ _id: req.params.thoughtId })
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No such thought exists' })
            : res.json({ message: 'Deleted thought'})
            )    
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    },
    updateThought(req, res) {
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with this id!' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
  
  }
  