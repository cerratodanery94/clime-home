<!DOCTYPE html>
<head>
<title> ClimeHome </title>
<meta charset="Utf-8"/>
<!--JQUERY-->
<script src="../vistas/Js/jquery-3.4.1.min.js"></script>

<!-- FRAMEWORK BOOTSTRAP para el estilo de la pagina-->
<link rel="stylesheet" href="../vistas/Boostrap2/dist/css/bootstrap.min.css">

<!-- Los iconos tipo Solid de Fontawesome-->
<link rel="stylesheet" href="../vistas/Fontawesome/css/solid.min.css">

<!-- Nuestro css-->
<link rel="stylesheet" type="text/css" href="../vistas/Css/Index.css" >

</head>
<body>
    <div class="modal-dialog text-center">
        <div class="col-sm-8 main-section">
            <div class="modal-content">
                <div class="col-12 user-img">
                    <img src="../vistas/Img/User_icono1.png" th:src="@{/img/user.png}"/>
                </div>
                <form class="col-12" action="../modelos/login_modelo.php" method="Post" onsubmit="return validar();">
                    <div class="form-group" id="user-group">
                        <input type="text" class="form-control user" placeholder="Nombre de usuario" name="login" id="login" />
                    </div> 
                  <div class="form-group" id="contrasena-group">
                    <input type="password" class="form-control passw" placeholder="Contraseña" name="contra2" id="contra2" /> 
                    
                </div>
                    <button type="submit" class="btn btn-primary btnAction" name="submit"><i class="fas fa-sign-in-alt"></i>  Ingresar </button>
                </form>
                 <div class="col-12 Registrar">
                    <a href="registro_vista.php">Registrarse</a><i class="fas fas-sign-in-alt"></i>
                <div class="col-12 forgot">
                    <a href="#">Recuperar contraseña</a>
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="../vistas/Js/Validaciones.js"></script>
</body>
</html>
