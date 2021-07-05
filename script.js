const inquirer = require('inquirer');


function employeeTracker(){

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

employeeTracker();