const router = require('express').Router();

const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    postReaction,
    addFriend,
    removeFriend,
    deleteReaction
} = require('../../controllers/userController');  
  
router.route('/')
.get(getUsers)
.post(createUser);

router.route('/:userId')
.get(getUser)
.put(updateUser)
.delete(deleteUser);

router.route('/:userId/:thoughtId')
.post(postReaction);

router.route('/:thoughtId/:reactionId')
.delete(deleteReaction);

router.route('/:userId/friends/:friendId')
.put(addFriend)
.delete(removeFriend);

module.exports = router;