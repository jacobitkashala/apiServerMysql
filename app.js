const fetch = require('node-fetch');
const express = require("express");
const cors = require("cors");
const app = express();

let robotDataAll = [{ image: "" }];
async function getRobots() {
    await fetch("https://jsonplaceholder.typicode.com/users")
        .then(data => {
            return data.json();
        })
        .then(robotsInfo => {
            for (const index in robotsInfo) {
                robotDataAll = [...robotsInfo];
                robotDataAll[index].image = "https://robohash.org/" + index;
            };
        })
}

app.get('/api/robot-users', cors(), (req, res) => {
    getRobots().then(() => {
        res
            .status(200)
            .json(robotDataAll)
    })
});
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Our server is listening on the ${PORT} port`);
});