function validar_registro(){
var usuario,contra,nombres,apellidos,correo,confirmar_contra;
var espacio=/\s/;
//var patron = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
var patron=/^[A-Za-z\s]+$/;
var p_correo=/\w+@\w+\.+[a-z]/;
var relleno_espacios=/^\s+$/;
usuario=document.getElementById('usuario').value;
contra=document.getElementById('contra').value;
nombres=document.getElementById('nombres').value;
apellidos=document.getElementById('apellidos').value;
correo=document.getElementById('correo').value;
confirmar_contra=document.getElementById('confirmar_contra').value;


    if(usuario.length>15 || nombres.length>50 || apellidos.length>50 || correo.length>60){
        alert("Los campos no cumplen con el tamaño según el definido en la base de datos ");
        return false;
    }
    else if(relleno_espacios.test(usuario) ||relleno_espacios.test(contra)|| relleno_espacios.test(confirmar_contra)|| relleno_espacios.test(nombres) ||relleno_espacios.test(apellidos) || relleno_espacios.test(correo)){
        alert("Los campos no pueden ser rellenados con espacios");
        return false;
    }
    else if(usuario.length==0 || contra.length==0 || confirmar_contra.length==0 || nombres.length==0 || apellidos.length==0 || correo.length==0){
        alert("Verifique los datos, hay campos vacios");
        return false;
    }
    else if (nombres.search(patron) || apellidos.search(patron)) {
        alert("En los campos nombre y apellido solo se permiten letras");
        return false;
    }
    else if( contra.length<=8 ){
        alert("La contraseña debe tener al menos 8 caracteres");
        return false;
    }
    else if( contra!==confirmar_contra){
        alert("Las contraseñas no coinciden");
        return false;
    }
    else if(espacio.test(usuario) ||espacio.test(contra) ||espacio.test(confirmar_contra)){
        alert("Los campos usuario y contraseña  no debe tener espacios");
        return false; 
    }
    
    else if(!p_correo.test(correo)) {
        alert("El correo no es valido");
        return false;
    }
}
function validar_login() {
    var login,contra2;
    login=document.getElementById('login').value;
    contra2=document.getElementById('contra2').value;
    var espacio2=/\s/;
    var relleno_espacios2=/^\s+$/;
    if(login.length>15 ){
        alert("El campo usuario no cumplen con el tamaño definido en la base de datos");
        return false;
    }
    else if(relleno_espacios2.test(login) ||relleno_espacios2.test(contra2)){
        alert("Los campos no pueden ser rellenados con espacios");
        return false;
    }
    else if(login.length==0 || contra2.length==0){
        alert("Verifique los datos, hay campos vacios");
        return false;
    }
    else if(espacio2.test(login) ||espacio2.test(contra2)){
        alert("Los campos usuario y contraseña  no debe tener espacios");
        return false; 
    }
}
function validar_correo(){
    var usuario2;
    var espacio3=/\s/;
    var relleno_espacios3=/^\s+$/;
    usuario2=document.getElementById('usuario2').value; 
    if(usuario2.length==0){
        alert("El campo usuario se encuentra vacio");
        return false;
    } 
    else if(usuario2.length>15 ){
        alert("El campo usuario no cumplen con el tamaño");
        return false;
    }
    else if(espacio3.test(usuario2)){
        alert("El campo usuario no debe tener espacios");
        return false; 
    }
    else if(relleno_espacios3.test(usuario2)){
        alert("El campo usuario no pueden ser rellenado con espacios");
        return false;
    }
    
}
 function validar_restablecer_contra(){
    var nueva_contra;
    var confirmar_contra2;

    var espacio4=/\s/;
    var relleno_espacios4=/^\s+$/;
    nueva_contra=document.getElementById('nueva_contra').value; 
    confirmar_contra2=document.getElementById('confirmar_contra2').value; 

    if(nueva_contra.length==0 || confirmar_contra2.length==0 ){
        alert("Verifique los datos, hay campos vacios");
        return false;

    }
    else if( nueva_contra.length<=8 ||confirmar_contra2.length<=8){
        alert("La contraseña debe tener al menos 8 caracteres");
        return false;
    }
    else if(espacio4.test(nueva_contra)||espacio4.test(confirmar_contra2)){
        alert("Los campos no deben tener espacios");
        return false; 
    }
    else if(relleno_espacios4.test(nueva_contra)||relleno_espacios4.test(confirmar_contra2) ){
        alert("Los campos no pueden ser rellenados con espacios");
        return false;
    }
 }
 function mostrarPassword(){
    var cambio = document.getElementById ("contra");
    if (cambio.type == "password"){
        cambio.type="text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
        }else{
            cambio.type="password";
            $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
        }
    }
    function mostrarPassword2(){
        var cambio1 = document.getElementById ("confirmar_contra");
        if (cambio1.type == "password"){
            cambio1.type="text";
            $('.icon1').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
            }else{
                cambio1.type="password";
                $('.icon1').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
            }
        }
    function mostrarPassword_login(){
        var cambio2 = document.getElementById ("contra2");
        if (cambio2.type == "password"){
            cambio2.type="text";
                $('.icon2').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
                }else{
                 cambio2.type="password";
                  $('.icon2').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
            }
        }
        function mostrarPassword_recuperarcontra(){
                    var cambio3 = document.getElementById ("nueva_contra");
                    if (cambio3.type == "password"){
                        cambio3.type="text";
                            $('.icon3').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
                            }else{
                             cambio3.type="password";
                              $('.icon3').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
                        }
                    }
    function mostrarPassword_recuperarcontra2(){
            var cambio4 = document.getElementById ("confirmar_contra2");
            if (cambio4.type == "password"){
                cambio4.type="text";
                    $('.icon4').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
                    }else{
                     cambio4.type="password";
                        $('.icon4').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
                    }
                }
                function validar() {
                    //alert('todo bien');
                    var formulario= document.f;
                    if (formulario.nombres.value=="") {
                        //alert('Campos vacios');
                        document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO NOMBRE VACIO</div>';
                        return false;
                    }
                    formulario.submit();
                    
                }

           
               