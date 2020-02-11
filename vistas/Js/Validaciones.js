function validar_registro(){
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

