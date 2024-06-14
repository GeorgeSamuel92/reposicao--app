CREATE DATABASE db_clientes;

USE db_clientes;

CREATE TABLE tbl_cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    data_nasc DATE NOT NULL,
    cpf VARCHAR(15) NOT NULL,
    data_cad TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tbl_telefone (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    tipo ENUM('FIXO', 'CELULAR') NOT NULL,
    numero VARCHAR(15) NOT NULL,
    data_cad TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_cliente) REFERENCES tbl_cliente(id)
);

INSERT INTO tbl_cliente (nome, data_nasc, cpf, data_cad) VALUES ('João', '1980-01-01', '58998523578', '2022-01-01');
INSERT INTO tbl_cliente (nome, data_nasc, cpf, data_cad) VALUES ('Caio', '1990-01-01', '75332589621', '2022-01-01');
INSERT INTO tbl_cliente (nome, data_nasc, cpf, data_cad) VALUES ('Pedro', '2000-01-01', '98553214789', '2022-01-01');
INSERT INTO tbl_cliente (nome, data_nasc, cpf, data_cad) VALUES ('Mariana', '2000-01-01', '68547932572', '2022-01-01');

SELECT * FROM tbl_cliente;

INSERT INTO tbl_telefone (id_cliente, tipo, numero, data_cad) VALUES (1, 'FIXO', '38193411', '2022-01-01');
INSERT INTO tbl_telefone (id_cliente, tipo, numero, data_cad) VALUES (2, 'CELULAR', '985621478', '2022-01-01');
INSERT INTO tbl_telefone (id_cliente, tipo, numero, data_cad) VALUES (3, 'CELULAR', '982578963', '2022-01-01');
INSERT INTO tbl_telefone (id_cliente, tipo, numero, data_cad) VALUES (4, 'CELULAR', '985632147', '2022-01-01');
INSERT INTO tbl_telefone (id_cliente, tipo, numero, data_cad) VALUES (4, 'FIXO', '38971573', '2022-01-01');

SELECT * FROM tbl_telefone;
