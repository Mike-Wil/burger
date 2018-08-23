var orm = require('../config/orm.js')

var burger = {
	selectAll: function(cb){
		orm.selectAll('burgers', function(res){
			console.log('model update');
			cb(res);
		});
	},

	insert: function(col, val, cb){
		orm.insertOne('burgers', col, val, function(res){
			console.log('model insert');
			cb(res);
		});
	},

	update: function(colVal, conditionVal, cb){
		orm.updateOne('burgers', 'devoured', colVal, 'id', conditionVal, function(res){
			console.log('model update');
			cb(res);
		});
	}
};

module.exports = burger;