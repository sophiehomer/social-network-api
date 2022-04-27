const router = require('express').Router();
const {
  getOneThought,
  getThoughts,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getThoughts)
  .post(addThought);

router
  .route('/:thoughtId')
  .get(getOneThought)
  .put(updateThought)

router
  .route('/:userId/:thoughtId')
  .delete(removeThought)

router
  .route('/:thoughtId/reactions/:reactionId')  
  .delete(deleteReaction);

router
  .route('/:thoughtId/reactions')
  .post(addReaction)


module.exports = router;
