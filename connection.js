var mysql	= require('mysql');
var connection = mysql.createPool({
	multipleStatments: true,
	connectionLimit: 10,
	host	 : 'zanner.org.ua',
	port	 : '33321',
	user	 : 'ka66_17',
	password : '123456',
	database : 'ka66_17'
});
module.exports = connection;
