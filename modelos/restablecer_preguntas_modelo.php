<?php
session_start();
$id_u=$_SESSION['id_u'];
$nueva_contra2= $_POST["nueva_contrap"];
$pass_nueva_cifrado2=password_hash($nueva_contra2,PASSWORD_DEFAULT,array("cost"=>12));

try {
    require '../modelos/conectar.php';
    
    $sql=("UPDATE TBL_USUARIO SET USU_PASSWORD=:nueva_contrap WHERE USU_CODIGO=:id_u");
    $resultado=$conexion->prepare($sql);
    $resultado->execute(array(":nueva_contrap"=>$pass_nueva_cifrado2,":id_u"=>$id_u));

    //$_SESSION=array();
    session_destroy();
    echo '<script>alert("SE HA CAMBIADO LA CONTRASEÑA CORRECTAMENTE");window.location.href="../vistas/login_vista.php"</script>';
    $resultado->closeCursor();

    }catch (Exception $e) {
    echo 'Error: ' . $e->getMessage();
    echo "Codigo del error" . $e->getCode();
}
?>