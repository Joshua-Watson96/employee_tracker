// imports mysql connection.js
const connection = require('./db/connection.js')
// imports inquirer
const inquirer  = require("inquirer")
// requires dotenv
require('dotenv').config()

promptUser()
function promptUser() { 
    // prompts user with choices of what they would like to see
    inquirer.prompt([
    {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [
            {
                name: 'View all departments',
                value: 'VIEW_DEPARTMENTS'
            }]
        
        // 'View all employees', 
        // 'Add employee', 
        // 'Add a department', 
        // 'Add a role', 
        // 'Update an employee role',
        // 'Quit']

    }
    ])
    .then(answers => {
        const choice = answers.choice;
        switch (choice) {
            case "VIEW_DEPARTMENTS":
                showDepartments()
                
                break;
        
            default:
                quit();
        }

        // // if user selects 'View all departments'; show showDepartment function
        // if(choice === "View all departments"){
        //     showDepartments();
        // }
        // // if user selects 'View all employees'; show showEmployees function
        // if(choice === "View all employees"){
        //     showEmployees();
        // }
        // // if user selects 'Add employee'; show addEmployee function
        // if(choice === "Add employee"){
        //     addEmployee();
        // }
        // // if user selects 'Add a department'; show addDepartment function
        // if(choice === "Add a department"){
        //     addDepartment();
        // }
        // // if user selects 'Add a role'; show addRole function
        // if(choice === "Add a role"){
        //     addRole();
        // }
        // // if user selects 'Update an employee role'; show updateRole function
        // if(choice === "Update an employee role"){
        //     updateRole();
        // }
        // // if user selects 'Quit'; Quits application
        // if(choice === "Quit"){
        //     connection.end
        // };
    // });
})};

// view all Departments function
function showDepartments() {
console.log('Showing all departments');
const sql = `SELECT department_id AS id, department.name AS department FROM department`; 
}

// view all employees function
showEmployees = () => {
    console.log('Showing all employees');
    const sql = `SELECT employee.id, 
    employee.first_name, 
    employee.last_name, 
    role.title,
    department.name AS department, 
    role.salary,`
}

// Add employee function
function addEmployee()  {
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

function quit(){
proccess.exit();
}