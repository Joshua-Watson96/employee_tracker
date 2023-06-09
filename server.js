// imports mysql connection.js
const connection = require('./db/connection.js')
// imports inquirer
const inquirer  = require("inquirer");

// const Connection = require('mysql2/typings/mysql/lib/Connection.js');
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
      
    })
    .catch((error) => {
        console.error('Error executing query', error);
        connection.end();
    })
    .then(() => promptUser()) 
}

// view all employees function
function showEmployees() {
    console.log('Showing all employees');
    connection.promise()
    .query(`SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name AS department FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id `)
    .then(([rows, fields]) => {
        
        let employees = rows;
        console.table(employees)
        
})
.then(() => promptUser())
}



// Add employee function
function addEmployee()  {
   console.log("Enter the new employees first and last name.");
   inquirer.prompt([
    {
        name: 'addFirstName',
        message: 'Please enter first name',
    },
    {
        name: 'addLastName',
        message: 'Please enter last name'
    },
    {
        name: 'addNewEmpRole',
        message: 'Please enter role'
    }])

.then(answers => {
    const firstName = answers.addFirstName;
    const lastName = answers.addLastName;
    const role = answers.addNewEmpRole;

    // Insert the employee data into the database
    const query = 'INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)';
    connection.query(query, [firstName, lastName, role], (error, results) => {
      if (error) {
        console.error('Error inserting employee:', error);
      } else {
        console.log('Employee added successfully!');
      }
    // .then(ans => {
    //     connection.promise()
    //     .query('INSERT INTO employees (first_name, last_name, role) VALUES (?, ?, ?)')
        
    // })

})})
.then(() => promptUser())

}

// Add department function
function addDepartment()  {
    inquirer.prompt([
        {
            // prompts user to enter departments name
            // type: 'input',
            name: 'addNewDept',
            message: 'Please enter the departments name',
            
        }])
    .then(ans => {
        connection.promise()
        .query("INSERT INTO department SET ?;", ans.addNewDept) 
        .then(() => console.log(`added ${ans.addNewDept} to the database`))
        .then(() => promptUser()) 
        
    })
}

    



// Add role function
function addRole() {

console.log("Enter the new role name");
    

}

// Update employee role function
updateRole = () => {
    console.log('Showing all departments');

}

function quit(){
process.exit()
};
promptUser()
// showDepartments()