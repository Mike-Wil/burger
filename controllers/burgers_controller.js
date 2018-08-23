var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

router.get('/', function(req,res) {
    burger.selectAll(function(data) {
        let hamObj = {
            burgers: data
        }
        console.log('get controller');
        res.render('index',hamObj);
    })
 
});
router.post('/api/burgers', function(req,res) {
    console.log('post controller');
    // console.log(req.body.burgerName);
    burger.insert(['burger_name'], [req.body.burger_name], function(data) {
        res.json(data);
    });
    res.redirect('/');
});
router.put('/api/burgers/:id', function(req,res) {
    console.log('put controller');
    burger.update([req.body.devoured],[req.params.id], function(data) {
        if (data.changedRows===0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;