<<<<<<< HEAD
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


=======
>>>>>>> 5129de4849d6c1ea5b01c85b553b67e60668311e
$(document).ready(function() {
    $('.popup_click').show(0).draggable();
    var handle = $( ".popup_click" ).draggable( "option", "handle" );
    $('.popup_click').draggable( "option", "handle", '#popup_title' );
 }); 