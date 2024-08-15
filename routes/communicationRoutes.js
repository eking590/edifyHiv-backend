import { Router } from 'express';
import { createCommunication } from '../controllers/communicationController.js';
//import { ValidateToken } from '../middlewares/validateToken.js';
const router = Router();

router.post('/create-messages', createCommunication);

// router.get('/getAccountById/:id', findOne);
// router.put('/updateOne:id', update);
// router.delete('/deleteOne:id', deleteUser);

export default router;
