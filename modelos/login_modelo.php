<?php
try{
	$login=strtoupper(htmlentities(addslashes($_POST["login"])));
	$password=htmlentities(addslashes($_POST["contra2"]));
	$contador=0;
    require '../modelos/conectar.php';
	$sql="SELECT * FROM TBL_USUARIO WHERE USU_USUARIO= :login";
	$resultado=$conexion->prepare($sql);	
	$resultado->execute(array(":login"=>$login));
	session_start();
		while($registro=$resultado->fetch(PDO::FETCH_ASSOC)){			
				if (password_verify($password,$registro['USU_PASSWORD'])) {
					$_SESSION["id_us"]=$registro['USU_CODIGO'];
					$_SESSION["est"]=$registro['USU_ESTADO'];
					$contador++;
				}	
		}
		if ($contador>0){
			if ($_SESSION["est"]) {
                    switch ($_SESSION["est"]) {
					case 'NUEVO':   
					header("location:../vistas/preguntas_vista.php");  
					break;
					case 'ACTIVO':  
					header("location:../vistas/blank.php");            
					break;
					case 'BLOQUEADO':  
						echo '<script>alert("TU USUARIO HA SIDO BLOQUEADO CONTACTA CON EL ADNISTRADOR");window.location= "../vistas/login_vista.php"</script>';         
						break;
					default:    
					header("location:../vistas/login_vista.php");     
					break;
                  }
            }else{
                echo "La variable estado no tiene datos";                
              }
		}else{
            echo '<script>alert("USUARIO O CONTRASEÑA INCORRECTA ");window.location= "../vistas/login_vista.php"</script>';
		}
		$resultado->closeCursor();
		
}catch(Exception $e){
    die('Error: ' . $e->GetMessage());
    echo "Codigo del error" . $e->getCode();
}