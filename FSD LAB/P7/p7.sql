CREATE DATABASE students_db;
USE students_db;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);

DELIMITER //
CREATE PROCEDURE addStudent(IN sname VARCHAR(100), IN semail VARCHAR(100))
BEGIN
  INSERT INTO students(name, email) VALUES(sname, semail);
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE getStudents()
BEGIN
  SELECT * FROM students;
END //
DELIMITER ;