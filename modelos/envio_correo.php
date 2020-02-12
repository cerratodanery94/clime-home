<?php
// Importar clases PHPMailer en el espacio de nombres global
// Deben estar en la parte superior de su script, no dentro de una función
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vistas/PHPMailer/Exception.php';
require '../vistas/PHPMailer/PHPMailer.php';
require '../vistas/PHPMailer/SMTP.php';


// La creación de instancias y pasar `true` permite excepciones
$mail = new PHPMailer(true);

try {
    //Configuración del servidor
    $mail->SMTPDebug = 0;                       // Habilitar salida de depuración detallada
    $mail->isSMTP();                                            // Enviar usando SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Configure el servidor SMTP para enviar a través de
    $mail->SMTPAuth   = true;                                   // Habilitar autenticación SMTP
    $mail->Username   = 'system32unah@gmail.com';                     // SMTP usuario
    $mail->Password   = 'coronavirus2020';                               // SMTP contraseña
    $mail->SMTPSecure = 'tsl';         // Habilitar el cifrado TLS; `PHPMailer :: ENCRYPTION_SMTPS` también aceptado
    $mail->Port       = 587;                                    // Puerto TCP para conectarse

    //Destinatarios
    $mail->setFrom('system32unah@gmail.com', 'System32');    //desde donde se va enviar
    $mail->addAddress('cerratodanery94@gmail.com', 'Yo');     // Agregar un destinatario
 

    // Archivos adjuntos archivos img
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Agregar archivos adjuntos
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Nombre opcional

    // Contenido
    $mail->isHTML(true);                                  // Establecer formato de correo electrónico a HTML
    $mail->Subject = 'Asunto muy importante';
    $mail->Body    = 'Corona virus jajaj';
    //$mail->AltBody = 'Este es el cuerpo en texto plano para clientes de correo no HTML';

    $mail->send();
    echo 'el mensaje ha sido enviado correctamento';
} catch (Exception $e) {
    echo "Hubo un error al enviar el correo: {$mail-> ErrorInfo}";
}
?>