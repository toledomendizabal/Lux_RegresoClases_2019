---creando la base de datos

CREATE DATABASE regresoaclases2019;

---- usar la base de datos

use regresoaclases2019;

----creando la tabla

CREATE TABLE peliculas(
    id INT(9) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    pregunta VARCHAR(255) NOT NULL,
    archivo VARCHAR(50) NOT NULL,
    respuesta1 VARCHAR(100) NOT NULL,
    respuesta2 VARCHAR(100) NOT NULL,
    respuesta3 VARCHAR(100) NOT NULL,
    respuesta4 VARCHAR(100) NOT NULL,
    imagen VARCHAR(50) NOT NULL
);

CREATE TABLE photos(
    id INT(9) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    pregunta VARCHAR(255) NOT NULL,
    archivo1 VARCHAR(50) NOT NULL,
    archivo2 VARCHAR(100) NOT NULL,
    archivo3 VARCHAR(100) NOT NULL,
    archivo4 VARCHAR(100) NOT NULL,
    imagen VARCHAR(50) NOT NULL,
);

--- muestra las tablas

SHOW TABLES;

----descripcion de tablas

describe peliculas;
describe photos;