CREATE DATABASE books_db;
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