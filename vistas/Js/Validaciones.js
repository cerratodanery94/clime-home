function validar(){
    var usuario,contra,nombres,apellidos,correo;
    var espacio=/\s/;
    var patron=/^[A-Za-z\s]+$/;
    var p_correo=/\w+@\w+\.+[a-z]/;
    var relleno_espacios=/^\s+$/;
    usuario=document.getElementById('usuario').value;
    contra=document.getElementById('contra').value;
    nombres=document.getElementById('nombres').value;
    apellidos=document.getElementById('apellidos').value;
    correo=document.getElementById('correo').value;
    
    if(usuario.length>15 || nombres.length>50 || apellidos.length>50 || correo.length>60){
        alert("Los campos no cumplen con el tamaño según el definido en la base de datos ");
        return false;
    }
    else if(relleno_espacios.test(usuario) ||relleno_espacios.test(contra) || relleno_espacios.test(nombres) ||relleno_espacios.test(apellidos) || relleno_espacios.test(correo)){
        alert("Los campos no pueden ser rellenados con espacios");
        return false;
    }
    else if(usuario.length==0 || contra.length==0 || nombres.length==0 || apellidos.length==0 || correo.length==0){
        alert("Verifique los datos, hay campos vacios");
        return false;
    }
    else if (nombres.search(patron) || apellidos.search(patron)) {
        alert("En los campos nombre y apellido solo se permiten letras");
        return false;
    }
    else if( contra.length<=8){
        alert("La contraseña debe tener al menos 8 caracteres");
        return false;
    }
    else if(espacio.test(usuario) ||espacio.test(contra)){
        alert("Los campos usuario y contraseña  no debe tener espacios");
        return false;
    }
    else if(!p_correo.test(correo)) {
        alert("El correo no es valido");
        return false;
    }
}

