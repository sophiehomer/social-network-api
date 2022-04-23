const router = require('express').Router();
const {
  getThoughts,
  addThought,
  updateThought,
  removeThought,
  addReply,
  removeReply,
  // addReaction
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getThoughts)
  .post(addThought);

router
  .route('/:thoughtId')
  .put(updateThought)

router
  .route('/:userId/:thoughtId')
  .delete(removeThought)
  .put(addReply)

// router
//   .route('/:thoughtId/reactions')
//   .post(addReaction);

  

router.route('/:uerId/:thoughtId/:replyId').delete(removeReply);

module.exports = router;
