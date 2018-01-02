SHOW processlist;
SHOW TABLES FROM index_join_and_self; --список таблиц в базе

SHOW TABLES FROM index_join_and_self; --список столбцов в таблице
SHOW INDEX FROM index_test FROM index_join_and_self; --список индексов
DESC index_test; --структура таблицы

DELETE FROM contacts WHERE user_id;
ALTER TABLE contacts AUTO_INCREMENT = 0;

CREATE TABLE index_test(
  id INT AUTO_INCREMENT PRIMARY KEY, --PRIMARY KEY не повторять значение NOT NULL обязательное заполнение
  name VARCHAR (30),
  index_ID VARCHAR (10)
);

CREATE TABLE contacts(
  user_id INT AUTO_INCREMENT PRIMARY KEY, --INT целое число
  name VARCHAR (30) NOT NULL
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
