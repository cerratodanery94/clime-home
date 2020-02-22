<?php	
$idrol=2;
$nombres= strtoupper($_POST["nombres"]);
$apellidos= strtoupper($_POST["apellidos"]);
$usuario= strtoupper($_POST["usuario"]);
$contra= $_POST["contra"];
$pass_cifrado=password_hash($contra,PASSWORD_DEFAULT,array("cost"=>12));
$estado="NUEVO";
$fecha_creacion=date('Y-m-d H:m:s');
$fecha_vencimiento=date('Y-m-d H:m:s',strtotime('+1 year'));
$correo= $_POST["correo"];
	try{
		require '../modelos/conectar.php';

		$consulta=$conexion->prepare("SELECT * FROM TBL_USUARIO WHERE USU_USUARIO=:usuario");
        $consulta->execute(array(':usuario'=>$usuario));
        $num_rows = $consulta->fetchColumn();
        
       if ($num_rows>0){ 
		   echo '<script>alert("USUARIO YA EXISTE PORFAVOR INGRESE OTRO NOMBRE DE USUARIO");window.location= "../vistas/registro_vista.php"</script>';
		    
       }else{
		$sql="INSERT INTO TBL_USUARIO (ROL_CODIGO,USU_USUARIO,USU_NOMBRES,USU_APELLIDOS,USU_PASSWORD,USU_ESTADO,USU_PREGUNTAS_CONTESTADAS,USU_PRIMER_INGRESO,USU_FECHA_CREACION,USU_FECHA_VENCIMIENTO,USU_TOKEN,USU_FECHA_TOKEN,USU_CORREO) 
		VALUES (:rol,:usuario,:nombres,:apellidos,:contra,:estado,'','',:fecha_creacion,:fecha_vencimiento,'','',:correo)";
	 
		$resultado=$conexion->prepare($sql);	
		$resultado->execute(array(":rol"=>$idrol,":usuario"=>$usuario,":nombres"=>$nombres,":apellidos"=>$apellidos,":contra"=>$pass_cifrado,":estado"=>$estado,":fecha_creacion" =>$fecha_creacion, ":fecha_vencimiento"=>$fecha_vencimiento,":correo"=>$correo));
  
	   if ($resultado) {
		echo '<script>alert("SE HA REGISTRADO CORRECTAMENTE");window.location.href="../vistas/login_vista.php"</script>';	
	   } else {
		echo '<script>alert("ERROR AL REGISTRARSE");window.location= "../vistas/autoregistro_vista.php"</script>';	
		}
		$num_rows->closeCursor();
		$resultado->closeCursor();
	}
	}catch(Exception $e){			
        die('Error: ' . $e->GetMessage());
		echo "Codigo del error" . $e->getCode();	
	}
?>
</body>
</html>
