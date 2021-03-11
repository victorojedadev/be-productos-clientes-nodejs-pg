CREATE DATABASE clientes_productos;


CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(40),
    apellido VARCHAR(40),
    numero_documento VARCHAR(40),
    correo TEXT
);

INSERT INTO clientes (nombre, apellido, numero_documento, correo) values 
('juan', 'perez', '4.000.001', 'juan.perez@gmail.com'),
('maria', 'lopez', '4.000.002', 'maria.lopez@gmail.com');