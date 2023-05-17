// requires connection.js
const connection = require('./connection.js')

const inquirer = require('inquirer')

class db {
    constructor(connection){
        this.connection = connection;
    }

 viewDepartments() {
    return connection.promise().query(
        "SELECT department.id, department.name FROM department"
    )
    
}

viewEmployees(){
    return this.connection.promise().query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title,department.name AS department, role.salary"
    )

}

addNewEmployee(){
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
       .then(ans => {
            db.query(`INSERT INTO employee(first_name, last_name)
                    VALUES(?, ?)`, [ans.firstName, ans.lastName], (err, results)
       )})
    
    promptUser()
       
};

addNewDepartment(){
    inquirer.prompt([
        {
            // prompts user to input employees first name
            type: 'input',
            name: 'addNewDept',
            message: 'Please enter the departments name',
            
        }])
    .then(ans => {
        db.query(`INSERT INTO department(name)
        VALUES(?)`, ans.addNewDepartment, (err, results) => {
            if (err){
                console.log(err);
            } else {
                db.query(`SELECT * FROM department`)
            }
        })
    })
}

// Create a new department
createDepartment(department) {
    return this.connection.promise().query("INSERT INTO department SET ?", department);
  }

addNewRole(){
    const deptChoices = () => db.promise().query(`SELECT * FROM department`)
    .then((rows) => {
        let deptNames = rows[0].map(dept => dept.name);
        return deptNames
    })
    inquirer.prompt([
        {
            type: 'input',
            name: 'roleTitle',
            message: 'Please enter the new role title'
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: 'Please enter the salary for the new role'
        },
        {
            type: 'list',
            name: 'addDept',
            message:'Which department is the new role in?',
            choices: deptChoices
        }
    ]).then(ans => {
        db.promise().query(`SELECT id FROM department WHERE name = ?`, ans.addDept)
        .then(answer => {
            let answerId = answer[0].map(dept = dept.id);
            return answerId
        })
        .then((answerId) => {
            db.promise().query(`INSERT INTO roles`)
        })
    })
    .then(ans => {
        db.query('INSERT INTO role')
    })

}
updateRole(){

}

quit(){
    process.end;
}
}
module.exports = new db(connection)
// db(connection)