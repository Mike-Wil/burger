var app = require('express')();
var burger = require('../models/burger.js');
var router = {


app.get('/', function(req,res) {

    res.render('index',);
});
app.post('/api/burgers', function(req,res) {
    req.body.burgerName

    res.redirect('/');
});
app.put('/api/devour', function(req,res) {
    if (result.changedRows===0) {
        return res.status(404).end();
    } else {
        res.status(200).end();
    }
});
}

module.exports = router;