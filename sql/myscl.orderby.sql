CREATE DATABASE users_db;
SHOW DATABASES LIKE '%_db%';
USE users_db;

CREATE TABLE users(
id INT AUTO_INCREMENT PRIMARY KEY,
fnames_list VARCHAR(20),
lnames_list VARCHAR(20),
reputation INT
);
