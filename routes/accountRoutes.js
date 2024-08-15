import { Router } from 'express';
import { createAccount, login } from '../controllers/accountController.js';
//import { ValidateToken } from '../middlewares/validateToken.js';
const router = Router();

router.post('/create-account', createAccount);
router.post('/login', login);
// router.get('/getAccountById/:id', findOne);
// router.put('/updateOne:id', update);
// router.delete('/deleteOne:id', deleteUser);

export default router;
