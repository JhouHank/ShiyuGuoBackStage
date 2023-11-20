// 連接資料庫的參數
let mysql = require("mysql");
let myDBconn = mysql.createConnection({
	user: process.env.DATABASE_USER,
	password: "",
	host: process.env.DATABASE_HOST,
	port: process.env.DATABASE_PORT,
	database: process.env.DATABASE,
});

module.exports = myDBconn;
