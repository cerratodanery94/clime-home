//validacion de campos vacios
$(function(){
    $(".btnAction").on('click', function(){
        var user, passw;
            user = $(".user").val();
            passw= $(".passw").val();
            if(user.length==0 || passw.length==0){
                alert("Verifique los datos, hay campos vacios");
            }
    });
});
//Validacion limite de contraseña
$(function(){
    $(".btnAction").on('click', function(){
        var  passw;
            passw= $(".passw").val();
            if( passw.length<=8){
                alert("La contraseña debe tener al menos 8 caracteres");
            }
    });
});
//Validacion de espacios
$(function(){
    $(".btnAction").on('click', function(){
        var espacio=/\s/;
        var user, passw;
            user = $(".user").val();
            passw= $(".passw").val();
            if(espacio.test(user) ||espacio.test(passw)){
                alert("No debe contener espacios los campos");
            }
    });
});


