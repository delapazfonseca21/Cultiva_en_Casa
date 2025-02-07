const storage = require("../../../storage/dummydb")
const nanoid = require('nanoid');
const tabla = "user";



module.exports = function (injectedStorage){
    let storage = injectedStorage;
    if(!storage){
        storage = require("../../../storage/dummydb")
    }
    function list(){
        return storage.list(tabla);
    }
    function get(id){
        return storage.list(tabla, id);
    }
    function upsert(body){
        const user = {
            name: body.name
        }
        if(body.id){
            user.id=body.id;
        }else{
            user.id = nanoid();
        }
    }

    return{
        list,
        get
    };
}