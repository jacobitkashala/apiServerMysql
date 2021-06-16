import {
    getLogin,
    getInformation,
    updateInnformation
} from "../controllers/usersControllers";

function routes(app) {
    //information login;
    app.route('/api/information/login')
        .get(getLogin)

    //mes informations person
    app.route('/api/information')
        .get(getInformation);

    app.route('/api/information/:password')
        .put(updateInnformation);

    //Projet
    app.route('/api/portofolio/projets')
        // .get(getPorjet)
        .post(postPorjet);

    // app.route('/api/portofolio/projets/:projetId') 
    // .put( (req, resp) => {
    //     resp.send('un Put avec succé')
    // })
    // .delete( (req, resp) => {
    //     resp.send('un Delete avec succé')
    // });
}

export default routes
