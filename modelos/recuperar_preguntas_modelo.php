<?php
$usuario2=strtoupper(htmlentities(addslashes($_POST["usuario2"])));
try{
        require '../modelos/conectar.php';
        $sql="SELECT * FROM TBL_USUARIO WHERE USU_USUARIO= :usuario";
        $resultado=$conexion->prepare($sql);	
        $resultado->execute(array(":usuario"=>$usuario2));
        $num_rows = $resultado->fetchColumn();
            
        if ($num_rows==0){ 
            echo '<script>alert("INTENTELO DE NUEVO");window.location= "../vistas/recuperar_correo.php"</script>';
        }else{
            $sql2="SELECT * FROM TBL_USUARIO  WHERE USU_USUARIO=:usuario2";
            $resultado2=$conexion->prepare($sql2);
            $resultado2->execute(array(":usuario2"=>$usuario2));
            session_start();
            while($registro=$resultado2->fetch(PDO::FETCH_ASSOC)){	
                $_SESSION['id_u']=$registro['USU_CODIGO'];
            }
        
            header('location:../vistas/recuperar_preguntas_vista.php');
         }   
         $num_rows->closeCursor();
         $resultado2->closeCursor();
}catch(Exception $e){
    die('Error: ' . $e->GetMessage());
    echo "Codigo del error" . $e->getCode();
}
?>