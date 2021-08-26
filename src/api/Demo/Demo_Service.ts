import vacancy from '../../Data/Vacancy.json'
import application from '../../Data/Applications.json'
import user from '../../Data/User.json'
import fs from 'fs'

const getVacancies=async(

)=>
{
    const vacancies=vacancy
    return vacancy;
}

const getVacancy=async(
    vacancyId:string
)=>{
    const vacancies:any=vacancy;
    let returnVacancy={}
    for(let index=0;index<vacancies.length;index++){
        if(vacancies[index]["id"]===vacancyId){
            returnVacancy=vacancies[index]
            break;
        }
    }
    return returnVacancy;
}

const newApplication=async(
    body:any,
    minexp:any,
    totalSkills:any
)=>{
    let applications:any=application;
    let success=true
    for(let index=0;index<applications.length;index++){
        if(applications[index]["id"]===body["id"] && applications[index]["email"].toLowerCase()===body['email'].toLowerCase()){
            success=false
            break;
        }
    }
    if(success){
        let matchScore=0
        if(parseInt(body.exp)>=parseInt(minexp)){
            matchScore+=20
        }
        matchScore=matchScore+((body.skills.length/totalSkills)*80)
        let newApplication=body;
        newApplication['matchScore']=parseFloat(matchScore.toFixed(2));
        applications.push(newApplication);
        fs.writeFile ("./src/Data/Applications.json", JSON.stringify(applications), function(err:any) {
            if (err) throw err;
            return({success:false,msg:"Something went wrong.Please Retry"})
            }
        );
        return({success:true,msg:"Application Submitted"});

    }
    else{
        return({success:false,msg:"Application alerady Submitted and is under consideration"});
    }
}

export const login=async(
    body:any
)=>{
    let users:any=user
    let success=false;
    for(let index=0;index<users.length;index++){
        if(users[index]["email"].toLowerCase()===body.email.toLowerCase() && users[index]["password"]===body.password){
            success=true
            break
        }
    }

    return ({success:success})
}

export const getApplications=async(

)=>{
    let applications:any=application;
    applications.sort((a:any,b:any)=>{
        return (a.matchScore -b.matchScore)*-1
    })
    return applications
}

export default {
    getVacancies,
    getVacancy,
    newApplication,
    login,
    getApplications
}