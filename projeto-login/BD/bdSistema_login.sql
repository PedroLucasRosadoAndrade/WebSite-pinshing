CREATE DATABASE IF NOT EXISTS sistema_login;
USE sistema_login;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insira um usuário para teste
INSERT INTO usuarios (email, senha) VALUES ('pedrolucas@gmail.com', '123456');
select * from usuarios;
