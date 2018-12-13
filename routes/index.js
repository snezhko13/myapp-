var express = require('express');
var router = express.Router();
var connection = require('../connection');

/* GET home page. */
router.get('/', function(req, res, next) {
/*	connection.query('Select * FROM tshirts;', function(error,results,fields){*/
	connection.query('Select * FROM tshirts; Select * FROM hoodies; Select * FROM sweatshirts', [1, 2, 3], function(error,results,fields){
		console.log(results);
		if(error) throw error
		res.render('index',{
			results
		});
	});
  // res.render('index', { title: 'Express' });
});
router.post("/clientregister", function (req, res, next) {
  connection.query("CALL CUSTOMER_INSERT(?,?,?,?,?);", 
    [
    name = req.param("name"),
    password = req.param("password"),
    phone = req.param("phone"),
    email = req.param("email"),
    post_office = req.param("post_office"),
    ], function(error, results, fields) {
    
    if (error) {
    	 console.error(error.message);
    	 res.send(error)
     }
    console.log('Add to BD ');
    res.redirect('/');

  })
});
module.exports = router;
