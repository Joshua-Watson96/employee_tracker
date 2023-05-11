// imports mysql2
const mysql = require('mysql2')

require('dotenv').config()
// creates connection for mySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'employee_db'
})

connection.connect(function (err) {
    if (err) throw err;
  });
  
  module.exports = connection;
  