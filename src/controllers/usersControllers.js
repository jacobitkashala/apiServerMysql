import Mysql from "mysql";


const connection = Mysql.createConnection(
    {
        host: process.env.DB_HOST || '127.0.0.1',
        user: process.env.DB_USER || 'pierre',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DATABASE || 'gestion_porto',
    }
)
export const testConnection = () => {
    connection.connect((err) => {
        if (err) console.log("erreur :" + err);

        else console.log("connection etablis");

    })
}

export const getLogin =  
    (req,resp)=>{
        connection.query("SELECT * FROM login", (error, resultat) => {
            if (error) console.log("error lor du select");
            else resp.status(200).json(resultat);
            console.log(resultat);
        })
    }
        

   


//information personnel

// export const getInformation=((req,resp)=>{
//    resp.send(mesInformation);

// })
// export const updateInnformation=((req,resp)=>{

// })  

// // les differents projets
// export const getPorjet=((req,resp)=>{
//     resp.send(projetRealiser)
// }) 

// export const postPorjet=((req,resp)=>{
//    const newProjet=req.body.data;
//    resp.status(201);
//     console(dataProjet)
// }) 

// //langage de programmation
// export const getLangageProgrammation=((req,resp)=>{
//     resp.send(langageProgrammation);
// }) 
// export const postLangageProgrammation=((req,resp)=>{
//     resp.send(langageProgrammation);
// }) 
// //console.log(BaseDonnee);
// //base de données
// // export const getUserLangageProgrammation=((req,resp)=>{
// //     resp.send(BaseDonnee);
// // })


