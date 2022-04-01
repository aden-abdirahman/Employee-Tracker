INSERT INTO department (name)
VALUES ("HR"), ("Executives"), ("Management"), ("SAAS"), ("Clerks");

INSERT INTO role (position, salary, department_id)
VALUES
("HR", 50000, 2),
("CEO", 136000, 3),
("SAAS Manager", 75000, 3),
("Staff Engineer", 55000, 4),
("Accounting Manager", 70000, 3);

INSERT INTO `employee_db`.`employee` (`first_name`, `last_name`, `role_id`) VALUES ('Salim', 'Jama', '2');
INSERT INTO `employee_db`.`employee` (`first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('Carrie', 'Samuels', '5', '1');
INSERT INTO `employee_db`.`employee` (`first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('Justin', 'Comet', '4', '4');
INSERT INTO `employee_db`.`employee` (`first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('Bingo', 'Jones', '3', '1');
INSERT INTO `employee_db`.`employee` (`first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('Debby', 'Tilman', '1', '4');
INSERT INTO `employee_db`.`employee` (`first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('Steve', 'Brown', '4', '4');
INSERT INTO `employee_db`.`employee` (`first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('Colby ', 'Andrews', '4', '4');