<?php

try{
	$login=strtoupper(htmlentities(addslashes($_POST["login"])));
	
	$password=htmlentities(addslashes($_POST["contra2"]));
	$contador=0;
	
	
    require '../modelos/conectar.php';
	
	
	$sql="SELECT * FROM USUARIO WHERE USU_USUARIO= :login";
	
	$resultado=$conexion->prepare($sql);	
		
	$resultado->execute(array(":login"=>$login));
		
		while($registro=$resultado->fetch(PDO::FETCH_ASSOC)){			
				if (password_verify($password,$registro['USU_PASSWORD'])) {
					//TRUE SI SON IGUALES
					//FALSE LO CONTRARIO
					$contador++;
				}
			
		}

		if ($contador>0) {
			session_start();
			$_SESSION["USU_USUARIO"]=$_POST["login"];
			header("location:../vistas/index.php");
		}else{
            echo '<script>alert("USUARIO O CONTRASEÑA INCCRRECTA ");window.location= "../vistas/login_vista.php"</script>';
		}
	
		//$resultado->closeCursor();
}catch(Exception $e){
    die('Error: ' . $e->GetMessage());
    echo "Codigo del error" . $e->getCode();
}