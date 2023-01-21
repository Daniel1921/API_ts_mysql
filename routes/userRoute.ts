import {Router} from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/userController';

const router = Router();

router.get('/:id', getUser)
router.get('/', getUsers)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)



export default router;