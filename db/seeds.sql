INSERT INTO department (name, id)
VALUES 
('Accounting', 1),
('IT', 2),
('Marketing', 3),
('Logistics', 4);

INSERT INTO role (title, salary, department_id)
VALUES
('Accountant', 80000, 1),
('Financial Advisor', 80000, 1),
('Software Engineer', 120000, 2),
('Full Stack Developer', 90000, 2), 
('Digital Marketing', 100000, 3),
('Public Relations', 90000, 3),
('Marketing Coordindator', 70000, 3), 
('Logistics Manager', 90000, 4),
('Logistics Administrator', 80000, 4),
('Warehouse Manager', 700000, 4);



INSERT INTO employee (first_name, last_name, role_id, manager_id, department_id)
VALUES 
('Josh', 'Watson', 1, 1, 1),
('Ashlea', 'Guest', 2, NULL, 2),
('Danny', 'Yates', 3, 2, 3),
('Harry', 'Mazzarolo', 4, NULL, 4),
('Milad', 'Khrais', 5, NULL, 3),
('Maxwell', 'Watson', 6, 3, 1),
('Luna', 'Guest', 7, NULL, 2);

