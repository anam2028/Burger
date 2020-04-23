DROP DATABASE IF EXISTS burgers_DB;
CREATE database burgers_DB;

USE burgers_DB;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  eaten boolean DEFAULT false,
  PRIMARY KEY (id)
);


-- Error Code: 1075. Incorrect table definition; there can be only one auto column and it must be defined as a key
