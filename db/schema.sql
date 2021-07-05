DROP DATABASE IF EXISTS employeeTracker_DB;

CREATE DATABASE employeeTracker_DB;

USE employeeTracker_DB;

-- creates departments table with these columns
CREATE TABLE departments (
    id INT(10) NOT NULL AUTO_INCREMENT, 
    names VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- creates roles table with these columns
CREATE TABLE roles (
    id INT(10) NOT NULL AUTO_INCREMENT, 
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT(10) NOT NULL,
    PRIMARY KEY (id)
);

-- creates employees table with these columns
CREATE TABLE employees (
    id INT(10) NOT NULL AUTO_INCREMENT, 
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT(10) NOT NULL,
    manager_id INT(10) 
    PRIMARY KEY (id)
);