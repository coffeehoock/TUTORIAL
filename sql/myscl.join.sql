CREATE DATABASE books_db DEFAULT CHARSET=utf8 COLLATE  utf8_general_ci;
USE books_db;

CREATE TABLE publishers(
  publisher_id INT AUTO_INCREMENT PRIMARY KEY,
  publisher_name VARCHAR(30) NOT NULL
);

INSERT INTO publishers VALUE (NULL ,'all books');
INSERT INTO publishers VALUE (NULL ,'javascript de good pads');
INSERT INTO publishers VALUE (NULL ,'fentasy world');



CREATE TABLE books(
  book_id INT AUTO_INCREMENT PRIMARY KEY,
  book_name VARCHAR(30) NOT NULL,
  publisher_id INT,
  FOREIGN KEY (publisher_id) REFERENCES publishers (publisher_id)
);

INSERT INTO books VALUE (NULL ,'магия и кровь', 3);
INSERT INTO books VALUE (NULL ,'магия и кровь 2', 3);
INSERT INTO books VALUE (NULL ,'уникальная вселенная', NULL);
INSERT INTO books VALUE (NULL ,'физика просто', 2);
INSERT INTO books VALUE (NULL ,'рфссказ о цветах', 1);
INSERT INTO books VALUE (NULL ,'рфссказ о цветах 2', 1);
INSERT INTO books VALUE (NULL ,'рфссказ о цветах 3', 1);
--++++++++++++++++++++++++++++
--Перекресный соединение CROSS
--++++++++++++++++++++++++++++
SELECT b.book_name, p.publisher_name
FROM books b
CROSS JOIN publishers p;

--++++++++++++++++++++++++++++
--Естественное соединение NATURAL
--++++++++++++++++++++++++++++
SELECT b.book_name, p.publisher_name,
FROM books b
NATURAL JOIN publishers p;

SELECT b.book_name, p.publisher_name, p.publisher_id
FROM books b
NATURAL JOIN publishers p;

SELECT * FROM books NATURAL JOIN publishers;

--++++++++++++++++++++++++++++
--внутренние соединение INNER
--++++++++++++++++++++++++++++
SELECT b.book_name, p.publisher_name
FROM books b
INNER JOIN publishers p
ON b.publisher_id = p.publisher_id; --ON b.publisher_id <> p.publisher_id;

--++++++++++++++++++++++++++++
--внешнее соединение LEFT RIGHT
--++++++++++++++++++++++++++++

SELECT books.book_name, publishers.publisher_name
FROM books LEFT JOIN publishers
ON books.book_id = publishers.publisher_id;

SELECT books.book_name, publishers.publisher_name
FROM books LEFT JOIN publishers
USING (publisher_id);




SELECT books.book_name, publishers.publisher_name
FROM books LEFT JOIN publishers
ON books.publisher_id = publishers.publisher_id;


SELECT books.book_name, publishers.publisher_name
FROM books RIGHT JOIN publishers
USING (publisher_id);





SELECT books.book_name, publishers.publisher_name
FROM books LEFT JOIN publishers
ON books.publisher_id = publishers.publisher_id
WHERE books.publisher_id IS NULL;

--++++++++++++++++++++++++++++
--podzapros
--++++++++++++++++++++++++++++
CREATE TABLE reviews(
  reviews_id INT PRIMARY KEY,
  reviews_rank INT,
  reviews_comment VARCHAR(20) NOT NULL DEFAULT 'нет коментария',
  FOREIGN KEY (reviews_id) REFERENCES books (book_id)
);

INSERT INTO reviews VALUES (
  (SELECT book_id FROM books WHERE book_name = 'магия и кровь'),
  8,
  'whrer good'
);
INSERT INTO reviews VALUES (
  (SELECT book_id FROM books WHERE book_name = 'уникальная вселенная'),
  9,
  'whrer good'
);

UPDATE reviews SET reviews_comment = 'fuking shits'
WHERE reviews_id = 2;


INSERT INTO reviews VALUES (
  (SELECT book_id FROM books WHERE book_name = 'физика просто'),
  3,
  'полный отстой'
);

INSERT INTO reviews VALUES (
  (SELECT book_id FROM books WHERE book_name = 'рфссказ о цветах'),
  4,
  'ну среднинько'
);

ALTER TABLE books ADD price FLOAT AFTER book_name; --DOUBLE

UPDATE books SET price = 53.05
WHERE  book_id = 4;


UPDATE books SET price = 73.05
WHERE  book_id = 1;


UPDATE books SET price = 100
WHERE  book_id IN (5,6,7);

SELECT
--столбцы которве будут выводиться
b.book_name,
r.reviews_rank,
r.reviews_comment,
b.price,
p.publisher_name
FROM books b NATURAL JOIN publishers p INNER JOIN reviews r
ON b.book_id = r.reviews_id;




SELECT
b.book_name книга,
r.reviews_rank оценка,
r.reviews_comment коментарий,
b.price цена,
p.publisher_name мздатель
FROM books b NATURAL JOIN publishers p INNER JOIN reviews r
ON b.book_id = r.reviews_id;


SELECT
b.book_name,
r.reviews_rank,
r.reviews_comment,
b.price,
p.publisher_name
FROM books b NATURAL JOIN publishers p INNER JOIN reviews r
ON b.book_id = r.reviews_id
WHERE b.price > 50;

SELECT
b.book_name,
r.reviews_rank,
r.reviews_comment,
b.price,
p.publisher_name
FROM books b NATURAL JOIN publishers p INNER JOIN reviews r
ON b.book_id = r.reviews_id
WHERE r.reviews_rank
IN (SELECT r.reviews_rank FROM reviews);

SELECT
b.book_name,
r.reviews_rank,
r.reviews_comment,
b.price,
p.publisher_name
FROM books b NATURAL JOIN publishers p INNER JOIN reviews r
ON b.book_id = r.reviews_id
WHERE r.reviews_rank
IN (4,3,8);