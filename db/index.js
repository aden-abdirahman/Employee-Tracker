const connection = require('./connection');
require('sequelize');
require('mysql2');

class DB {
    constructor(connection) {
      this.connection = connection;
    }
  
    findDepartments() {
      return this.connection
        .promise()
        .query('SELECT * FROM department ORDER BY name;');
    }
  
    findRoles() {
      return this.connection
        .promise()
        .query(
          'SELECT role.position, role.id AS role_id, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id ORDER BY role.position'
        );
    }
  
    findEmployees() {
      return this.connection
        .promise()
        .query(
          'SELECT employee.id AS id, employee.first_name, employee.last_name, role.position, role.salary, department.name AS department_name, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id ORDER BY role.salary DESC;'
        );
    }
  
    findBudgets() {
      return this.connection
        .promise()
        .query(
          'SELECT department.name AS department, SUM(role.salary) AS utilized_budget FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id GROUP BY department.id ORDER BY utilized_budget DESC'
        );
    }
  
    addDepartment(departmentName) {
      return this.connection
        .promise()
        .query('INSERT INTO department (name) VALUES (?)', departmentName);
    }
  
    addRole(rolePosition, roleSalary, departmentId) {
      return this.connection
        .promise()
        .query('INSERT INTO role (position, salary, department_id) VALUES (?,?,?)', [
          rolePosition,
          roleSalary,
          departmentId,
        ]);
    }
  
    addEmployee(firstName, lastName, roleId, managerId) {
      return this.connection
        .promise()
        .query(
          'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)',
          [firstName, lastName, roleId, managerId]
        );
    }
  
    updateEmployee(employeeId, roleId) {
      return this.connection
        .promise()
        .query('UPDATE employee SET role_id = (?) WHERE (id) = (?)', [
          roleId,
          employeeId,
        ]);
    }

    removeEmployee(employeeId) {
      return this.connection
      .promise().
      query(
        "DELETE FROM employee WHERE id = ?",
        employeeId
      );
    }
    removeRole(roleId) {
      return this.connection
      .promise()
      .query("DELETE FROM role WHERE id = ?", roleId);
    }
    removeDepartment(departmentId) {
      return this.connection
      .promise()
      .query(
        "DELETE FROM department WHERE id = ?",
        departmentId
      );
    }
  }
  
  module.exports = new DB(connection);
  