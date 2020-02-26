<?php
require '../modelos/conectar.php';
	if(isset($_POST['nombres']) && isset($_POST['apellidos'])){
		$id=$_POST['id'];
    $nombre=strtoupper($_POST['nombres']);
    $usuarioa=strtoupper($_POST['usuarioa']);
    $usuarion=strtoupper($_POST['usuarion']);
    $apellido=strtoupper($_POST['apellidos']);
    $estado=strtoupper($_POST['estado']);
		$correoa=$_POST['correoa'];
		$correon=$_POST['correon'];
		$rol=$_POST['rol_usuario'];

    
      if($correoa!=$correon){
      $consulta1=$conexion->prepare("SELECT * FROM tbl_usuario WHERE  USU_CORREO=:email");
			$consulta1->execute(array(":email"=>$correon));
			if($consulta1->rowCount()>=1){
				echo "ERROR: USUARIO Y/O CORREO YA EXISTE";
				exit();
			}else{
        $emailF=$correon;
			}
		}else{
      $emailF=$correoa;
    }
    if ($usuarioa!=$usuarion) {
      $consulta3=$conexion->prepare("SELECT * FROM tbl_usuario WHERE USU_USUARIO=:user");
      $consulta3->execute(array(":user"=>$usuarion));
      if($consulta3->rowCount()>=1){
				echo "ERROR: USUARIO Y/O CORREO YA EXISTE";
				exit();
			}else{
        $usuariof=$usuarion;
			}
    } else {
      $usuariof=$usuarioa;
    }
    
			$consulta2=$conexion->prepare("UPDATE tbl_usuario SET USU_USUARIO=:usuario, USU_NOMBRES=:nombre,USU_APELLIDOS=:apellido,USU_ESTADO=:estado,ROL_CODIGO=:rol,USU_CORREO=:correo WHERE USU_CODIGO=:id");
			$consulta2->execute(array(":usuario"=>$usuariof,":nombre"=>$nombre,":apellido"=>$apellido,":estado"=>$estado,":rol"=>$rol, ":correo"=>$emailF,":id"=>$id));
      $sql2="INSERT INTO TBL_BITACORA (USU_CODIGO,OBJ_CODIGO,BIT_ACCION,BIT_DESCRIPCION,BIT_FECHA) 
      VALUES (:usuc,:objeto,:accion,:descr,:fecha)";
        $resultado2=$conexion->prepare($sql2);	
      $resultado2->execute(array(":usuc"=>$_SESSION["id_us"],":objeto"=>10,":accion"=>'UPDATE',":descr"=>'ACTUALIZO UN USUARIO EN MANTENIMIENTO',":fecha"=>date("Y-m-d H:m:s")));   
            if($consulta2){
                
             echo '<script>alert("SE HA ACTUALIZADO REGISTRO CORRECTAMENTE");window.location.href="../vistas/mostrar_vista.php"</script>';
            }else{
              echo '<script>alert("ERROR NO SE ACTUALIZO REGISTRO");window.location.href="../vistas/mostrar_vista.php"</script>';
            }
	}
//Recuperar datos
	if(isset($_GET['USU_CODIGO'])){
		$USU_CODIGO=$_GET['USU_CODIGO'];
		$consulta=$conexion->prepare("SELECT * FROM tbl_usuario WHERE USU_CODIGO=:USU_CODIGO");
		$consulta->bindParam(":USU_CODIGO",$USU_CODIGO);
		$consulta->execute();
		if($consulta->rowCount()>=1){
			$fila=$consulta->fetch();
                echo '<form action=" " method="POST" role="form">
                <div class="form-group">
                 <input type="hidden"  class="form-control " name="id" value="'.$fila['USU_CODIGO'].'" >
                </div>

                <div class="form-group">
                  
                  <input type="hidden" style="text-transform:uppercase" class="form-control nombres" placeholder="USUARIO"  name="usuarioa" id="usuarioa" value="'.$fila['USU_USUARIO'].'">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">USUARIO</label>
                  <input type="text" style="text-transform:uppercase" class="form-control nombres" placeholder="USUARIO"  name="usuarion" id="usuarion" value="'.$fila['USU_USUARIO'].'">
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword1">NOMBRES</label>
                  <input type="text"style="text-transform:uppercase" class="form-control apellidos" placeholder="NOMBRE"  name="nombres" id="nombre" value="'.$fila['USU_NOMBRES'].'" >
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword1">APELLIDOS</label>
                  <input type="text" style="text-transform:uppercase" class="form-control nombres" placeholder="APELLIDO"  name="apellidos" id="apellido" value="'.$fila['USU_APELLIDOS'].'" >
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword1">ESTADO</label>
                  <input type="text" style="text-transform:uppercase" class="form-control nombres" placeholder="APELLIDO"  name="estado" id="estado" value="'.$fila['USU_ESTADO'].'" >
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword1">ROL</label>
                  <input type="text" style="text-transform:uppercase" class="form-control apellidos" placeholder="ROL DE USUARIO"  name="rol_usuario" id="rol_usuario" value="'.$fila['ROL_CODIGO'].'" > 
                </div>

                <div class="form-group">
                  <input type="hidden" class="form-control correo" placeholder="CORREO" name="correoa" id="correo" value="'.$fila['USU_CORREO'].'" >
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword1">CORREO</label>
                  <input type="email" class="form-control correo" placeholder="CORREO" name="correon" id="correo" value="'.$fila['USU_CORREO'].'" >
                </div>

                <div class="box-footer">
                <div class="col text-center">
                <button type="submit" class="btn btn-primary">ACTUALIZAR</button>
                </div>
                </div>
            </form>
            ';


			
				
			
		}else{
			echo "Ocurrio un error";
		}
	}else{
		echo "Error no se pudo procesar la peticion";
    }
    ?>