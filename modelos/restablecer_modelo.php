<?php
session_start();
if(!isset($_SESSION['id_usu'])){
    header("location:../vistas/login_vista.php");
}
$id_usu=$_SESSION['id_usu'];

$nueva_contra= $_POST["nueva_contra"];

$pass_nueva_cifrado=password_hash($nueva_contra,PASSWORD_DEFAULT,array("cost"=>12));
try {
		require '../modelos/conectar.php';
        /*echo $_SESSION['usu']."<br>";
        echo $nueva_contra."<br>";
        
        echo$pass_nueva_cifrado."<br>";*/
		$sql4=$conexion->query("UPDATE TBL_USUARIO SET USU_PASSWORD='$pass_nueva_cifrado' WHERE USU_CODIGO='$id_usu'");
     
        //$resultado4->execute(array(":nueva_contra"=>$pass_nueva_cifrado,":usuario"=>$_SESSION['usu']));
        if ($sql4) {
            echo '<script>alert("Se ha restablecido la contraseña corrrectamente");window.location= "../vistas/restablecer_contraseña.php"</script>';
                
           } else {
            echo '<script>alert("Error  no a podido restablecer la contraseña");window.location= "../vistas/restablecer_contraseña.php"</script>';	
            }
} catch (Exception $e) {
    echo 'Error: ' . $e->getCode();
    
}


?>