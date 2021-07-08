const connection = require("./connection");
class DB {
    constructor(connection) {
        this.connection = connection;
      }
      getAllEmployees() {
        return this.connection.query("SELECT * FROM employees");

      }


}

module.exports = new DB(connection);