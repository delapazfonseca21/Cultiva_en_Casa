const controller = require("./controller");
const storage = require("../../../storage/dummydb")

module.exports = controller(storage);