import express from "express"
import routes from "./src/routes/userRoutes"
const app = express();

app.use(express.json());
routes(app);
const PORT = process.env.PORT || 8880;

app.listen(PORT, () => {
    console.log(`Our server is listening on the ${PORT} port`);
});
