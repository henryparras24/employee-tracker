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

}

module.exports = new DB(connection);