import {testConnection,
    getLogin }   from "../controllers/usersControllers";

    function routes(app){
        testConnection();
        
        //information Personnel ;
        app.route('/api/information') 
        .get(getLogin)
        
        app.route('/api/information/:Id') 
        .put( (req, resp) => {
            resp.send('un Put avec succé')
        })
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
