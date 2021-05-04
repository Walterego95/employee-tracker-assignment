INSERT INTO department (name)
VALUES
('software'),
('hardware'),
('sales'),
('management');

INSERT INTO role (title, salary, department_id)
VALUES
('Software Developer', 90000, 1),
('IT Technician', 120000, 2),
('Salesman', 75000, 3),
('General Manager ', 70000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Giovanni', 'Mucciaccia', 1, NULL),
('Giancarlo', 'Animale', 2, NULL),
('Giuseppe', 'Bellatri', 3, NULL),
('Giacomo', 'Carlamito', 4, 7777);
