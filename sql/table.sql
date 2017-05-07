-------------------- (RDBMS)---------------------
-- //////////////////////////////СОЗДАНИЕ ТАБЛИЦЫ

-- создать бвзу данных
CREATE DATABASE `mybd` DEFAULT CHARSET=utf8 COLLATE utf8_general_ci;
-- удалить бвзу данных
DROP DATABASE `mybd`

-- создать таблицу
CREATE TABLE table_test (
  id INTEGER,
name TEXT,
 age INTEGER 
);
-- удалить таблицу
DROP TABLE table_test

--заполнить таблицу 
INSERT INTO table_test (id, name, age) VALUES (1, 'Justin Bieber', 21)


-- редактирование таблицы
UPDATE table_test --Заявлении редактирует строку в таблице
SET age = 66  --вставляет параметры в этот  столбце
WHERE id = 2; --указывает на столбец для редактирования.

-- UPDATE table_test SET id = 4 WHERE name = 'Taylor Swift' 
-- UPDATE table_test SET name = 'brysly' WHERE id = 1

-- Добавить новый столбец в таблицу
ALTER TABLE table_test ADD COLUMN twitter_handle TEXT; 

-- Удалить все строки , которые имеют NULL значение в столбце twitter_handle
DELETE FROM table_test WHERE twitter_handle IS NULL;
-- WHERE предложениме , что позволяет выбрать , какие строки вы хотите удалить.


-- //////////////////////////////ЗАПРОСЫ

-- подклюиться к таблицестолбец
SELECT * FROM table_test; --посмотреть все данные
SELECT name FROM table_test --посмотреть имя а такжн ид и другие через запятую
-- вывести результаты таьлицы с цыфрой больше 8
SELECT * FROM table_test WHERE imdb_rating /*столбец*/  > 8;
--вывести строки налинающиеся на Se кончающиеся на en
SELECT * FROM table_test WHERE name LIKE 'Se_en';
SELECT * FROM table_test WHERE name BETWEEN 'A' AND 'J';
-- соответствует всем фильмы с именами, которые начинаются с "А"
SELECT * FROM table_test WHERE name LIKE 'A%';
-- соответствует всем фильмы, которые заканчиваются "а"
SELECT * FROM table_test WHERE name LIKE '%A';
SELECT * FROM table_test WHERE name LIKE '%A%';
SELECT * FROM table_test WHERE name BETWEEN 1990 AND 2000 AND genre = 'comedy';
--OR Оператор оценивает каждое условие отдельно , и если какой - либо из условий истинно
--то строка добавляется в результирующий набор.
SELECT * FROM table_test WHERE name = 'comedy' OR year < 1980;
-- вывести вчисловом порядке
SELECT * FROM table_test ORDER BY numb DESC; -- с увелечения на уменьшения
SELECT * FROM table_test ORDER BY numb ASC ; -- с уменьшения на увелечения
--ORDER BY отсортировать результ по определенной колонке
--либо в алфавитном порядке или численно.


/*LIMIT предложениме, который позволяет указать максимальное
	  количество строк, набор результатов будет иметь. Здесь мы указываем,
	  что результирующий набор не может иметь более трех строк.*/
		SELECT * FROM table_test ORDER BY numb DESC  LIMIT 3;
		SELECT * FROM table_test LIMIT 3

SELECT это пункт используется каждый раз, когда вы хотите запросить
	   информацию из базы данных.

WHERE является популярной командой, которая позволяет фильтровать
	  результаты запроса в зависимости от условий, которые вы укажете.

LIKE и BETWEEN специальные операторы , которые могут быть использованы 
			   в WHERE пункте

AND и OR специальные операторы , которые можно использовать с WHERE для
		 фильтрации запроса на двух или более условий.

ORDER BY позволяет сортировать результаты запроса в любом порядке
		 возрастания или убывания.

LIMIT позволяет указать максимальное количество строк, что запрос 
		будет возвращать. Это особенно важно в больших таблиц
		которые имеют тысячи или даже миллионы строк.


--////////////////подсчет строк

--подсчитать количество строк в таблице, чтобы использовать COUNT()
SELECT COUNT(*) FROM table_test;
SELECT COUNT(*) FROM table_test WHERE price = 0;
--организуют данные в группы. GROUP BY
SELECT price, COUNT(*) FROM table_test GROUP BY price;
SELECT price, COUNT(*) FROM table_test WHERE downloads > 20000 GROUP BY price;
--Каково общее количество загрузок для всех приложений 
SELECT SUM(downloads) FROM table_test
SELECT category, SUM(downloads) FROM table_test GROUP BY category;
--максималное число
SELECT MAX(downloads) FROM table_test;
SELECT MIN(downloads) FROM table_test;
SELECT AVG(downloads) FROM table_test; --среднее число
SELECT price, AVG(downloads) FROM table_test GROUP BY price;
SELECT name, category, MAX(downloads) FROM table_test GROUP BY category;
-- округления ROUND()
SELECT price, ROUND(AVG(downloads), 2) FROM table_test GROUP BY price;
SELECT price, ROUND(AVG(downloads)) FROM table_test GROUP BY price;


COUNT принимает имя столбца (ов) в качестве аргумента и подсчитывает
	  количество строк , где значение (s) не является NULL.

GROUP BY предложениме используется с агрегатными функциями, чтобы
		 объединить данные из одного или нескольких столбцов.

SUM() принимает имя столбца в качестве аргумента и возвращает сумму
	  всех значений в этом столбце.

MAX() принимает имя столбца в качестве аргумента и возвращает наибольшее
	  значение в этом столбце.

MIN() принимает имя столбца в качестве аргумента и возвращает наименьшее
	  значение в этом столбце.

AVG() принимает имя столбца в качестве аргумента и возвращает среднее
	  значение для этого столбца.

ROUND() принимает два аргумента, имя столбца и количество знаков после
		запятой для округления значения в этом столбце.



--//////////////////////////  РАБОТА С ДВУМЯ ТАБЛИЦАМИ

-- Таблица не может иметь более одного PRIMARY KEY столбца
CREATE TABLE table_two(id INTEGER PRIMARY KEY, name TEXT)

SELECT * FROM table_two;
SELECT * FROM table_one;

SELECT * FROM table_one WHERE id = 3
-- сочетает в себе данные из обеих таблиц
SELECT albums.name, albums.year, artists.name FROM table_one, table_two
-- более полезный тип соединения
SELECT * FROM table_one JOIN table_two ON albums.artist_id = artists.id;
-- Внешние соединения
SELECT * FROM table_one LEFT JOIN table_two ON albums.artist_id = artists.id

SELECT
  albums.name AS 'Album',
  albums.year,
  artists.name AS 'Artist'
FROM
  table_one
JOIN table_two ON
  albums.artist_id = artists.id
WHERE
  albums.year > 1980;

 /*Здесь мы хотим переименовать albums.nameстолбец как 'Album', 
 и artists.nameстолбец как 'Artist'.

Важно отметить, что столбцы не были переименованы в любой из 
таблиц. Алиасы появляются только в наборе результатов*/