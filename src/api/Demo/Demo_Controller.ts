import {Response} from 'express';
import service from './Demo_Service'

export const vacancies=async(
    req:any,
    res:Response
)=>{
    try{
        const vacancies = await service.getVacancies();
        res.send({
            status:200,
            body:vacancies,
            message:'Records Retrived Successfully'
        })
    }
    catch (e) {
        res.status(e.status || 500).send({
          status: e.status || 500,
          code: e.status ? e.code : 'UNKNOWN_ERROR',
          error: e.status ? e.message : 'Something went wrong'
        });
    }
};

export const vacancy=async(
    req:any,
    res:Response
)=>{
    try{
        const vacancy = await service.getVacancy(req.params.id);
        res.send({
            status:200,
            body:vacancy,
            message:'Records Retrived Successfully'
        })
    }
    catch (e) {
        res.status(e.status || 500).send({
          status: e.status || 500,
          code: e.status ? e.code : 'UNKNOWN_ERROR',
          error: e.status ? e.message : 'Something went wrong'
        });
    }
};

export const newApplication=async(
    req:any,
    res:Response
)=>{
    try{
        const vacancy = await service.newApplication(req.body.data,req.body.minexp,req.body.totalSkills);
        res.send({
            status:200,
            success:vacancy.success,
            message:vacancy.msg
        })
    }
    catch (e) {
        res.status(e.status || 500).send({
          status: e.status || 500,
          code: e.status ? e.code : 'UNKNOWN_ERROR',
          error: e.status ? e.message : 'Something went wrong'
        });
    }
};

export const login=async(
    req:any,
    res:Response
)=>{
    try{
        const login = await service.login(req.body);
        res.send({
            status:200,
            success:login.success
        })
    }
    catch (e) {
        res.status(e.status || 500).send({
          status: e.status || 500,
          code: e.status ? e.code : 'UNKNOWN_ERROR',
          error: e.status ? e.message : 'Something went wrong'
        });
    }
};

export const getApplications=async(
    req:any,
    res:Response
)=>{
    try{
        const applications = await service.getApplications();
        res.send({
            status:200,
            body:applications,
            message:"Records Retrived Successfully"
        })
    }
    catch (e) {
        res.status(e.status || 500).send({
          status: e.status || 500,
          code: e.status ? e.code : 'UNKNOWN_ERROR',
          error: e.status ? e.message : 'Something went wrong'
        });
    }
};