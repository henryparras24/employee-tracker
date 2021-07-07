const inquirer = require('inquirer');


function employeeChoices(){

    inquirer.prompt ([
      {
        type: 'list',
              name: 'choice',
              message: 'Welcome to Employee Tracker, where would you like to start?',
              choices: ["add department", "add role", "add employee", "view departments", "view roles", "view employees", "update employee roles", "exit"]
      },
    ])
  
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

async function viewEmployees () {
// displaying all employees
 const employees = await employeeTracker.getAllEmployees()  
 console.table(employees) 

 employeeChoices();

}

async function allEmployeesByDept () {

    const allDepartments = await employeeTracker.getAllDepartments()

    const departmentDetails = allDepartments.map(({id, name}) => ({
        name: name,
        value: id

    }))

    const departmentId = await inquirer.prompt ([
        {
          type: 'list',
                name: 'choice',
                message: 'Which department do you want to search employees for?',
                choices: departmentDetails
        },
      ])
// get all employees and show all employees
}


employeeChoices();