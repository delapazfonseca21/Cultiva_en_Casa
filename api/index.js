const express = require('express')

const config = require("../config.js")
const user = require("./components/user/network");

const app = express();

//rutas
app.use("/api/user", user)

app.listen(config.api.port, ()=>{
    console.log("corriendo en el puerto ",config.api.port);
})