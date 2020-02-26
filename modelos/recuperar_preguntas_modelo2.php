<?php
session_start();

$id_pre2=$_POST["id_pre2"];
$respuesta2=strtoupper($_POST["respuesta2"]);
$estado='BLOQUEADO';
try{
        require '../modelos/conectar.php';
        $sql="SELECT * FROM TBL_PREGUNTAS_USUARIO WHERE USU_CODIGO=:id_u AND PRE_CODIGO=:id_pre AND PREUSU_RESPUESTA=:respuesta";
        $resultado=$conexion->prepare($sql);	
        $resultado->execute(array(":id_u"=>$_SESSION["id_u"],"id_pre"=>$id_pre2,":respuesta"=>$respuesta2));
        $num_rows = $resultado->fetchColumn();
            
        if ($num_rows==0){ 
            $sql2=("UPDATE TBL_USUARIO SET  USU_ESTADO=:estado WHERE USU_CODIGO=:id_usu");
            $resultado2=$conexion->prepare($sql2);
            $resultado2->execute(array(":estado"=>$estado,":id_usu"=>$_SESSION["id_u"]));
            echo '<script>alert("TU USUARIO HA SIDO BLOQUEADO CONTACTA CON EL ADMINISTRADOR");window.location= "../vistas/login_vista.php"</script>';
        }else{
            header('location:../vistas/restablecer_preguntas_vista.php');
         }   
         $num_rows->closeCursor();
}catch(Exception $e){
    die('Error: ' . $e->GetMessage());
    echo "Codigo del error" . $e->getCode();
}
?>