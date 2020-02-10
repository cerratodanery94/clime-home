
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

  <script src="../vistas/Js/jquery-3.4.1.min.js"></script>
</head>
<body class="hold-transition register-page">
<div class="register-box">
  <div class="register-logo">
    <b>Clime</b>Home
  </div>
  <div class="register-box-body">
    <p class="login-box-msg">Registro de Usuarios</p>

    <form action="../modelos/registrar_modelo.php" method="POST" onsubmit="return validar();">
       

      <div class="form-group has-feedback">
      <label for="inputEmail3" class="col-sm-2 control-label">Nombres</label>
        <input type="text" class="form-control nombres" placeholder="Nombres"  name="nombres" id="nombres">
        <span class="glyphicon glyphicon-user form-control-feedback"></span>
      </div>
      
      <div class="form-group has-feedback">
      <label for="inputEmail3" class="col-sm-2 control-label">Apellidos</label>
        <input type="text" class="form-control apellidos" placeholder="Apellidos"  name="apellidos" id="apellidos" >
        <span class="glyphicon glyphicon-user form-control-feedback"></span>
      </div>

      <div class="form-group has-feedback">
      <label for="inputEmail3" class="col-sm-2 control-label">Usuario</label>
        <input type="text" style="text-transform:uppercase" class="form-control usuario" placeholder="Usuario" name="usuario" id="usuario">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
      <label for="inputEmail3" class="col-sm-2 control-label">Contraseña</label>
        <input type="password" class="form-control contra" placeholder="Contraseña" name="contra" id="contra" >
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
      <label for="inputEmail3" class="col-sm-2 control-label">Confirmar </label>
        <input type="password" class="form-control contra" placeholder="Confirmar Contraseña" name="confirmar_contra" id="confirmar_contra" >
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
      <label for="inputEmail3" class="col-sm-2 control-label">Correo</label>
        <input type="text" class="form-control correo" placeholder="Correo" name="correo" id="correo" >
        <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
      </div>
      <div class="row">
        
        <!-- /.col -->
        <div class="col-xs-4">
          <button type="submit" class="btn btn-primary btnregistrar">Registrarse</button>
        </div>
        <div class="col-xs-4">
        <a href="../vistas/login_vista.php">Ingresar</a>
        </div>
  
    </div>
   
      
        <!-- /.col -->
      </div>
    </form>
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