import {
    getLogin,
    getInformation,
    updateInformation,
    getApplication,
    postApplication,
    deleteApplication,
    updateApplication,
    getLangage,
    postLangage

} from "../controllers/usersControllers";

function routes(app) {
    //information login;
    app.route('/api/information/login')
        .get(getLogin)

    //mes informations person
    app.route('/api/information')
        .get(getInformation);

    app.route('/api/information/:password')
        .put(updateInformation);

    //Application
    app.route('/api/application')
        .get(getApplication)
        .post(postApplication);

    app.route('/api/application/:Id')
        .put(updateApplication)
        .delete(deleteApplication);
    //Application
    app.route('/api/langageprogrammation')
        .get(getLangage)
        .post(postLangage);

    // app.route('/api/langageprogrammation:Id')
    //     .put(updateApplication)
    //     .delete(deleteApplication);
}

export default routes
