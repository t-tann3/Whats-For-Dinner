import express from 'express';
import { authController } from '../controllers/authController.js';

const router = express.Router();

// Registration route
router.post('/users/register', authController.register);

// Login route
router.post('/users/login', authController.login);

export default router;