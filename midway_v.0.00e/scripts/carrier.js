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
};

function SimpleCarrier(name, type, vpv, scf, sv, dc, ht, x, y, image1, image2, side, at, idb, itb, iF, cdb, ctb, cf)
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
  this.image1 = image1;
  this.image2 = image2;
  this.side = side;
  this.arrivalTurn = at;
  this.initDiveBomber = idb;
  this.initTorpedoBomber = itb;
  this.initFighter = iF;
  this.currentDiveBomber = cdb;
  this.currentTorpedoBomber = ctb
  this.currentFighter = cf;
};


SimpleCarrier.prototype.hitTest = function(hitX, hitY)
{
  return((hitX > this.x) && (hitX < this.x + 30) && (hitY > this.y) && (hitY < this.y + 30));
}

SimpleCarrier.prototype.drawToContext = function(theContext)
{
  theContext.drawImage(this.image1, this.x, this.y);
}

