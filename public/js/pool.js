var mysql = require('mysql');

//数据库连接池
var pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	port: 3306,
	database: 'mobilecare'
});

module.exports = pool;
/*pool.getConnection(function (err){
	if(err){
		console.log('mysql connection error');
		console.log(err);
		throw err;
	}
});
*/
//mydb.query('USE mydb');