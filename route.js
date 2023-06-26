import express from 'express';
import { addUser, getUsers, getUser, editUser, deleteUser } from '../controller/userController.js';

const router = express.Router();

router.post('/add',addUser);
router.get('/view',getUsers);
router.get('/:id',getUser);  
router.put('/:id',editUser);  
router.delete('/:id',deleteUser);  


export default router;