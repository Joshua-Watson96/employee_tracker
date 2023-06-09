-- Active: 1684027242033@@127.0.0.1@3306@employee_db
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER,
    CONSTRAINT fk_department FOREIGN KEY (department_id)  REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL, 
    role_id INTEGER,
    CONSTRAINT fk_role FOREIGN KEY (role_id)  REFERENCES role(id) ON DELETE CASCADE,
    manager_id INTEGER,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id)  REFERENCES employee(id) ON DELETE SET NULL
    department_id INTEGER,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

-- department

-- id: INT PRIMARY KEY

-- name: VARCHAR(30) to hold department name

-- role

-- id: INT PRIMARY KEY

-- title: VARCHAR(30) to hold role title

-- salary: DECIMAL to hold role salary

-- department_id: INT to hold reference to department role belongs to
-- employee

-- id: INT PRIMARY KEY

-- first_name: VARCHAR(30) to hold employee first name

-- last_name: VARCHAR(30) to hold employee last name

-- role_id: INT to hold reference to employee role

-- manager_id: INT to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)