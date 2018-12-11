var mysql	= require('mysql');
var connection = mysql.createPool({
	multipleStatments: true,
	connectionLimit: 10,
	host	 : 'localhost',
	user	 : 'root',
	password : '',
	database : 'andrewbd'
});
module.exports = connection;
