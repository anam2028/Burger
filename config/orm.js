// import mysql connection
var connection = require("../config/connection");


//object for all sql statement function

var orm = {
    all: function (tableInput, bd){
        var queryString = "Select * from" + "tableInput" + ";"
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            bd(result);
        });
    }
}
module.exports = orm;