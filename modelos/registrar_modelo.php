<?php	
$idrol=2;
$nombres= $_POST["nombres"];
$apellidos= $_POST["apellidos"];
$usuario= strtoupper($_POST["usuario"]);
$contra= $_POST["contra"];
$pass_cifrado=password_hash($contra,PASSWORD_DEFAULT,array("cost"=>12));
$estado="NUEVO";
$correo= $_POST["correo"];
	try{
		require '../modelos/conectar.php';

		$consulta=$conexion->prepare("SELECT * FROM TBL_USUARIO WHERE USU_USUARIO='$usuario'");
        $consulta->execute();
        $num_rows = $consulta->fetchColumn();
        
       if ($num_rows>0){ 
		   echo '<script>alert("Usuario ya existe");window.location= "../vistas/registro_vista.php"</script>';
		    
       }else{	
		   
	   $sql="INSERT INTO TBL_USUARIO (ROL_CODIGO,USU_USUARIO,USU_NOMBRES,USU_APELLIDOS,USU_PASSWORD,USU_ESTADO,USU_FECHA_ULTIMA_CONEXION,USU_PREGUNTAS_CONTESTADAS,USU_PRIMER_INGRESO,USU_FECHA_VENCIMIENTO,USU_CORREO) 
	   VALUES (:rol,:usuario,:nombres,:apellidos,:contra,:estado,'','','','',:correo)";
	
	   $resultado=$conexion->prepare($sql);	
       $resultado->execute(array(":rol"=>$idrol,":usuario"=>$usuario,":nombres"=>$nombres,":apellidos"=>$apellidos,":contra"=>$pass_cifrado,":estado"=>$estado,":correo"=>$correo));
  
	   if ($resultado) {
		echo '<script>alert("Se ha registrado exitosamente");window.location= "../vistas/registro_vista.php"</script>';
			
	   } else {
		echo '<script>alert("Error al registrarse");window.location= "../vistas/registro_vista.php"</script>';	
		}
	
		
		$resultado->closeCursor();
	}
	}catch(Exception $e){			
		
        die('Error: ' . $e->GetMessage());
		echo "Codigo del error" . $e->getCode();	
	}
?>
</body>
</html>
