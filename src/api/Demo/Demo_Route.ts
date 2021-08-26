import express from 'express';
import {vacancies,vacancy,newApplication,login,getApplications} from './Demo_Controller'

const router = express.Router()

router.get('/vacancies',vacancies);
router.post('/newApplication',newApplication)
router.post('/login',login)
router.get('/applications',getApplications)
router.get('/vacancy/:id',vacancy);



export default router;