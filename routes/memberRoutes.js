import { Router } from 'express';
import { createMember } from '../controllers/membersController.js';
//import { ValidateToken } from '../middlewares/validateToken.js';
const router = Router();

router.post('/create-member', createMember);

// router.get('/getAccountById/:id', findOne);
// router.put('/updateOne:id', update);
// router.delete('/deleteOne:id', deleteUser);

export default router;
