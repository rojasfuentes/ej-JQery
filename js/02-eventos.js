$(document).ready(function () {
    //alert("Eventos js cargados");

    //Mouse Over y MouseOut
    var caja = $("#caja");
    /*
        caja.mouseover(function(){
            $(this).css("background", "red")
        })
    
        caja.mouseout(function(){
            $(this).css("background", "chartreuse")
        })
    */

    function cambiaRojo() {
        $(this).css("background", "red")
    }
    function cambiaVerde() {
        $(this).css("background", "green")
    }
    //Hover
    caja.hover(cambiaRojo, cambiaVerde);

    //Click, Doble click

    caja.click(function () {
        $(this).css("background", "blue")
            .css("color", "white");
    })

    caja.dblclick(function () {
        $(this).css("background", "pink")
            .css("color", "yellow");
    })


    //FOCUS Y BLUR
    var nombre = $("#nombre");
    var datos = $("#datos");

    nombre.focus(function () {
        $(this).css("border", "2px solid green")
    })
    nombre.blur(function () {
        $(this).css("border", "2px solid #ccc")
        $(this).val();
        $("#datos").text($(this).val()).show();
    })

    //Mousedown y mouseup

    datos.mousedown(function () {
        $(this).css("border-color", "gray");
    });

    datos.mouseup(function () {
        $(this).css("border-color", "purple");
    });


    //Mousemove
    // En el ejemplo captura por donde se mueve el ratón

    $(document).mousemove(function (event) {
        var sigueme = $("#sigueme");
        /*
                    console.log("Eje X: "+ event.clientX);
                    console.log("Eje Y: "+event.clientY);
                    */
        $('body').css("cursor", "none");
        $("#sigueme").css("left", event.clientX).css("top", event.clientY);
    })

});
console.log($("#sigueme"));