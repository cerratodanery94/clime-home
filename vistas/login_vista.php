<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Iniciar Sesión</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.6 -->
  <link rel="stylesheet" href="../vistas/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="../vistas/Css/Style.css" >

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
    <b>Iniciar</b>Sesión
    <br></br>
  </div>
  <div class="register-box-body">
    <p class="login-box-msg"></p>
    <form action="../modelos/login_modelo.php" method="POST" onsubmit="return validar_login();">
    
                <div class="col-12 user-img">
                    <img src="../vistas/Img/User_icono2.png" th:src="@{/img/user.png}"/>
                </div>
    
      <div class="form-group has-feedback">
        <input type="text" class="form-control nombres" placeholder="NOMBRE DE USUARIO"  name="login" id="login">
        <span class="	glyphicon glyphicon-user form-control-feedback"></span>
      </div>

      <div class="form-group has-feedback">
        <div class="input-group">
        <input id="contra" type="password" class="form-control contra" placeholder="CONTRASEÑA" name="contra2">
        <div class="input-group-append">
        <button id="show_password" class="btn btn-primary" type="button" onclick="mostrarPassword()"><span class="fa fa-eye icon"></span></button>
        </div>
        </div>
      </div>
      
      <div style='float:center;margin:auto;width:145px;' > </a><a href="../vistas/recuperar_correo.php">¿Haz olvido tu contraseña?</a> </>
</div>
<br></br>
        <!-- /.col -->
        <div class="col-12 forgot">
        <div style='float:center;margin:auto;width:195px;'><button type="submit" class="btn btn-primary ">INGRESAR</button></div>
        </div>
    </div>
    <br></br>
    <div style='float:center;margin:auto;width:185px;'><a>¿NO TIENES UNA CUENTA?  </a><a href="../vistas/registro_vista.php">REGISTRATE</a> </div>
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