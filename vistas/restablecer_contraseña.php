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
    <b>Recuperar</b>Contraseña
  </div>
  <div class="register-box-body">
    <p class="login-box-msg">Ingrese los Siguientes Datos</p>

    <form action="" method="POST" onsubmit="return validar_restablecer_contra();">
       

      <div class="form-group has-feedback">
      
        <input type="password" class="form-control nombres" placeholder="Nueva Contraseña"  name="nueva_contra" id="nueva_contra">
        <span class="glyphicon glyphicon-user form-control-feedback"></span>
      </div>

      <div class="form-group has-feedback">
      <input type="password" class="form-control nombres" placeholder="Confirmar Contraseña"  name="confirmar_contra2" id="confirmar_contra2">
        <span class="glyphicon glyphicon-user form-control-feedback"></span>
      </div>
      

    
      
      
      <div class="row">
        
        <!-- /.col -->
        <div class="col-xs-4">
          <button type="submit" class="btn btn-primary btn-recuperar">Recuperar</button>
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