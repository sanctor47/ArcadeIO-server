import express from 'express';
import * as userController from '../controllers/user.controller';
// import { newUserValidator } from '../validators/user.validator';
// import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all users
router.get('', userController.getAllUsers);

//route to create a new user
router.post('', userController.newUser);

//route to get a single user by their user id
router.get('/id/:_id', userController.getUser);

//route to update a single user by their user id
router.put('/id/:_id', userController.updateUser);

//route to delete a single user by their user id
router.delete('/id/:_id', userController.deleteUser);

router.post('/register', userController.register)
router.post('/login', userController.login)
// router.get('/register')


export default router;
