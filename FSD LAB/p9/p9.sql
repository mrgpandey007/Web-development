CREATE DATABASE marks_db; USE marks_db;
CREATE TABLE students_marks(id INT AUTO_INCREMENT, name VARCHAR(50), s1 INT, s2 INT, s3 INT, PRIMARY KEY(id));

DELIMITER //
CREATE PROCEDURE addMarks(IN n VARCHAR(50), IN m1 INT, IN m2 INT, IN m3 INT)
BEGIN INSERT INTO students_marks(name,s1,s2,s3) VALUES(n,m1,m2,m3); END //

CREATE PROCEDURE getMarks()
BEGIN SELECT id,name,s1,s2,s3,(s1+s2+s3) total,ROUND((s1+s2+s3)/3,2) percent FROM students_marks; END //
DELIMITER ;