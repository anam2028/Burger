// import the ORM to create functions that will interact with the database
var orm = require ("../config/orm");

var burger = {
    all: function(bd){
        orm.all("burgers", function(res) {
            bd(res);
        });
    },
    // The variables cols and vals are arrays.
  create: function(cols, vals, bd) {
    orm.create("burgers", cols, vals, function(res) {
      bd(res);
    });
  },
  update: function(objColVals, condition, bd) {
    orm.update("burgers", objColVals, condition, function(res) {
      bd(res);
    });
  },
  delete: function(condition, bd) {
    orm.delete("burgers", condition, function(res) {
      bd(res);
    });
  }
};

module.exports = burger;