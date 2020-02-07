<?php
require_once("modelos/usuarios_modelo.php");
$productos=new productos_model();
$matrizproductos=$productos->get_productos();
require_once("vistas/usuarios_vistas.php");
?>