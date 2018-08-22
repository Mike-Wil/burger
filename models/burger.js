var orm = require('../config/orm.js')

var burger = {
	selectAll: function(cb){
		orm.selectAll('burgers', function(res){
			cb(res);
		});
	},

	insert: function(val, cb){
		orm.insertOne('burgers', 'burger_name', val, function(res){
			cb(res);
		});
	},

	update: function(colVal, conditionVal, cb){
		orm.updateOne('burgers', 'devoured', colVal, 'id', conditionVal, function(res){
			cb(res);
		});
	}
};

module.exports = burger;