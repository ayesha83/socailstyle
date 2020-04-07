const express = require("express");
const app = express();
const path = require("path")

app.use(express.static(path.join(__dirname, "public")))
app.get("/", (req, res) => {
    res.sendfile(__dirname = "public/index.html");
});

app.listen(3000, () => {
    // console
    console.log("Server listening on port 3000");
});