import express, { Router } from 'express'
import {updatelivro, getlivro, createlivro, deletelivro } from '../controllers/UserController.js';
import { validateDelete,validateRegister,validateUpdate } from '../middleware/controlMiddleware.js';
const router = express.Router();

router
    .get('/livros', getlivro)
    .post('/register',validateRegister, createlivro)
    .put('/update/:id',validateUpdate, updatelivro)
    .delete('/delete/:id',validateDelete, deletelivro)
export default router