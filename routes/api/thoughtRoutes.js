const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtController');  

router.route('/')
.get(getThoughts);

router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought)

router.route('/:userId')
.post(createThought);


module.exports = router;