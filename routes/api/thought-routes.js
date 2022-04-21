const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReply,
  removeReply
} = require('../../controllers/thought-controller');

router.route('/:userId').post(addThought);

router
  .route('/:userId/:thoughtId')
  .put(addReply)
  .delete(removeThought);

router.route('/:uerId/:thoughtId/:replyId').delete(removeReply);

module.exports = router;
