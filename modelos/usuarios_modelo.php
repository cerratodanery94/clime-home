<?php
class productos_model{
    private $db;
    private $productos;
    public function __construct()
    {
       require_once("modelos/conectar.php") ;
       $this->db=conectar::conexion();
       $this->productos=array();
    }
    public function get_productos(){
       $consulta=$this->db->query("SELECT * FROM USUARIO");
       while ($filas=$consulta->fetch(PDO::FETCH_ASSOC)) {
           $this->productos[]=$filas;
       }
       return $this->productos;
    }
}
?>