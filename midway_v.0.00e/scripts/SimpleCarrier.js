// Simple carrier class

function SimpleCarrier()
{
  this.name = "";
  this.type = "CV"
  this.victoryPointValue = 0;
  this.surfaceCombatFactor = 0;
  this.screeningValue = 0;
  this.damageCapacity = 0;
  this.hitsTaken = 0;
  this.x = 0;
  this.y = 0;
  this.image1 = "";
  this.image2 = "";
  this.side = 0;
  this.arrivalTurn = 1;
  this.initDiveBomber = 0;
  this.initTorpedoBomber = 0;
  this.initFighter = 0;
  this.currentDiveBomber = 0;
  this.currentTorpedoBomber = 0
  this.currentFighter = 0;
}

SimpleCarrier.prototype.hitTest = function(hitX, hitY)
{
  return((hitX > this.x) && (hitX < this.x + 30) && (hitY > this.y) && (hitY < this.y + 30));
}

SimpleCarrier.prototype.drawToContext = function(theContext)
{

}