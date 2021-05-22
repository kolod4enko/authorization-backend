import Router from 'express';
import UserController from '../controllers/userController';
import checkedAuth from '../middleware/CheckedAuth';

const router = new Router();

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/auth', checkedAuth, UserController.check);

export default router;
