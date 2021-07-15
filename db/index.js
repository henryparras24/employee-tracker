const connection = require("./connection");
class DB {
    constructor(connection) {
        this.connection = connection;
      }
      getAllEmployees() {
        return this.connection.query("SELECT * FROM employees");
      }
      getAllDepartments() {
        return this.connection.query("SELECT * FROM departments");
      }
      getAllRoles() {
        return this.connection.query("SELECT * FROM roles");
      }
      addDepNow(department) {
        return this.connection.query("INSERT INTO departments SET ?", department);
      }
      addRoleNow(role) {
        return this.connection.query("INSERT INTO roles SET ?", role);
      }
      addEmployeeNow(employee) {
        return this.connection.query("INSERT INTO employees SET ?", employee);
      }
}

module.exports = new DB(connection);