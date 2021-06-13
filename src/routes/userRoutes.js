import {
    getInformation,
    getPorjet,
    postPorjet }   from "../controllers/usersControllers";

    function routes(app){
        //information Personnel ;
        app.route('/api/information') 
        .get(getInformation)
        
        // app.route('/api/portofolio/information/:Id') 
        // .put( (req, resp) => {
        //     resp.send('un Put avec succé')
        // })
        // .delete( (req, resp) => {
        //     resp.send('un Delete avec succé');
        // });
        // //Projet
        // app.route('/api/portofolio/projets') 
        // .get(getPorjet)
        // .post(postPorjet);

        // app.route('/api/portofolio/projets/:projetId') 
        // .put( (req, resp) => {
        //     resp.send('un Put avec succé')
        // })
        // .delete( (req, resp) => {
        //     resp.send('un Delete avec succé')
        // });
    }

export default routes 
