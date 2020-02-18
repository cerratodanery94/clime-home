//FUNCIONES GLOBALES
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
                 if (parametro.length <=7  || parametro.length >12  ){
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
                                 else if (validar_texto (formulario.usuario.value)==false){
                                    document.getElementById("alerta").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO NOMBRES NO PUEDE CONTENER NUMEROS</div>';
                                    formulario.usuario.focus();
                                    formulario.usuario.value="";
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
                                        document.getElementById("alerta2").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO NOMBRE DE USUARIO NO DEBE CONTENER  MÁS DE(2) ESPACIOS</div>';
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
                    function Validar_recuperar(){
                        var formulario_recuperar= document.Form_recuperar;
                        if (formulario_recuperar.usuario2.value=="") {
                            //alert('Campos vacios');
                            document.getElementById("alerta3").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO NOMBRE USUARIO SE ENCUENTRA VACIO</div>';
                            formulario_recuperar.usuario2.focus();
                            return false; 
                            }
                            else if (validar_texto(formulario_recuperar.usuario2.value)==false){
                                document.getElementById("alerta3").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO NOMBRE DE USUARIO  NO PUEDE CONTENER NUMEROS</div>';
                                formulario_recuperar.usuario2.focus();
                                formulario_recuperar.usuario2.value="";
                                return false;
                                }
                                else if (validar_tamaño(formulario_recuperar.usuario2.value)==false){
                                    document.getElementById("alerta3").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>EL CAMPO NOMBRE DE USUARIO DEBE DE CONTENER AL MENOS (6) CARACTERES</div>';
                                    formulario_recuperar.usuario2.focus();
                                    formulario_recuperar.usuario2.value="";
                                    return false;
                                    }
                                    else if (Validar_espacio2(formulario_recuperar.usuario2.value)==false){  
                                        document.getElementById("alerta3").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO NOMBRE DE USUARIO NO DEBE CONTENER MÁS DE(2) ESPACIOS</div>';
                                        formulario_recuperar.usuario2.focus();
                                        formulario_recuperar.usuario2.value="";
                                        return false;
                                        }
                                        else if (Validar_espacio(formulario_recuperar.usuario2.value)==false){  
                                            document.getElementById("alerta3").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO NOMBRE DE USUARIO NO DEBE CONTENER ESPACIOS</div>';
                                            formulario_recuperar.usuario2.focus();
                                            formulario_recuperar.usuario2.value="";
                                            return false;
                                            }
                            formulario_recuperar.submit();
                      }
 //VALIDACIONES DE REESTABLECER CONTRASEÑA 
                   function Validar_reestablecer(){
                    var formulario_reestablecer= document.Form_reestablecer;
                    if (formulario_reestablecer.nueva_contra.value=="") {
                        //alert('Campos vacios');
                        //NUEVA CONTRASEÑAS
                        document.getElementById("alerta4").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO NUEVA CONTRASEÑA SE ENCUENTRA VACIO</div>';
                        formulario_reestablecer.nueva_contra.focus();
                        return false; 
                        }
                        else if (validar_limitcontraseña (formulario_reestablecer.nueva_contra.value)==false){  
                            document.getElementById("alerta4").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>EL CAMPO NUEVA CONTRASEÑA DEBE DE CONTENER AL MENOS(8) CARACTERES</div>';
                            formulario_reestablecer.nueva_contra.focus();
                            formulario_reestablecer.nueva_contra.value="";
                            return false;
                            }
                            else if (Validar_espacio (formulario_reestablecer.nueva_contra.value)==false){  
                                document.getElementById("alerta4").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>EL CAMPO  NUEVA CONTRASEÑA NO DEBE DE CONTENER ESPACIOS</div>';
                                formulario_reestablecer.nueva_contra.focus();
                                formulario_reestablecer.nueva_contra.value="";
                                return false;
                                }
                                else if (Validar_espacio2(formulario_reestablecer.nueva_contra.value)==false){  
                                    document.getElementById("alerta4").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>EL CAMPO NUEVA CONTRASEÑA NO DEBE DE CONTENER ESPACIOS</div>';
                                    formulario_reestablecer.nueva_contra.focus();
                                    formulario_reestablecer.nueva_contra.value="";
                                    return false;
                                    }
                             //CONTRASEÑAS COINCIDAN
                            if(formulario_reestablecer.nueva_contra.value != formulario_reestablecer.confirmar_contra2.value){
                            document.getElementById("alerta4").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CONTRASEÑAS NO COINCIDEN </div>';
                            formulario_reestablecer.nueva_contra.value="";
                            formulario_reestablecer.confirmar_contra2_contra.value="";
                            formulario_reestablecer.nueva_contra.focus();
                            formulario_reestablecer.confirmar_contra2.focus();
                            return false;
                        }
                         //VALIDAR CONFIRMAR CONTRASEÑA
                         if (formulario_reestablecer.confirmar_contra2.value=="") {
                            //alert('Campos vacios');
                            //NUEVA CONTRASEÑAS
                            document.getElementById("alerta4").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>CAMPO CONFIRMAR CONTRASEÑA SE ENCUENTRA VACIO</div>';
                            formulario_reestablecer.confirmar_contra.focus();
                            return false; 
                            }
                                else if (Validar_espacio (formulario_reestablecer.confirmar_contra2.value)==false){  
                                    document.getElementById("alerta4").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>EL CAMPO  NUEVA CONTRASEÑA NO DEBE DE CONTENER ESPACIOS</div>';
                                    formulario_reestablecer.confirmar_contra2.focus();
                                    formulario_reestablecer.confirmar_contra2.value="";
                                    return false;
                                    }
                                    else if (Validar_espacio2(formulario_reestablecer.confirmar_contra2.value)==false){  
                                        document.getElementById("alerta4").innerHTML='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>EL CAMPO NUEVA CONTRASEÑA NO DEBE DE CONTENER ESPACIOS</div>';
                                        formulario_reestablecer.confirmar_contra2.focus();
                                        formulario_reestablecer.confirmar_contra2.value="";
                                        return false;
                                        }

                        formulario_reestablecer.submit();
                        

                        }
                 





                      
                        
                    

                        
               