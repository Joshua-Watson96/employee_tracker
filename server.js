// imports mysql connection.js
const connection = require('./db/connection.js')
// imports inquirer
const inquirer  = require("inquirer")
// requires dotenv
require('dotenv').config()
// requires index.js from the db
// const db = require('./db/index.js')



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
            },
            {
            name: 'View all employees',
            value: 'VIEW_EMPLOYEES'
            },
            {
            name: 'Add employee',
            value: 'ADD_EMPLOYEE'
            },
            {
            name: 'Add a department',
            value: 'ADD_DEPARTMENT'
            },
            {
            name: 'Add a role',
            value: "ADD_ROLE"
            },
            {
            name: 'Update an employee role',
            value: "UPDATE_ROLE"
            },
            {
            name: 'Quit',
            value: "quit"            
        }]

    }
    ])
    .then(answers => {
        const choice = answers.choice;
        switch (choice) {
            case "VIEW_DEPARTMENTS":
                showDepartments()
                break;
            case "VIEW_EMPLOYEES":
                showEmployees()
                break;
            case "ADD_EMPLOYEE":
                addEmployee()
                break;
            case "ADD_DEPARTMENT":
                addDepartment()
                break;
            case "ADD_ROLE":
                addRole()
                break;
            case "UPDATE_ROLE":
                updateRole()
                break;
            default:
                quit();
        }
})};

// view all Departments function
function showDepartments() {
    console.log("Now showing all departments!");
    connection.promise()
    .query("SELECT department.id, department.name FROM department")
    .then(([rows, fields]) => {
      rows.forEach((department) => {
        console.log(`ID: ${department.id}, Name: ${department.name}`);
      });
      connection.end(); // Close the database connection
    })
    .catch((error) => {
        console.error('Error executing query', error);
        connection.end();
    })
// promptUser()
}

// view all employees function
function showEmployees() {
    console.log('Showing all employees');
    connection.promise()
    .query(`SELECT employee.first_name, employee.last_name, department.name AS department_name
            FROM employee
            LEFT JOIN department ON employee.department_id = department.id
          `)
    .then(([rows, fields]) => {
        rows.forEach((employee) => {
          console.log(`First Name: ${employee.first_name}, Last Name: ${employee.last_name}, Department: ${employee.department_name}`);
        });
    })
   
//      const query = `
//     SELECT employee.first_name, employee.last_name, department.name AS department_name
//     FROM employee
//     LEFT JOIN department ON employee.department_id = department.id
//   `;

//   connection.promise()
//     .query(query)
//     .then(([rows, fields]) => {
//       rows.forEach((employee) => {
//         console.log(`First Name: ${employee.first_name}, Last Name: ${employee.last_name}, Department: ${employee.department_name}`);
//       });
//       connection.end(); // Close the database connection
//     })
//     .catch((error) => {
//       console.error('Error executing query:', error);
//       connection.end(); // Close the database connection
//     });
}



// Add employee function
function addEmployee()  {
   console.log("Enter the new employees first and last name.");
   

}

// Add department function
function addDepartment()  {
    db.addNewDepartment()
    console.log("Enter the new department name");
    promptUser()

}

// Add role function
function addRole() {
db.addNewRole()
console.log("Enter the new role name");
    

}

// Update employee role function
updateRole = () => {
    console.log('Showing all departments');

}

function quit(){
// proccess.exit();
};
promptUser()
// showDepartments()