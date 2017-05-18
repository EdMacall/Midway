
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

  this.image2 = "";
  this.side = 0;
  this.arrivalTurn = 1;
  this.x = posX;
  this.y = posY;
}

function SimpleShip(name, type, vpv, scf, sv, dc, ht, x, y, image2, side, at, sliceX)
{
  this.name = name;
  this.type = type;
  this.victoryPointValue = vpv;
  this.surfaceCombatFactor = scf;
  this.screeningValue = sv;
  this.damageCapacity = dc;
  this.hitsTaken = ht;
  this.x = x;
  this.y = y;

  this.image2 = image2;
  this.side = side;
  this.arrivalTurn = at;
  this.StartX = this.x;
  this.StartY = this.y;
  this.sliceX = sliceX;
  this.sliceY = 0;
};

SimpleShip.prototype.hitTest = function(hitX, hitY)
{
  return((hitX > this.x) && (hitX < this.x + 30) && (hitY > this.y) && (hitY < this.y + 30));
}

SimpleShip.prototype.drawToContext = function(theContext)
{
  console.log(this.name + " is being drawn at " + this.x + " " + this.y);

  theContext.drawImage(this.image2, this.sliceX, this.sliceY, 49, 49, this.x, this.y, 30, 30);
}


/*
$(document).ready(function() {
    $('.popup_click').show(0).draggable();
    var handle = $( ".popup_click" ).draggable( "option", "handle" );
    $('.popup_click').draggable( "option", "handle", '#popup_title' );
 }); 
*/