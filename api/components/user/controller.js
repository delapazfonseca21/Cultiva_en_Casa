const storage = require("../../../storage/dummydb")
const tabla = "user";

function list(){
    return storage.list(tabla);
}

module.exports = {
    list,
};