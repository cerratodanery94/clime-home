
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Registro de usuarios</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.6 -->
  <link rel="stylesheet" href="../vistas/bootstrap/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="../vistas/dist/css/AdminLTE.min.css">
  <!-- iCheck -->
  <link rel="stylesheet" href="../vistas/plugins/iCheck/square/blue.css">
    <!-- Validacion del ojo -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

  <script src="../vistas/Js/jquery-3.4.1.min.js"></script>
</head>
<body class="hold-transition register-page">
<div class="register-box">
  <div class="register-logo">
  <b>Registro de</b> Usuario
    </div>
  <div class="register-box-body">
    <p class="login-box-msg"></p>

    <form action="../modelos/registrar_modelo.php" method="POST" name="f" onsubmit="return validar_registro();">
       
       

    <div class="form-group has-feedback">
      <!--<label for="inputEmail3" class="col-sm-2 control-label">Nombres</label>-->
        <input type="text" style="text-transform:uppercase" class="form-control nombres" placeholder="NOMBRES"  name="nombres" id="nombres">
        <span class="	fa fa-id-card form-control-feedback"></span>
      </div>     
      <div class="form-group has-feedback">
        <input type="text" style="text-transform:uppercase" class="form-control apellidos" placeholder="APELLIDOS"  name="apellidos" id="apellidos" >
        <span class="	fa fa-id-card form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="text" style="text-transform:uppercase" class="form-control usuario" placeholder="USUARIO" name="usuario" id="usuario">
        <span class="	glyphicon glyphicon-user form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <div class="input-group">
        <input id="contra" type="password" class="form-control contra" placeholder="CONTRASEÑA" name="contra">
        <div class="input-group-append">
        <button id="show_password" class="btn btn-primary" type="button" onclick="mostrarPassword()"><span class="fa fa-eye-slash icon"></span></button>
        </div>
        </div>
      </div>
      <div class="form-group has-feedback">
       <div class="input-group">
       <div class="input-group">
        <input id="confirmar_contra" type="password" class="form-control contra" placeholder="CONFIRMAR CONTRASEÑA" name="confirmar_contra"  >
        <div class="input-group-append">
        <button id="show_password" class="btn btn-primary" type="button" onclick="mostrarPassword2()"><span class="fa fa-eye-slash icon1"></span></button>
        </div>
        </div>
      </div>
      </div>
      <div class="form-group has-feedback">
        <input type="text" class="form-control correo" placeholder="CORREO" name="correo" id="correo" >
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div id ="alerta"></div>
      <div class="row">
        <!-- /.col -->
        <div class="col-12 forgot">
        <div style='float:center;margin:auto;width:90px;'><button type="submit" class="btn btn-primary btnregistrar" >REGISTRARSE</button></div>
        </div>     
    </div>
        <!-- /.col -->
      </div>
    </form>
    <br>
    <div style='float:center;margin:auto;width:185px;'><a>¿YA TIENES USUARIO?    </a><a href="../vistas/login_vista.php">INICIAR SESIÓN</a> </div>
 <br>
  </div>  
</div>
  <!-- /.form-box -->
</div>
<!-- /.register-box -->
<!-- jQuery 2.2.3 -->
<script src="../vistas/plugins/jQuery/jquery-2.2.3.min.js"></script>
<!-- Bootstrap 3.3.6 -->
<script src="../vistas/Js/Validaciones.js"></script>
<script src="../vistas/plugins/iCheck/icheck.min.js"></script>
</body>
</html>