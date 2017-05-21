// Simple carrier class

function SimpleCarrier()
{
  this.name = "";
  this.type = "CV";
  this.victoryPointValue = 0;
  this.surfaceCombatFactor = 0;
  this.screeningValue = 0;
  this.damageCapacity = 0;
  this.hitsTaken = 0;
  this.x = 0;
  this.y = 0;

  this.image2 = "";
  this.side = 0;
  this.arrivalTurn = 1;
  this.initDiveBomber = 0;
  this.initTorpedoBomber = 0;
  this.initFighter = 0;
  this.currentDiveBomber = 0;
  this.currentTorpedoBomber = 0
  this.currentFighter = 0;
};

function SimpleCarrier(name, type, vpv, scf, sv, dc, ht, x, y, image2, side, at, idb, itb, iF, cdb, ctb, cf, sliceX)
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
  this.initDiveBomber = idb;
  this.initTorpedoBomber = itb;
  this.initFighter = iF;
  this.currentDiveBomber = cdb;
  this.currentTorpedoBomber = ctb
  this.currentFighter = cf;
  this.StartX = this.x;
  this.StartY = this.y;
  this.sliceX = sliceX;
  this.sliceY = 0;
};


SimpleCarrier.prototype.hitTest = function(hitX, hitY)
{
  return((hitX > this.x) && (hitX < this.x + 30) && (hitY > this.y) && (hitY < this.y + 30));
}

SimpleCarrier.prototype.drawToContext = function(theContext)
{
  //console.log(this.name + " is being drawn at " + this.x + " " + this.y);

  theContext.drawImage(this.image2, this.sliceX, this.sliceY, 49, 49, this.x, this.y, 30, 30);
}


