const db = require("../../config/databases");

const UserModel = {
    login: (username, password)=>{
        return new Promise((res, err)=>{
            const query = 'SELECT * FROM usuarios WHERE username = ? and password = ?';
            db.query(query, [username, password], (error, resolve)=>{
                if(err) err(error);
                res(resolve)
            })
        })
    }
}

module.export = UserModel;