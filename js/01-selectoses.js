$(document).ready(function () {
    console.log("to guapo...")


    //SELECTOR DE ID

    var rojo = $("#rojo").css("background", "red")
        .css("color", "white");

    var amarillo = $("#amarillo");

    amarillo.css("background", "yellow",
        "color", "blue");

    var verde = $("#verde").css("background", "green")
        .css("color", "pink");


    //Selectores de clase

    var mi_clase = $('.zebra').css("padding", "5px");

    // mi_clase.css("border", "2px dashed black");

    $('.sin_borde').click(function () {
        console.log("Clcik dato!");
        $(this).addClass('zebra');
    });

    //Selectores de etiqueta

    var parrafos = $('p').css("cursor", "pointer");

    parrafos.click(function () {
            var that = $(this)
        if (that.hasClass('zebra')&&that.hasClass('grande')) {
            that.removeClass('zebra');
            that.removeClass('grande');
        }else{
            that.addClass('grande');
            that.addClass('zebra');
        }

    })

    //SELECTOR POR ATRIBUTO

    $('[title= "Google"]').css("background", "#ccc");
    $('[title= "Facebook"]').css("background", "blue");


    //otros
   $('p, a').addClass('margen-superior');
    

   var busqueda = $("#caja").find('.resaltado');
   //$("#caja.resaltado").eq(0).parent().find(title('[title="Google"]')) <-- Es lo mismo

   console.log(busqueda);


})

