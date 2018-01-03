SHOW processlist;
SHOW TABLES FROM index_join_and_self; --список таблиц в базе

SHOW TABLES FROM index_join_and_self; --список столбцов в таблице
SHOW INDEX FROM index_test FROM index_join_and_self; --список индексов
DESC index_test; --структура таблицы

DELETE FROM activetis WHERE act_id;


DELETE FROM contacts WHERE user_id;
ALTER TABLE contacts AUTO_INCREMENT = 0;


--=====================
--связи между таблицами
--=====================

--один к однеому
CREATE TABLE persons(
persons_id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR (30) NOT NULL);

INSERT INTO persons (persons_id,name)
VALUES
(NULL,'Petr');

CREATE TABLE locations(
person_location_id INT NOT NULL PRIMARY KEY,
name_locations VARCHAR (20),
FOREIGN KEY (person_location_id) REFERENCES persons (persons_id));

INSERT INTO locations (person_location_id,name_locations)
VALUES
(1, 'Moscow');




--один ко многим

CREATE TABLE user_jobj(
user_id INT PRIMARY KEY AUTO_INCREMENT,
user_name VARCHAR (20) NOT NULL,
profession_id INT
);

INSERT INTO user_jobj (user_id,user_name,profession_id)
VALUES
(NULL, 'Petr', NULL);

CREATE TABLE professions(
profession_id INT PRIMARY KEY,
profession_name VARCHAR(20) NOT NULL
);

INSERT INTO professions(profession_id,profession_name)
VALUES
(1,'malar');

ALTER TABLE user_jobj
ADD FOREIGN KEY (profession_id) REFERENCES professions (profession_id);

UPDATE user_jobj
SET profession_id = 1
WHERE user_name IN ('Jeniy','Kolia');







CREATE TABLE contacts(
  user_id INT AUTO_INCREMENT PRIMARY KEY, --INT целое число
  name VARCHAR (30) NOT NULL --NOT NULL не должно быть пустым
);

CREATE TABLE activetis(
  act_id INT AUTO_INCREMENT PRIMARY KEY,
  activite VARCHAR(20) NOT NULL,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES contacts (user_id));

INSERT INTO activetis (act_id,activite,user_id) VALUES
(NULL,'dogs',(SELECT user_id FROM contacts WHERE name = 'Petiya'));




--index

CREATE TABLE index_test(
  id INT AUTO_INCREMENT PRIMARY KEY, --PRIMARY KEY не повторять значение NOT NULL обязательное заполнение
  name VARCHAR (30),
  index_ID VARCHAR (10)
);


SHOW TABLES;
SELECT * FROM contacts;
DESC contacts;

SELECT * FROM `index_test`;

INSERT INTO index_test
  (id,name,`index_ID`)
  VALUES
  (null,'pavel','russia');

CREATE INDEX ix ON index_test (index_ID);
DROP INDEX ix ON index_test;
