import Mysql from "mysql";
const { v4: uuidv4 } = require("uuid");

let pswd = "priscille@serge";

const connection = Mysql.createConnection(
    {
        host: process.env.DB_HOST || '127.0.0.1',
        user: process.env.DB_USER || 'pierre',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DATABASE || 'gestion_porto',
    }
)
// function commandSql(commandQuery) {
//     connection.query("select * from framwork", (error, resultat) => {
//         if (error) console.log("error lor du select");
//         else {
//             return resultat;
//         }
//         return {error, resultat};
//     })
// }

const isEmpty = (arrayData) => {
    return arrayData.some(data => data.length === 0);
}

export const testConnection = () => {
    connection.connect((err) => {
        if (err) console.log("erreur :" + err);
        else console.log("connection etablis");
    })
}
//login
export const getLogin = (req, resp) => {
    connection.query("SELECT * FROM login", (error, resultat) => {
        if (error) console.log("error lor du select");
        else resp.status(200).json(resultat);
    })
}
//information
export const getInformation = ((req, resp) => {
    connection.query("select * from information", (error, resultat) => {
        if (error) console.log("error lor du select");
        else {
            resp.status(200).
                json(resultat);
        }
    })
})

export const updateInnformation = ((req, resp) => {
    const password = req.params.password;
    const { nom, postNom, prenom, ville, pays, niveau, telephone, nationalite } = req.body;
    let updateInfo = [nom, postNom, prenom, ville, pays, niveau, telephone, nationalite];
    let test = isEmpty(newInfo);
    let commandSql = "UPDATE information SET nom=?,postNom=?,prenom=?,ville=?,pays=?,niveau=?,telephone=?,nationalite=?";

    if (password === pswd && !test) {
        connection.query(commandSql, updateInfo, (error, resultat) => {
            if (error) console.log("error lor du select");
            else {
                resp.status(200).
                    json(resultat);
            }
        })
    } else {
        resp.send({ message: "error" });
    }
})

//framwork
export const getFramwork = ((req, resp) => {
    connection.query("select * from framwork", (error, resultat) => {
        if (error) console.log("error lor du select");
        else {
            return resp.status(200).
                json(resultat);
        }
    })
})

//projets
export const postApplicatoin = ((req, resp) => {
    const { nom, description, client, image } = req.body;
    newApp = [nom, description, client, image];
    let test = isEmpty(newApp);

    if (!test) {
        let id = uuidv4();
        connection.query("INSERT INTO application value(?,?,?,?)", [id, newApp], (err, resultat) => {
            if (!err) {
                resp.status(200).
                    json(resultat)
            }
        })
    }


})
// export const getApplicatoin=((req,resp)=>{
//     resp.send();
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


