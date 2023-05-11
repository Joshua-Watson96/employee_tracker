// imports mysql2
const mysql = require('mysql2')
// imports inquirer
const inquirer  = require("inquirer")
// requires dotenv
require('dotenv').config()
// creates connection for mySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'employee_db'
})

const promptUser = () => { 
    // prompts user with choices of what they would like to see
    inquirer.prompt([
    {
        type: 'list',
        name: 'choices',
        message: 'What would you like to do?',
        choices: [
        'View all departments',
        'View all employees', 
        'Add employee', 
        'Add a department', 
        'Add a role', 
        'Update an employee role',
        'Quit']

    }
    ])
    .then((answers) => {
        const { choices } = answers;
        // if user selects 'View all departments'; show showDepartment function
        if(choices === "View all departments"){
            showDepartments();
        }
        // if user selects 'View all employees'; show showEmployees function
        if(choices === "View all employees"){
            showEmployees();
        }
        // if user selects 'Add employee'; show addEmployee function
        if(choices === "Add employee"){
            addEmployee();
        }
        // if user selects 'Add a department'; show addDepartment function
        if(choices === "Add a department"){
            addDepartment();
        }
        // if user selects 'Add a role'; show addRole function
        if(choices === "Add a role"){
            addRole();
        }
        // if user selects 'Update an employee role'; show updateRole function
        if(choices === "Update an employee role"){
            updateRole();
        }
        // Quits application
        if(choices === "Quit"){
            connection.end
        };
    });
};

// view all Departments function
showDepartments = () => {
console.log('Showing all departments');
const sql = ``
}

// view all employees function
showEmployees = () => {
    console.log('Showing all employees');
    const sql = ``
}

// Add employee function
addEmployee = () => {
   inquirer.prompt([
    {
        // prompts user to input employees first name
        type: 'input',
        name: 'firstName',
        message: 'Please enter the employees first name',
        validate: addFirstName => {
            if (addFirstName) {
                return true;
            } else {
                console.log('Please enter a first name');
                return false;
            }
        }
    },
    {
        // prompts user to input employees last name
        type: 'input',
        name: 'lastName',
        message: 'Please enter the employees last name',
        validate: addlastName => {
            if (addlastName) {
                return true;
            } else {
                console.log('Please enter a last name');
                return false;
            }
        }

    }
   ])
   // adds the new employee to the database 
   .then(answer => {
    const answerAdd = [answer.firstName, answer.lastName]
   })

}

// Add department function
addDepartment = () => {
    

}

// Add role function
addRole = () => {
    

}

// Update employee role function
updateRole = () => {
    console.log('Showing all departments');

}