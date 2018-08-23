var connection = require('./connection.js')
var orm = {
    selectAll: function(table, cb) {
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString,[table], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, column, value, cb) {
        let queryString = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(queryString, [table, column, value], function(err,result) {
            if (err) {
                throw err;
            }
            cb(result);
            //console.log({id: result.insertId}, result);
        });
    },
    updateOne: function(table, setCol, setVal, col, val, cb) {
        let queryString = 'UPDATE ?? SET ??=? WHERE ??=?';
        connection.query(queryString, [table, setCol, setVal, col, val], function(err,result) {
            if (err) {
                throw err;
            }
            cb(result);
            console.log('orm \n'+result);
        });
    }
}

module.exports = orm;