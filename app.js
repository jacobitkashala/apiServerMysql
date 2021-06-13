import express from "express";
import routes from "./src/routes/userRoutes";
import cors from "cors";
const app = express();

app.use(cors);

app.use(express.json());

app.use((req,resp,next)=>{
    resp.setHeader('Access-Control-Allow-Origin', '*');
    resp.setHeader('Access-Control-Allow-Methods', 'OPTOINS, GET, POST, DELETE, PUT');
    resp.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

routes(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Our server is listening on the ${PORT} port`);
});
