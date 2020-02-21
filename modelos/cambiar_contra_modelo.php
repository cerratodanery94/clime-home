<?php
session_start();
$id_usu=$_SESSION['id_us'];
$nueva_contra= $_POST["nueva_contra"];
$pass_nueva_cifrado=password_hash($nueva_contra,PASSWORD_DEFAULT,array("cost"=>12));
$estado='ACTIVO';

try {
    require '../modelos/conectar.php';
    
    $sql=("UPDATE TBL_USUARIO SET USU_PASSWORD=:nueva, USU_ESTADO=:estado WHERE USU_CODIGO=:id_usu");
    $resultado=$conexion->prepare($sql);
    $resultado->execute(array(":nueva"=>$pass_nueva_cifrado, ":estado"=>$estado,":id_usu"=>$id_usu));

    $_SESSION=array();
    session_destroy();
    echo '<script>alert("SE HA CAMBIADO LA CONTRASEÑA CORRECTAMENTE");window.location.href="../vistas/login_vista.php"</script>';
    $resultado->closeCursor();

    }catch (Exception $e) {
    echo 'Error: ' . $e->getMessage();
    echo "Codigo del error" . $e->getCode();
}
?>