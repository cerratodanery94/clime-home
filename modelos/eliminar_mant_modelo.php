<?php
	require'../modelos/conectar.php';
	$USU_CODIGO=$_GET['USU_CODIGO'];
	$consulta3=$conexion->prepare("DELETE FROM tbl_usuario WHERE USU_CODIGO=:id");
	$consulta3->execute(array(":id"=>$USU_CODIGO));
	
	$sql2="INSERT  INTO TBL_BITACORA (BIT_CODIGO,USU_CODIGO,OBJ_CODIGO,BIT_ACCION,BIT_DESCRIPCION,BIT_FECHA) 
		VALUES (:id,:usuc,:objeto,:accion,:descr,:fecha)";
	    $resultado2=$conexion->prepare($sql2);	
		$resultado2->execute(array(":id"=>NULL,":usuc"=>$_SESSION["id_us"],":objeto"=>11,":accion"=>'ELIMINO',":descr"=>'ELIMINO UN USUARIO EN MANTENIMIENTO',":fecha"=>date("Y-m-d H:m:s")));
		
	if($consulta3){
		echo '<script>alert("SE HA ELIMINADO REGISTRO CORRECTAMENTE");window.location.href="../vistas/mostrar_vista.php"</script>';
	}else{
		echo '<script>alert("ERROR NO SE ELIMINADO EL REGISTRO");window.location.href="../vistas/mostrar_vista.php"</script>';
	}