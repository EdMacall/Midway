$(document).ready(function() {
    $('.popup_click').show(0).draggable();
    var handle = $( ".popup_click" ).draggable( "option", "handle" );
    $('.popup_click').draggable( "option", "handle", '#popup_title' );
 }); 