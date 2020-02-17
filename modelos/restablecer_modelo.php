<?php
session_start();
$token=$_SESSION['token'];
$id=$_SESSION['id_usu'];
$fecha_venc=$_SESSION['fec_venc'];
$nueva_contra= $_POST["nueva_contra"];
$pass_nueva_cifrado=password_hash($nueva_contra,PASSWORD_DEFAULT,array("cost"=>12));

try {
        require '../modelos/conectar.php';
        $sql="SELECT * FROM TBL_USUARIO WHERE USU_TOKEN=:token LIMIT 1";
        $resultado=$conexion->prepare($sql);	
        $resultado->execute(array(":token"=>$token));
        $num_rows = $resultado->fetchColumn();

        if ($num_rows==0){ 
            header('location:../vistas/login_vista.php');
        }else{
            $fecha_act=date('Y-m-d H:m:s');
            if (strtotime($fecha_act)>strtotime($fecha_venc)) {
                echo '<script>alert("El codigo de recuperación de contraseña ha experirado expirado");window.location= "../vistas/restablecer_contraseña.php"</script>';
            }else{
              $sql2=("UPDATE TBL_USUARIO SET USU_PASSWORD=:nueva,USU_TOKEN=:token,USU_FECHA_TOKEN=:f_venc WHERE USU_CODIGO=:codigo");
              $resultado2=$conexion->prepare($sql2);
              $resultado2->execute(array(":nueva"=>$pass_nueva_cifrado,":token"=>NULL,":f_venc"=>NULL,":codigo"=>$id));
              $_SESSION=array();
              session_destroy();
              echo '<script>alert("SE HA RESTABLECIDO LA CONTRASEÑA CORRECTAMENTE");window.location.href="../vistas/login_vista.php"</script>';
            } 
             
            }
           $num_rows->closeCursor();
           $resultado2->closeCursor();
        }catch (Exception $e) {
    echo 'Error: ' . $e->getCode();
    
}
?>