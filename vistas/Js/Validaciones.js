/*function validar_registro(){
var usuario,contra,nombres,apellidos,correo,confirmar_contra;
var espacio=/\s/;
var patron = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
//var patron=/^[A-Za-z\s]+$/;
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
 }*/
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

            //VALIDACION DE SOLO LETRAS
                function validar_texto(parametro) {
                    var Texto=/^[A-Za-z\s]+$/;
                    if(parametro.search (Texto)){
                        return false;
                    }
                    else {
                        return true;
                    }
              }
              //VALIDACION RANGO DE USUARIO
              function validar_longitud(parametro) {
                if(parametro.length <6  || parametro.length >15  ){
                    return false;
                }
                else {
                    return true;
                }
          }
             //VALIDAR RANGO DE CAMPOS (NOMBRES,APELLIDOS Y CORREO)
             function validar_tamaño(parametro){
                 if(parametro.length >50){
                     return false;
                 }
                 else{
                     return true;
                 }
             }
             //VALIDAR LONGITUD_CONTRASEÑA
             function validar_limitcontraseña(parametro){
                 if (parametro.length <=7){
                     return false;
                 }
                 else{
                     return true;
                 }
             }
             //VALIDAR CORREO
            function Validar_correo(parametro){
                var p_correo=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if(!p_correo.test(parametro)){
                    return false;
                }
                else  {
                return true;
                }
            }
              //VALIDAR ESPACIOS EN BLANCOS
              function Validar_espacio(parametro){
                var Espacio= /\s/;
                if(Espacio.test(parametro)){
                    return false;
                }
                else{
                    return true;
                }
              }
              //VALIDAR DOS ESPACIOS
              function Validar_espacio2(parametro){
                var Espacio= /([ ]{2,})|[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
                if(Espacio.test(parametro)){
                    return false;
                }
                else{
                    return true;
                }
            }


              //VALIDACIONES DE MODULO DE REGISTRO
                function validar_registro() {
                    //alert('todo bien');
                    var formulario= document.Form_registrar;
                //VALIDAR NOMBRE(VACIO QUE NO CONTENGA NUMEROS)
                    if (formulario.nombres.value=="") {
                        //alert('Campos vacios');
                        document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO NOMBRES VACIO</div>';
                        formulario.nombres.focus();
                        formulario.nombres.value="";
                        return false;
                    }
                    else if (validar_texto (formulario.nombres.value)==false){
                        document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO NOMBRES NO PUEDE CONTENER NUMEROS</div>';
                        formulario.nombres.focus();
                        formulario.nombres.value="";
                        return false;
                        }
                        else if (validar_tamaño (formulario.nombres.value)==false){
                            document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>LIMITE DE CARACTERES EN EL CAMPO</div>';
                            formulario.nombres.focus();
                            formulario.nombres.value="";
                            return false;
                            }
                    else{
                            document.getElementById("alerta").innerHTML="";
                        }
                        //VALIDAR APELLIDOS
                        if (formulario.apellidos.value=="") {
                            //alert('Campos vacios');
                            document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO APELLIDOS VACIO</div>';
                            formulario.apellidos.focus();
                            formulario.apellidos.value="";
                            return false;
                        }
                        else if (validar_texto (formulario.apellidos.value)==false){  
                            document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO APELLIDOS NO PUEDE CONTENER NUMEROS</div>';
                            formulario.apellidos.focus();
                            formulario.apellidos.value="";
                            return false;
                            }
                            else if (validar_tamaño (formulario.apellidos.value)==false){
                                document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>LIMITE DE CARACTERES EN EL CAMPO APELLIDOS</div>';
                                formulario.apellidos.focus();
                                formulario.apellidos.value="";
                                return false;
                                }
                            else{
                                document.getElementById("alerta").innerHTML="";
                            }
                            //VALIDAR USUARIO
                            if (formulario.usuario.value=="") {
                                //alert('Campos vacios');
                                document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO USUARIO VACIO</div>';
                                formulario.usuario.focus();
                                formulario.usuario.value="";
                                return false;  
                                }
                                else if (validar_longitud(formulario.usuario.value)==false){  
                                    document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO USUARIO DEBE CONTENER AL MENOS (6) CARACTERES</div>';
                                    formulario.usuario.focus();
                                    formulario.usuario.value="";
                                    return false;
                                 }
                                 else if (Validar_espacio(formulario.usuario.value)==false){  
                                    document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO USUARIO NO DEBE CONTENER ESPACIOS</div>';
                                    formulario.usuario.value="";
                                    formulario.usuario.focus();
                                    return false;
                                 }

                                else{
                                    document.getElementById("alerta").innerHTML="";
                                }
                                //VALIDAR QUE LAS CONTRASEÑAS COINCIDAN
                                if(formulario.contra.value != formulario.confirmar_contra.value){
                                    document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CONTRASEÑAS NO COINCIDEN </div>';
                                    formulario.contra.value="";
                                    formulario.confirmar_contra.value="";
                                    formulario.contra.focus();
                                    return false;
                                }
                                
                                //VALIDAR CONTRASEÑA
                                if (formulario.contra.value=="") {
                                    //alert('Campos vacios');
                                    document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO CONTRASEÑA VACIO</div>';
                                    formulario.contra.focus();
                                    return false;  
                                }
                                else if (validar_limitcontraseña (formulario.contra.value)==false){  
                                    document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>EL CAMPO CONTRASEÑA DEBE DE CONTENER AL MENOS(8) CARACTERES</div>';
                                    formulario.contra.focus();
                                    return false;
                                    }
                                    else if (Validar_espacio (formulario.contra.value)==false){  
                                        document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>EL CAMPO CONTRASEÑA NO DEBE DE CONTENER ESPACIOS</div>';
                                        formulario.contra.focus();
                                        formulario.confirmar_contra.value="";
                                        formulario.contra.value="";
                                        return false;
                                        }
                                    else{
                                        document.getElementById("alerta").innerHTML="";
                                    }
                                    //VALIDAR CONFIRMAR CONTRASEÑA
                                    if (formulario.confirmar_contra.value=="") {
                                        //alert('Campos vacios');
                                        document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO CONFIRMAR CONTRASEÑA VACIO</div>';
                                        formulario.confirmar_contra.focus();
                                        return false;  
                                    }

                                    else if (validar_limitcontraseña (formulario.confirmar_contra.value)==false){  
                                        document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>EL CAMPO CONFIRMAR CONTRASEÑA DEBE DE CONTENER AL MENOS(8) CARACTERES</div>';
                                        formulario.confirmar_contra.focus();
                                        return false;
                                        }
                                        else if (Validar_espacio (formulario.confirmar_contra.value)==false){  
                                            document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>EL CAMPO CONTRASEÑA NO DEBE DE CONTENER ESPACIOS</div>';
                                            formulario.confirmar_contra.focus();
                                            formulario.confirmar.contra.value="";
                                            formulario.contra.value="";
                                            return false;
                                            }
                                        else{
                                            document.getElementById("alerta").innerHTML="";
                                        }
                                        //VALIDAR CORREO
                                        if (formulario.correo.value=="") {
                                            //alert('Campos vacios');
                                            document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO CORREO VACIO</div>';
                                            formulario.correo.focus();
                                            return false;  
                                        }
                                        else if (validar_tamaño (formulario.correo.value)==false){
                                            document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>LIMITE DE CARACTERES EN EXCESO EN EL CAMPO CORREO</div>';
                                            formulario.correo.focus();
                                            return false; 
                                            }
                                             else if (Validar_correo(formulario.correo.value)== false){
                                                document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>PORFAVOR INGRESAR UN CORREO VALIDO</div>';
                                                formulario.correo.value="";
                                                formulario.correo.focus();
                                                return false; 
                                             }
                                            else{
                                                document.getElementById("alerta").innerHTML="";
                                            }
                    formulario.submit();
                    }
                    //VALIDACIONES DE LOGIN
                    function validar_login() {
                        //alert('todo bien');
                        var formulario_vista= document.Form_login;
                        if (formulario_vista.login.value=="") {
                            //alert('Campos vacios');
                            document.getElementById("alerta2").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO NOMBRE USUARIO SE ENCUENTRA VACIO</div>';
                            formulario_vista.login.focus();
                            return false; 
                            }
                            else if (validar_texto(formulario_vista.login.value)==false){
                                document.getElementById("alerta2").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO NOMBRE DE USUARIO  NO PUEDE CONTENER NUMEROS</div>';
                                formulario_vista.login.focus();
                                formulario_vista.login.value="";
                                return false;
                                }
                                else if (validar_tamaño(formulario_vista.login.value)==false){
                                    document.getElementById("alerta2").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>EL CAMPO NOMBRE DE USUARIO DEBE DE CONTENER AL MENOS (6) CARACTERES</div>';
                                    formulario_vista.login.focus();
                                    formulario_vista.login.value="";
                                    return false;
                                    }
                                    else if (Validar_espacio2(formulario_vista.login.value)==false){  
                                        document.getElementById("alerta2").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO NOMBRE DE USUARIO NO DEBE CONTENER ESPACIOS</div>';
                                        formulario_vista.login.focus();
                                        formulario_vista.login.value="";
                                        return false;
                                        }
                                        else if (Validar_espacio(formulario_vista.login.value)==false){  
                                            document.getElementById("alerta2").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO NOMBRE DE USUARIO NO DEBE CONTENER ESPACIOS</div>';
                                            formulario_vista.login.focus();
                                            formulario_vista.login.value="";
                                            return false;
                                            }
                                        //VALIDACION DEL CAMPO CONTRASEÑA
                                        if (formulario_vista.contra2.value=="") {
                                            //alert('Campos vacios');
                                            document.getElementById("alerta2").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO CONTRASEÑA VACIO</div>';
                                            formulario_vista.contra2.focus();
                                            return false;  
                                        }
                                        else if (validar_limitcontraseña (formulario_vista.contra2.value)==false){  
                                            document.getElementById("alerta2").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>EL CAMPO CONTRASEÑA DEBE DE CONTENER AL MENOS(8) CARACTERES</div>';
                                            formulario_vista.contra2.focus();
                                            return false;
                                            }
                                            else if (Validar_espacio2(formulario_vista.contra2.value)==false){  
                                                document.getElementById("alerta2").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO CONTRASEÑA NO DEBE DE CONTENER ESPACIO</div>';
                                                formulario_vista.contra2.focus();
                                                formulario_vista.contra2.value="";
                                                return false;
                                                }
                                                else if (Validar_espacio(formulario_vista.contra2.value)==false){  
                                                    document.getElementById("alerta2").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO CONTRASEÑA NO DEBE DE CONTENER ESPACIO</div>';
                                                    formulario_vista.contra2.focus();
                                                    formulario_vista.contra2.value="";
                                                    return false;
                                                    }
                            formulario_vista.submit();
                        }
                        //VALIDACIONES DE RECUPERAR CONTRASEÑA
                       function validar_recuperar() {
                        //alert('todo bien');
                        var formulario_recuperar= document.Form_recuperar;
                        if (formulario_recuperar.usuario2.value=="") {
                            //alert('Campos vacios');
                            document.getElementById("alerta3").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO NOMBRE USUARIO SE ENCUENTRA VACIO</div>';
                            formulario_recuperar.usuario2.focus();
                            return false; 
                            }









                            formulario_recuperar.submit();
                            }
                    

                        
               