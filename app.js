import express from "express";
import routes from "./src/routes/userRoutes";
import session from 'express-session';
import Cors from "cors";
import 
const app = express();

app.use(express.json());

app.use(Cors({
    origin: ["http://localhost:3000/"],
    method: ["GET", "PUT", "POST", "DELETE"],
    Credential: true
}))

// app.use((req, resp, next) => {
//     resp.setHeader('Access-Control-Allow-Origin', '*');
//     resp.setHeader('Access-Control-Allow-Methods', 'OPTOINS, GET, POST, DELETE, PUT');
//     resp.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

app.use(session({
    secret: "my secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

routes(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Our server is listening on the ${PORT} port`);
});
