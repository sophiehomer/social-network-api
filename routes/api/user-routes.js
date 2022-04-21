const router = require('express').Router();
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller');

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

router
  .route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
