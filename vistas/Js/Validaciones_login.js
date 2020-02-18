 //VALIDACION DE SOLO LETRAS
 function validar_texto1(parametro1) {
    var Texto=/^[A-Za-z\s]+$/;
    if(parametro1.search (Texto)){
        return false;
    }
    else {
        return true;
    }
}
//VALIDACION RANGO DE USUARIO
function validar_longitud(parametro1) {
if(parametro1.length <6  || parametro1.length >15  ){
    return false;
}
else {
    return true;
}
}
//VALIDAR RANGO DE CAMPOS (NOMBRES,APELLIDOS Y CORREO)
function validar_tamaño1(parametro1){
    if(parametro1.length <6  || parametro1.length >15  ){

     return false;
 }
 else{
     return true;
 }
}
//VALIDAR LONGITUD_CONTRASEÑA
function validar_limitcontraseña1(parametro1){
 if (parametro1.length <=7){
     return false;
 }
 else{
     return true;
 }
}
//VALIDAR CORREO
function Validar_correo(parametro1){
var p_correo=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(!p_correo.test(parametro1)){
    return false;
}
else  {
return true;
}
}
//VALIDAR ESPACIOS EN BLANCOS
function Validar_espacio1(parametro1){
var Espacio= /\s/;
if(Espacio.test(parametro1)){
    return false;
}
else{
    return true;
}
}
function Validar_espacio2(parametro1){
    var Espacio= /([ ]{2,})|[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
    if(Espacio.test(parametro1)){
        return false;
    }
    else{
        return true;
    }
    }


