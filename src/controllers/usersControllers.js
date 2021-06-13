import { 
    mesInformation, 
    projetRealiser,
    langageProgrammation,
    } from "../db/dataPersonne";
    
//information personnel
export const getInformation=((req,resp)=>{
   resp.send(mesInformation);
  
})
export const updateInnformation=((req,resp)=>{
    
})  

// les differents projets
export const getPorjet=((req,resp)=>{
    resp.send(projetRealiser)
}) 

export const postPorjet=((req,resp)=>{
   const newProjet=req.body.data;
   resp.status(201);
    console(dataProjet)
}) 

//langage de programmation
export const getLangageProgrammation=((req,resp)=>{
    resp.send(langageProgrammation);
}) 
export const postLangageProgrammation=((req,resp)=>{
    resp.send(langageProgrammation);
}) 
//console.log(BaseDonnee);
//base de données
// export const getUserLangageProgrammation=((req,resp)=>{
//     resp.send(BaseDonnee);
// })


