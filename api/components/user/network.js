const express = require("express");
const response = require("../../../network/response")
const controller = require("./controller")

const router = express.Router();

router.get("/", (req,res)=>{
    const lista = controller.list();
    response.succes(req,res, lista, 200)
})

module.exports = router;