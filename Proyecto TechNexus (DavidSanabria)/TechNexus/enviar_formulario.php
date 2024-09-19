<?php
// Configuración de la base de datos
$servername = "localhost"; 
$username = "tu_usuario";
$password = "tu_contraseña"; 
$dbname = "tu_base_de_datos";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$celular = $_POST['celular'];
$telefono_adicional = $_POST['opcional'];
$medio_contacto = $_POST['Options'];
$informacion_adicional = $_POST['TextArea'];
$aceptacion = $_POST['InputRadio'];

// Prepara la consulta SQL
$sql = "INSERT INTO contactos (nombre, apellido, correo, celular, telefono_adicional, medio_contacto, informacion_adicional, aceptacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

// Preparar la sentencia
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssssss", $nombre, $apellido, $correo, $celular, $telefono_adicional, $medio_contacto, $informacion_adicional, $aceptacion);

// Ejecuta la consulta
if ($stmt->execute()) {
    echo "Datos guardados correctamente.";
} else {
    echo "Error: " . $stmt->error;
}

// Cierra la conexión
$stmt->close();
$conn->close();
?>



