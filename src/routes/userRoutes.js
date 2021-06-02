import {
    getUserInfo,
    getUserPorjet }   from "../controllers/userInfo";

    function routes(app){
        
        //information Personnel
        app.route('/api/usersinfos') 
        .get(getUserInfo)
        .post( (req, resp) => {
            resp.send('un Post avec succé info')
        });
        
        app.route('/api/usersinfos/:usersId') 
        .put( (req, resp) => {
            resp.send('un Put avec succé')
        })
        .delete( (req, resp) => {
            resp.send('un Delete avec succé');
        });

        //Projet
        app.route('/api/userprojet') 
        .get(getUserPorjet)
        .post( (req, resp) => {
            resp.send('un Post avec succé')
        });

        app.route('/api/userprojet/:projetId') 
        .put( (req, resp) => {
            resp.send('un Put avec succé')
        })
        .delete( (req, resp) => {
            resp.send('un Delete avec succé')
        });
    }

export default routes 
