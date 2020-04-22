// import the ORM to create functions that will interact with the database
var orm = require ("../config/orm");

var burger = {
    all: function(bd){
        orm.all("burgers", function(res) {
            bd(res);
        });
    }
}
module.exports = burger;