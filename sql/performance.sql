 CREATE TABLE users(
   id INT PRIMARY KEY AUTO_INCREMENT,
   fnames VARCHAR(20) NOT NULL,
   lnsme  VARCHAR(20) NOT NULL,
   email VARCHAR(30) NOT NULL UNIQUE --UNIQUE не может повторяться
 );
INSERT INTO users VALUES (NULL, 'Petr', 'Radkov', 'radkov@gmail.com');
INSERT INTO users VALUES (NULL, 'Roman', 'Popov', 'roman@gmail.com');
INSERT INTO users VALUES (NULL, 'Evgeniy', 'Olivie', 'evgeniy@gmail.com');


CREATE TABLE private_inf(
  id INT PRIMARY KEY,
  icome INT NOT NULL DEFAULT 0 ,
  FOREIGN KEY (id) REFERENCES users (id)
);

INSERT INTO private_inf VALUES (1, 20000);
INSERT INTO private_inf VALUES (2, 19000);
INSERT INTO private_inf VALUES (3, 100);

SELECT u.fnames, u.lnsme, p.icome
FROM users u INNER JOIN private_inf p
ON u.id = p.id;

SELECT u.fnames, u.lnsme, p.icome
FROM users u INNER JOIN private_inf p
ON u.id = p.id
WHERE p.icome > (SELECT AVG (icome) FROM private_inf);

CREATE VIEW maxIncome AS
  SELECT u.fnames, u.lnsme, p.icome
  FROM users u INNER JOIN private_inf p
  ON u.id = p.id
  WHERE p.icome > (SELECT AVG (icome) FROM private_inf);

SELECT * FROM `maxIncome`;

DROP VIEW maxIncome;