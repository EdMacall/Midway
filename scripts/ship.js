
// Simple ship class

function SimpleShip()
{
  this.name = "";
  this.type = "";
  this.victoryPointValue = 0;
  this.surfaceCombatFactor = 0;
  this.screeningValue = 0;
  this.damageCapacity = 0;
  this.hitsTaken = 0;
  this.image1 = "";
  this.image2 = "";
  this.side = 0;
  this.arrivalTurn = 1;
  this.x = posX;
  this.y = posY;
}


$(document).ready(function() {
    $('.popup_click').show(0).draggable();
    var handle = $( ".popup_click" ).draggable( "option", "handle" );
    $('.popup_click').draggable( "option", "handle", '#popup_title' );
 }); 