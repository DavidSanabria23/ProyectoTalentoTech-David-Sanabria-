CREATE TABLE contactos (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    celular VARCHAR(15) NOT NULL,
    telefono_adicional VARCHAR(15),
    medio_contacto VARCHAR(50),
    informacion_adicional TEXT,
    aceptacion ENUM('si', 'no') NOT NULL
);