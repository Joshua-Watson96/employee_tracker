// imports mysql2
const mysql = require('mysql2')
// imports inquirer
const inquirer  = require("inquirer")

require('dotenv').config()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: ''
})

const promptUser = () => { 
    inquirer.prompt[
    {
        type: 'list',
        name: 'choices',
        message: 'What would you like to do?',
        choices: [
        'View All Departments',
        'View All Employees', 
        'Add Employee', 
        'Add A Department', 
        'Add A Role', 
        'Update An Employee Role',
        'Quit']

    }
    ]}