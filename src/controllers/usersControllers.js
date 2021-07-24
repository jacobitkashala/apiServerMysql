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
    console.log("Get")
    connection.query("select * from information", (error, resultat) => {
        if (error) console.log("error lor du select");
        else {
            resp.status(200).
                json(resultat);
        }
    })
})

export const updateInformation = ((req, resp) => {

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

//Application
export const getApplication = ((req, resp) => {

    connection.query("select * from application", (error, resultat) => {
        if (error) console.log("error lor du select");
        else {
            resp.status(200).
                json(resultat);
        }
    })
})
export const postApplication = ((req, resp) => {

    const { nameApp, descrApp, nameClient } = req.body;
    const image = "https://image1";
    const idApp = uuidv4();
    let newApp = [nameApp, descrApp, nameClient];
    let test = isEmpty(newApp);
    if (!test) {
        connection.query("INSERT INTO application value(?,?,?,?,?)", [idApp, nameApp, descrApp, nameClient, image], (err, resultat) => {
            if (!err) {
                resp.status(200).
                    json(resultat)
            }
        })
    }
})
export const deleteApplication = ((req, resp) => {
    const idApp = req.params.Id;
    connection.query("DELETE FROM application WHERE application_id=?", [idApp], (err, resultat) => {
        if (!err) {
            resp.status(200).
                json(resultat)
        }
    })
})
export const updateApplication = ((req, resp) => {
    console.log("Update");
    //console.log(req.params.id);
    // const { nameApp, descrApp, nameClient } = req.body;
    // const image = "https://image1";
    // const idApp = uuidv4();
    // let newApp = [nameApp, descrApp, nameClient];
    // let test = isEmpty(newApp);

    // if (!test) {
    //     connection.query("INSERT INTO application value(?,?,?,?,?)", [idApp, nameApp, descrApp, nameClient, image], (err, resultat) => {
    //         if (!err) {
    //             resp.status(200).
    //                 json(resultat)
    //         }
    //     })
    // }
})

//Langage de programmation
export const getLangage = ((req, resp) => {
    connection.query("select * from langage", (error, resultat) => {
        if (!error) {
            resp.status(200).
                json(resultat);
        }
    })
})
export const postLangage = ((req, resp) => {
    console.log(req.body)
    const { nameCompt, levelCompt } = req.body;

    const idCompt = uuidv4();
    let newApp = [nameCompt, levelCompt];
    let test = isEmpty(newApp);

    if (!test) {
        connection.query("INSERT INTO langage value(?,?,?)", [idCompt, nameCompt, levelCompt], (err, resultat) => {
            if (!err) {
                resp.status(200);
            }
            console.log(err);
        })
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