$(document).ready(function () {
    // alert("Ready");
    // console.log("Ready");

    //DRAGGABLE
    $('.elemento').draggable();

    //Redimencionar
    $('.elemento').resizable();

    //Seleccionar
    //$('.lista-seleccionable').selectable()


    //SORTABLE
    $('.lista-seleccionable').sortable({
        update: function (event, ui) {
            console.log("Cambio")
        }
    })

    //DROPPABLE
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function () {
            console.log("Soltao")
        }
    });

    // EFECTOS
    $("#mostrar").click(function () {
        console.log("fuinciona");
        //$(".caja-efectos").fadeToggle(); <-- Difumina
        //$(".caja-efectos").toggle("explode"); //<-- Explota
        //$(".caja-efectos").toggle("slide"); //<-- Desliza de un lado
        //$(".caja-efectos").toggle("drop"); //<-- Desliza de un lado difuminado
        //$(".caja-efectos").toggle("fall"); //<-- Minimiza y maximiza
        //$(".caja-efectos").toggle("puff"); //<-- Maximiza y Minimiza
        //$(".caja-efectos").toggle("scale"); //<-- Minimiza y maximiza del centro
        $(".caja-efectos").toggle("shake", 4000); //<-- Tiembla
    })

    //Tooltip
    $(document).tooltip();

    //Cuadro de dialogo

    $("#lanzar-popup").click(function () {
       $("#popup").dialog();
    })

    //Calendario
    $("#calendario").datepicker();

    //Tabs

    $("#pestanas").tabs();

})


