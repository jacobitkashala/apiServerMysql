import { 
    userInfos, 
    projetRealiser,
    langageProgrammation,
    BaseDonnee } from "../db/dataPersonne";

//information personnel
export const getUserInfo=((req,resp)=>{
    resp.send(userInfos)
})
export const updateUserInfo=((req,resp)=>{
    resp.send(userInfos)
})  

// les differents projets
export const getUserPorjet=((req,resp)=>{
    resp.send(projetRealiser)
}) 

export const addUserPorjet=((req,resp)=>{
    resp.send(projetRealiser)

}) 

//langage de programmation
export const getUserLangageProgrammation=((req,resp)=>{
    resp.send(langageProgrammation);
}) 
export const addUserLangageProgrammation=((req,resp)=>{
    resp.send(langageProgrammation);
}) 
//console.log(BaseDonnee);
//base de données
// export const getUserLangageProgrammation=((req,resp)=>{
//     resp.send(BaseDonnee);
// })


