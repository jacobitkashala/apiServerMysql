const express =require('express');
const routes =require('./src/routes/userRoutes');
const session =require('express-session');
const Cors =require('cors');
const bodyParser =require('body-parser');
const cokieParser =require('cookie-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(Cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "PUT", "POST", "DELETE"],
    Credential: true
}))

app.use((req, resp, next) => {
    resp.setHeader('Access-Control-Allow-Origin', '*');
    resp.setHeader('Access-Control-Allow-Methods', 'OPTOINS, GET, POST, DELETE, PUT');
    resp.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use(cokieParser());
app.use(express.json());
app.use(session({
    secret: "my secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
        expires: 60 * 60 * 24
    }
}));

routes(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Our server is listening on the ${PORT} port`);
});
