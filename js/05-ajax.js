$(document).ready(function () {
    //Load
    //  $("#datos").load("https://reqres.in/")


    //GET
    $.get('https://reqres.in/api/users', { page: 2 }, function (response) {
        response.data.forEach((element, index) => {
            $("#datos").append("<p>" + element.first_name + " " + element.last_name + "</p>");
        })
    })

    //POST

/*
$("#botonok").submit(function(ev){
    ev.preventDefault();

    var usuario = {
        name: $('input[name="name"]').val(),
        web: $('input[name="web"]').val()
};
console.log(usuario);

    $.post($(this).attr("action"), usuario, function(response) {
        console.log(response);
    }).done(function(){
        alert("Usuario añadido");
    });

    return false;
});*/

$("#botonok").click(function () {
 
    //Creamos variables para el reducir usod el DOM
    var name= $('input[name="first_name"]');
    var web=$('input[name="web"]')

    //Asignamos valores al objeto a enviar pór post
    var user = {
        fist_name: name.val(),
        web: web.val()
    }

    //Limpiamos el formulario
    name.val('');
    web.val('');

    //Enviamos por post la informacion
    $.post("https://reqres.in/api/users", user, function (response) { //$(this).attr("action") no nos sirve ya que no utilizamos un submit
        console.log(response);
    }).done(function () {
        alert("Usuario añadidio!!");
    })
    $.ajax({
        type:'POST',
        url:$(this).attr("#action"),
        data: user,
        beforeSend: function(){
            console.log("Enviando usuario...")
        },
        success: function(response){
            console.log(response);
        },
        timeout: 2000
    })
});


});