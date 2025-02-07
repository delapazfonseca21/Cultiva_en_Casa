const mysql = require("mysql2");

const dbConfig = {
    host: "blev61cqdlcu0hzroya2-mysql.services.clever-cloud.com",
    user: "uz4jefay25tyjaqs",
    password: "DzU2VzJsVSle8UmgOJOf",
    database: "blev61cqdlcu0hzroya2"
}

const conexion = mysql.createConnection(dbConfig)

conexion.connect((err)=>{
    if(err){
        console.log("hay un error en conexión", err)
        return
    }
    console.log("conexión correcta")
})

module.exports = conexion;