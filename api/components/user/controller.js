const UserModel = require("../../models/userModel")

const userController = {
    handleLogin: async (req, res)=>{
        try{
            const {username, password} = req.body
            const result = await UserModel.login(username, password)
            if(result.length > 0){
                res.writeHead(200, {'Content-Type': 'application/json'})
                res.end(JSON.stringify({succes: true, user: result[0]}))

            }else{
                res.writeHead(401, {'Content-Type': 'application/json'})
                res.end(JSON.stringify({succes: false, message: "usuario no enocontrado"}))
            }
        }catch(err){
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                success: false,
                message: 'Error en el servidor',
                error: error.message
            }));
        }
    }
}

module.exports = userController;