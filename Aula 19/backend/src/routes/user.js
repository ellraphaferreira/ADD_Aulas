import express, { Router } from 'express'
import { getPeople, createUser, updateUser, deleteUser } from '../controllers/UserController.js';
import { validateRegister } from '../middleware/userMiddleware.js';
const router = express.Router();

router
    .get('/users',getPeople) // localhost:8080/user/users
    .post('/register', validateRegister ,createUser)
    .put('/update/:id', updateUser)
    .delete('/delete/:id', deleteUser)
export default router