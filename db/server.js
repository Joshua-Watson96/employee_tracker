const connection = require('./connection.js')

function viewDepartments() {
    const sql = `SELECT department_id AS id, department.name AS department FROM department`; 
}

function addEmployee(){
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