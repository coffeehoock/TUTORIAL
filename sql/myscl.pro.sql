SHOW processlist;

CREATE TABLE index_test(
  id INT AUTO_INCREMENT PRIMARY KEY, --PRIMARY KEY не повторять значение NOT NULL обязательное заполнение
  name VARCHAR (30),
  index_ID VARCHAR (10)
);

DESC index_test; --структура таблицы

SELECT * FROM `index_test`;

INSERT INTO index_test
  (id,name,`index_ID`)
  VALUES
  (null,'pavel','russia');

CREATE INDEX index_ID ON index_test (index_ID);
DROP INDEX ix ON index_test;
