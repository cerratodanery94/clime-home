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

try{
	$usuario2=strtoupper(htmlentities(addslashes($_POST["usuario2"])));
	$contador=0;
	
	
    require '../modelos/conectar.php';
	
	
	$sql="SELECT * FROM USUARIO WHERE USU_USUARIO= :usuario";
	
	$resultado=$conexion->prepare($sql);	
		
    $resultado->execute(array(":usuario"=>$usuario2));
    $num_rows = $resultado->fetchColumn();
        
    if ($num_rows==0){ 
        echo '<script>alert("Usuario no  existe");window.location= "../vistas/recuperar_correo.php"</script>';
    }else{
        $sql2="SELECT * FROM USUARIO WHERE USU_USUARIO= :usuario";
        $resultado2=$conexion->prepare($sql);
        $resultado2->execute(array(":usuario"=>$usuario2));
        while($registro=$resultado2->fetch(PDO::FETCH_ASSOC)){			
            $usu=$registro['USU_USUARIO'];
            $correo=$registro['USU_CORREO'];
        
        }
    
   
     }   
      //Configuración del servidor
    $mail->SMTPDebug = 0;                       // Habilitar salida de depuración detallada
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();                                            // Enviar usando SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Configure el servidor SMTP para enviar a través de
    $mail->SMTPAuth   = true;                                   // Habilitar autenticación SMTP
    $mail->Username   = 'system32unah@gmail.com';                     // SMTP usuario
    $mail->Password   = 'coronavirus2020';                               // SMTP contraseña
    $mail->SMTPSecure = 'tsl';         // Habilitar el cifrado TLS; `PHPMailer :: ENCRYPTION_SMTPS` también aceptado
    $mail->Port       = 587;                                    // Puerto TCP para conectarse

    //Destinatarios
    $mail->setFrom('system32unah@gmail.com', 'System32');    //desde donde se va enviar
    $mail->addAddress($correo, $usu);     // Agregar un destinatario
 

    // Archivos adjuntos archivos img
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Agregar archivos adjuntos
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Nombre opcional

    // Contenido
    $mail->isHTML(true);                                  // Establecer formato de correo electrónico a HTML
    $mail->Subject = 'Recuperar Contraseña';
    $mail->Body    = 'Recientemente solicitó restablecer su contraseña para su cuenta. Use el enlace de abajo para reiniciarla. Este restablecimiento de contraseña solo es válido durante las próximas 24 horas.<a href="http://localhost:8080/clime-home/vistas/restablecer_contraseña.php">Restablecer contraseña aqui</a>';
    
    //$mail->AltBody = 'Este es el cuerpo en texto plano para clientes de correo no HTML';

    $mail->send();
    echo '<script>alert("El mensaje ha sido enviado correctamente.Revise su correo ");window.location= "../vistas/recuperar_correo.php"</script>';
  

   
		//$resultado->closeCursor();
}catch(Exception $e){
    die('Error: ' . $e->GetMessage());
    echo "Codigo del error" . $e->getCode();
    echo "Hubo un error al enviar el correo: {$mail-> ErrorInfo}";
}