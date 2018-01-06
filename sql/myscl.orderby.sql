CREATE DATABASE users_db;
SHOW DATABASES LIKE '%_db%';
USE users_db;

CREATE TABLE users(
id INT AUTO_INCREMENT PRIMARY KEY,
fnames_list VARCHAR(20),
lnames_list VARCHAR(20),
reputation INT
);

INSERT INTO users VALUES (NULL,'petr','van','500');
INSERT INTO users VALUES (NULL,'lola','vin','324');
INSERT INTO users VALUES (NULL,'jimi','voode','21');
INSERT INTO users VALUES (NULL,'greg','edison','0');
INSERT INTO users VALUES (NULL,'maik','gayden','2');

SELECT * FROM users;

DELETE FROM `users` WHERE ((`id` > '5'));


UPDATE users
SET rank = CASE
WHEN reputation > 350 THEN 'elita'
WHEN reputation > 100 THEN 'popular'
WHEN reputation > 0   THEN 'user'
WHEN reputation = 0   THEN 'junior'
ELSE 'noob'
END;

SELECT fnames_list, reputation, rank
FROM users
ORDER BY fnames_list;

SELECT fnames_list, reputation, rank
FROM users
ORDER BY reputation DESC;

