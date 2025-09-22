<?php
/**
 * Servidor de desarrollo simple para La Palma de Oro
 * Ejecutar con: php server.php
 */

$host = 'localhost';
$port = 8000;

echo "Servidor de desarrollo iniciado en http://{$host}:{$port}\n";
echo "Presiona Ctrl+C para detener el servidor\n\n";

// Crear el archivo users.txt si no existe
if (!file_exists('users.txt')) {
    file_put_contents('users.txt', '[]');
    echo "Archivo users.txt creado\n";
}

// Iniciar servidor
$command = "php -S {$host}:{$port}";
exec($command);
?>
