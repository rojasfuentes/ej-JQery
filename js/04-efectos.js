$(document).ready(function(){
    var caja = $("#caja");
   // alert("To listo");

   $('#mostrar').hide();

    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();
        $('#caja').fadeTo('slow', 1);
    });
    
    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();
        $('#caja').fadeTo('slow', 0.1);
    });


    $("#todoenuno").click(function(){
        $("#caja").slideToggle('fast');
    })

$("#animar").click(function(){
    caja.animate({
        marginLeft: '500px',
        fontSize: '40px',
        height: '200px'
    }, 'slow')
    .animate({
        borderRadius: '900px',
        marginTop: '50px'
    }, 'slow')
    .animate({
        borderRadius: '0px',
        marginLeft: '0px' 
    },'slow')
    .animate({
        borderRadius: '900px',
        marginTop: '0px' 
    });
})

});

/** 
 * .fadein() <---Efecto con funcido
 * fadeon(). <----Mostrar con fundido

.show()
.hide()

.slideTogle()

.slideDown()
.slideUp()
.fadeto('slow', 0.2)<--- Permite que vaya de un parametro a otro
*/