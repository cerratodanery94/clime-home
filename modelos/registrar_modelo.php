<?php
    $nombres=$_POST["nombres"];
    $apellidos=$_POST["apellidos"];
	$usuario= strtoupper($_POST["usuario"]);
	$contrasenia= $_POST["contraseña"];
    $pass_cifrado=password_hash($contrasenia,PASSWORD_DEFAULT,array("cost"=>12));	
    $correo==$_POST["correo"];
	try{

		$base=new PDO('mysql:host=localhost; dbname=pruebas', 'root', '');
		
		$base->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		
		$base->exec("SET CHARACTER SET utf8");		
		
		
		$sql="INSERT INTO USUARIO (USU_CODIGO,ROL_CODIGO,USU_USUARIO,USU_NOMBRES,USU_APELLIDOS,USU_PASSWORD,USU_ESTADO,USU_FECHA_ULTIMA_CONEXION,USU_PREGUNTAS_CONTESTADAS,USU_PRIMER_INGRESO,USU_FECHA_VENCIMIENTO,USU_CORREO) 
        VALUES ('','2',:usuario,:nombres,:apellidos,:contraseña,'Inactivo','','','','',:correo)";
		
		$resultado=$base->prepare($sql);	
		
		
		$resultado->execute(array( ":usuario"=>$usuario,":nombres"=>$nombres,":apellidos"=>$apellidos,":contraseña"=>$pass_cifrado,":correo"=>$correo));		
		
		
		header("location:login_vista.php");
		
		$resultado->closeCursor();

	}catch(Exception $e){			
		
		
		echo "Línea del error: " . $e->getLine();
		
	}finally{
		
		$base=null;
		
		
	}

?>
