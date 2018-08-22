var connection = require('./connection.js')
const orm = {
    selectAll: function(table, cb) {
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString,[table], function(err, result) {
            if (err) {
                return res.status(500).end();
            }
            cb(result);
        });
    },
    insertOne: function(table, column, value, cb) {
        let queryString = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(queryString, [table, column, value], function(err,result) {
            if (err) {
                return res.status(500).end();
            }
            cb(result);
            //console.log({id: result.insertId}, result);
        });
    },
    updateOne: function(table, setCol, setVal, col, val, cb) {
        let queryString = 'UPDATE ?? SET ??=? WHERE ??=?';
        connection.query(queryString, [table, setCol, setVal, col, val], function(err,result) {
            if (err) {
                return res.status(500).end();
            } else if (result.changedRows===0) {
                return res.status(404).end();
            }
            cb(result);
            console.log(result);
            res.status(200).end();
        });
    }
}

module.exports = orm;