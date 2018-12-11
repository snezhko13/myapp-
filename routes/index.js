var express = require('express');
var router = express.Router();
var connection = require('../connection');

/* GET home page. */
router.get('/', function(req, res, next) {
	connection.query('Select * FROM tshirts;', function(error,results,fields){
	/*connection.query('Select * FROM tshirts; Select * FROM hoodies;',[1, 2], function(error,results,fields){*/
		console.log(results);
		if(error) throw error
		res.render('index',{
			results
		});
	});
  // res.render('index', { title: 'Express' });
});

module.exports = router;
