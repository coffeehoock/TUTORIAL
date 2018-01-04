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

--Перекресный соединение CROSS
SELECT b.book_name, p.publisher_name
FROM books b
CROSS JOIN publishers p;

--Естественное соединение NATURAL
SELECT b.book_name, p.publisher_name,
FROM books b
NATURAL JOIN publishers p;

SELECT b.book_name, p.publisher_name, p.publisher_id
FROM books b
NATURAL JOIN publishers p;

SELECT * FROM books NATURAL JOIN publishers;

--внутренние соединение INNER
SELECT b.book_name, p.publisher_name
FROM books b
INNER JOIN publishers p
ON b.publisher_id = p.publisher_id; --ON b.publisher_id <> p.publisher_id;

--внешнее соединение INNER
SELECT books.book_name, publishers.publisher_name
FROM books LEFT JOIN publishers
ON books.book_id = publishers.publisher_id;

SELECT books.book_name, publishers.publisher_name
FROM books LEFT JOIN publishers
USING (publisher_id);





