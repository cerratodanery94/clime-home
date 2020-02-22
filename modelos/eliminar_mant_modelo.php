<?php
	require'../modelos/conectar.php';
	$USU_CODIGO=$_GET['USU_CODIGO'];
	$consulta3=$conexion->prepare("DELETE FROM tbl_usuario WHERE USU_CODIGO=:id");
	$consulta3->execute(array(":id"=>$USU_CODIGO));
	if($consulta3){
		echo '<script>alert("SE HA ELIMINADO CORRECTAMENTE");window.location.href="../vistas/mostrar_vista.php"</script>';
	}else{
		echo "Error: El registro no se elimino";
	}