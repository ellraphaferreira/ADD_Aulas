import express, { Router } from 'express'
import {updatePeca, getPecas, createPeca, deletePeca } from '../controllers/UserController.js';
import { validateDelete,validateRegister,validateUpdate } from '../middleware/userMiddleware.js';
const router = express.Router();

router
    .get('/pecas', getPecas)
    .post('/register',validateRegister, createPeca)
    .put('/update/:id',validateUpdate, updatePeca)
    .delete('/delete/:id',validateDelete,deletePeca)
export default router