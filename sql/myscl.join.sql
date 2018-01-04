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
INSERT INTO books VALUE (NULL ,'уникальная вселенная', NULL);
INSERT INTO books VALUE (NULL ,'физика просто', 2);
INSERT INTO books VALUE (NULL ,'рфссказ о цветах', 1);

--ререкресный метод
SELECT b.book_name, p.publisher_name
FROM books b
CROSS JOIN publishers p;



