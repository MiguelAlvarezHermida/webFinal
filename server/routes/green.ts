import express from 'express';
import GreenHttpHandler from '../handler/green';

const router = express.Router();
const greenHttpHandler = new GreenHttpHandler();

router.post('/User', greenHttpHandler.login);

export default router;