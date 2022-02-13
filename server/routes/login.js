const { Router } = require('express');
const authController = require('../controller/auth.controller');

const authRouter = Router();

authRouter.post('/signup', authController.signUp);
authRouter.post('/signin', authController.signIn);
authRouter.get('/signout', authController.signOut);
authRouter.get('/check', authController.checkAuth);

module.exports = authRouter;
