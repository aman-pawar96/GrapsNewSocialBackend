import express from 'express';
import demo from '../api/Demo/Demo_Route'

const router = express.Router();

router.use('/demo',demo);

export default router;