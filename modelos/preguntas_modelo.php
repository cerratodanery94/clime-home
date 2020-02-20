<?php
session_start();
$id_pre=$_POST["id_pre"];
$respuesta=strtoupper($_POST["respuesta"]);
try {
    require '../modelos/conectar.php';
            if (!isset($_SESSION['cont_preg'])){
            $_SESSION['cont_preg']=1;
             }  

            $sql='SELECT * FROM TBL_PARAMETROS';
	        $resultado=$conexion->query($sql);	
		     while($registro=$resultado->fetch(PDO::FETCH_ASSOC)){			
				$_SESSION['parametro']=	$registro['PARMT_VALOR'];
            }
            
           $sql2='INSERT INTO TBL_PREGUNTAS_USUARIO (PRE_CODIGO,USU_CODIGO,PREUSU_RESPUESTA) 
            VALUES (:id_pre,:id_usu,:respuesta)';
            $resultado2=$conexion->prepare($sql2);	
            $resultado2->execute(array("id_pre"=>$id_pre,":id_usu"=>$_SESSION["id_usu"],":respuesta"=>$respuesta));

            if ($resultado2) {	
             if ($_SESSION['cont_preg']<$_SESSION['parametro']){
                 ++$_SESSION['cont_preg'];
                 header('location:../vistas/preguntas_vista.php');
             }else {
                echo '<script>alert("SE HA REGISTRADO LA PREGUNTAS Y RESPUESTAS CON EXITO");window.location.href="../vistas/cambiar_contra_vista.php"</script>';
                unset($_SESSION['cont_preg']);           
             }
            }

       
   
        $resultado->closeCursor();
    
} catch (Exception $e) {
    die('Error: ' . $e->GetMessage());
    echo "Codigo del error" . $e->getCode();
}
?>