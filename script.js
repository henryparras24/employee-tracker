const inquirer = require('inquirer');
const connection = require("./db");
const consoletable = require('console.table');



// presents user with choices to start employee tracker
function employeeChoices(){

    inquirer.prompt ([
      {
        type: 'list',
              name: 'choice',
              message: 'Welcome to Employee Tracker, where would you like to start?',
              choices: ["add department", "add role", "add employee", "view departments", "view roles", "view employees", "exit"]
      },
    ])
 // like an if else statement, switch case reads if the user picked this choice then run this code
    .then((answers) => {
      switch(answers.choice) {
        case "add department":
           addDepartment();
          break;
        case "add role":
          addRole();
          break;
        case "add employee":
          addEmployee();
          break;
        case "view departments":
          viewDepartments();
          break;
        case "view roles":
          viewRoles();
          break;
        case "view employees":
          viewEmployees();
          break;
        case "update employee roles":
          updateEmployeeRoles();
          break;
        default: 
          exit();
        
      }
     
      
    });
}
// function for viewing employees 
async function viewEmployees () {
 
try {
    const employees = await connection.getAllEmployees();
    console.table(employees);
  } catch(err) {
    console.log(err); 
  }


 employeeChoices();

}
// function for viewing departments
async function viewDepartments () {
     
    try {
        const departments = await connection.getAllDepartments();
        console.table(departments);
      } catch(err) {
        console.log(err); 
      }
    
    
     employeeChoices();
    
    }
// function for viewing roles
    async function viewRoles () {
         
        try {
            const roles = await connection.getAllRoles();
            console.table(roles);
          } catch(err) {
            console.log(err); 
          }
        
        
         employeeChoices();
        
        }
// function for adding department
    async function addDepartment () {
            
        try {
            const newDepartments = await inquirer.prompt([{
            name: 'names',
            type: 'input',
            message: 'Please enter new department name',
      }])
            

            const addedDepartment = await connection.addDepNow(newDepartments);
            console.log(addedDepartment);
            
        } catch(err) {
          console.log(err);
        }
        
        employeeChoices(); 
                
        }
// function for adding role               
        async function addRole () {
            
            try {
                const newRole = await inquirer.prompt([{
                name: 'title',
                type: 'input',
                message: 'Please enter new role title!',
                },
                {
                name: 'salary',
                type: 'input',
                message: 'Please enter new role salary!',
                },
                {
                name: 'department_id',
                type: 'input',
                message: 'Please enter new role department id!',
          }])
                
    
                const addedRole = await connection.addRoleNow(newRole);
                console.log(addedRole);
                
            } catch(err) {
              console.log(err);
            }
            
            employeeChoices(); 
                    
            }      
// function for adding employee
            async function addEmployee () {
            
                try {
                    const newEmployee = await inquirer.prompt([{
                    name: 'first_name',
                    type: 'input',
                    message: 'Please enter first name!',
                    },
                    {
                    name: 'last_name',
                    type: 'input',
                    message: 'Please enter last name!',
                    },
                    {
                    name: 'role_id',
                    type: 'input',
                    message: 'Please enter role id!',
                    },
                    {
                    name: 'manager_id',
                    type: 'input',
                    message: 'Please enter manager id!',
              }])
                    
        
                    const addedEmployee = await connection.addEmployeeNow(newEmployee);
                    console.log(addedEmployee);
                    
                } catch(err) {
                  console.log(err);
                }
                
                employeeChoices(); 
                        
                }      

employeeChoices();