CREATE DATABASE burgers_db;
use burgers_db;
CREATE TABLE burgers(
id INTEGER AUTO_INCREMENT not null,
burger_name VARCHAR(30),
devoured boolean,
PRIMARY KEY(id)
);

