


// The basic setup here, including the debugging code and window load listener,
// is copied from 'HTML5 Canvas' by Fulton & Fulton.
// Checking for browser compatibility is accomplished with
// the Modernizr JavaScript library.
// The latest version of the library is available at www.modernizr.com.

window.addEventListener("load", windowLoadHandler, false);

// debug messages
var Debugger = function() { };
Debugger.log = function(message) 
{
  try 
  {
    console.log(message);
  }
  catch (exception) 
  {
    return;
  }
}

function windowLoadHandler() 
{
  canvasApp();
}

function canvasSupport() 
{
  return Modernizr.canvas;
}

function canvasApp() 
{

  if (!canvasSupport())
  {
    return;
  }
	
  var theCanvas = document.getElementById("game-canvas");
  var context = theCanvas.getContext("2d");
	
  init();
	
  // var numShapes;
  // var shapes;
  var dragIndex;
  var dragging;
  var mouseX;
  var mouseY;
  var dragHoldX;
  var dragHoldY;
  var timer;
  var targetX;
  var targetY;
  var easeAmount;
  var board;
  var ships;
  var tempShip;

  var numShapes;
  var numShips;
	
  function init()
  {
    // numShapes = 60;
    easeAmount = 0.45;
		
    // shapes = [];
		
    // makeShapes();
		
    // drawScreen();
    console.log(`Welcome to the game.  Version ${version()}.`);

    ships = [];

    makeShips();
    console.log(ships[0].name);

    board = new Board();
    board.drawToContext(context);

    console.log(ships[0].image1);

	for(var i = 0; i < numShips; i++)
	{
      ships[i].drawToContext(context);
	}

    theCanvas.addEventListener("mousedown", mouseDownListener, false);
  }

	/*
	// draw image to canvas
  constructor()
  {
	  
    console.log(`Welcome to the game.  Version ${this.version()}.`);

    this.loadSound();

    this.canvas = document.getElementById("game-canvas");

    this.ctx = this.canvas.getContext("2d");
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();


    for(var i = 0; i < 23; i++)
    {
      this.ctx.moveTo(((i === 0) || ((i + 2) % 3 === 0)) ? 0 : 31,
                      i * 30 + 1);
      this.ctx.lineTo(841, i * 30 + 1);
      this.ctx.stroke();
    }
*/


  function version()
  {
    return '1.0.0';
  }

  function makeShips()
  {
    tempShip = new SimpleCarrier("Enterprise",    "CV", 10,  3,  3,  5, 0, 811, 361,
                             	 document.getElementById("usships"), 1,  1, 12, 5, 8, 12, 5, 8,   0);
    ships.push(tempShip);
    tempShip = new SimpleCarrier("Yorktown",      "CV", 10,  3,  3,  5, 0, 811, 391,
	                             document.getElementById("usships"), 1,  1, 12, 5, 9, 12, 5, 9,  99);
    ships.push(tempShip);
	tempShip = new SimpleCarrier("Hornet",        "CV", 10,  3,  3,  5, 0, 811, 421,
	                             document.getElementById("usships"), 1,  1, 12, 5, 9, 12, 5, 9,  49);
    ships.push(tempShip);
    tempShip =    new SimpleShip("Astoria",       "CA",  4,  6,  3,  4, 0, 811, 451,
	                             document.getElementById("usships"), 1,  1, 149);
    ships.push(tempShip);
	tempShip =    new SimpleShip("Minneapolis",   "CA",  4,  6,  3,  4, 0, 811, 481,
	                             document.getElementById("usships"), 1,  1, 200);
    ships.push(tempShip);
	tempShip =    new SimpleShip("Northampton",   "CA",  3,  6,  3,  4, 0, 811, 511,
	                             document.getElementById("usships"), 1,  1, 249);
    ships.push(tempShip);
	tempShip =    new SimpleShip("New Orleans",   "CA",  4,  6,  3,  4, 0, 811, 541,
	                             document.getElementById("usships"), 1,  1, 347);
    ships.push(tempShip);
	tempShip =    new SimpleShip("Pensacola",     "CA",  3,  6,  3,  4, 0, 811, 571,
	                             document.getElementById("usships"), 1,  1, 396);
    ships.push(tempShip);
	tempShip =    new SimpleShip("Portland",      "CA",  3,  6,  3,  4, 0, 811, 601,
	                             document.getElementById("usships"), 1,  1, 449);
    ships.push(tempShip);
	tempShip =    new SimpleShip("Vincennes",     "CA",  3,  6,  3,  4, 0, 811, 631,
	                             document.getElementById("usships"), 1,  1, 499);
    ships.push(tempShip);
	tempShip =    new SimpleShip("Atlanta",       "CL",  2,  3,  6,  3, 0, 811, 661,
	                             document.getElementById("usships"), 1,  1, 548);
    ships.push(tempShip);
    numShips = 11;
  }


  /*
  function makeShapes()
  {
    var i;
    var tempX;
    var tempY;
    var tempRad;
    var tempR;
    var tempG;
    var tempB;
    var tempA;
    var tempColor;
    for (i = 0; i < numShapes; i++)
    {
      tempRad = 5 + Math.floor(Math.random() * 20);
      tempX = Math.random() * (theCanvas.width - tempRad);
      tempY = Math.random() * (theCanvas.height - tempRad);
			
      //we set a randomized color, including a random alpha (transparency) value.
      //The color is set using the rgba() method.
      tempR = Math.floor(Math.random() * 255);
      tempG = Math.floor(Math.random() * 255);
      tempB = Math.floor(Math.random() * 255);
      tempA = 0.3 + 0.5 * Math.random();
      tempColor = "rgba(" + tempR + "," + tempG + "," + tempB + "," + tempA + ")";
			
      //randomly select either a circle or a square
      if (Math.random() < 0.5)
      {
        tempShape = new SimpleDiskParticle(tempX, tempY);
      }
      else
      {
        tempShape = new SimpleSquareParticle(tempX, tempY);
      }

			
      tempShape.color = tempColor;
      tempShape.radius = tempRad;
      shapes.push(tempShape);
    }
  }
  */
	

// var image = document.getElementById('source');

// this.ctx.drawImage(image, 0, 0, 30, 30, 90, 700, 30, 30);

// var myImage = new DragImage(sourcePath, x, y);

// jsfiddle to drag image on canvas
// http://jsfiddle.net/Zevan/QZejF/3/

    // this.stage = new createjs.Stage(this.canvas);

    // this.stage.width  = this.canvas.width;
    // this.stage.height = this.canvas.height;

    // window.debugStage = this.stage;

    // this.stage.enableMouseOver();

    // enable tap on touch device
    // createjs.Touch.enable(this.stage);

    // enable retina screen
    // this.retinalize();

    // createjs.Ticker.setFPS(60);

    // game related initialization
    // this.gameData = new GameData();

    // keep re-drawing the stage.
    // createjs.Ticker.on("tick", this.stage);

    // this.restartGame();

    // testing code
    /*
    this.stage.addChild(new NumberedBox(88));
    */

  function mouseDownListener(evt)
  {
    var i;
		
    //getting mouse position correctly 
    var bRect = theCanvas.getBoundingClientRect();
    mouseX = (evt.clientX - bRect.left) * (theCanvas.width / bRect.width);
    mouseY = (evt.clientY - bRect.top) * (theCanvas.height / bRect.height);
				

	  


    
    /*
    Below, we find if a shape was clicked. Since a "hit" on a square or a circle has to be measured differently, the
    hit test is done using the hitTest() function associated to the type of particle. This function is an instance method
    for both the SimpleDiskParticle and SimpleSqureParticle classes we have defined with the external JavaScript sources.		
     */
    for (i = 0; i < numShips; i++)
    {
      if (ships[i].hitTest(mouseX, mouseY))
      {	
        dragging = true;
        //the following variable will be reset if this loop repeats with another successful hit:
        dragIndex = i;
      }
    }
		
    if (dragging)
    {
      window.addEventListener("mousemove", mouseMoveListener, false);
			
      //place currently dragged shape on top
      ships.push(ships.splice(dragIndex, 1)[0]);
			
      //shapeto drag is now last one in array
      dragHoldX = mouseX - ships[dragIndex].x;
      dragHoldY = mouseY - ships[dragIndex].y;
			
      //The "target" position is where the object should be if it were to move there instantaneously. But we will
      //set up the code so that this target position is approached gradually, producing a smooth motion.
      targetX = mouseX - dragHoldX;
      targetY = mouseY - dragHoldY;
			
      //start timer
      timer = setInterval(onTimerTick, 1000 / 30);
    }
    theCanvas.removeEventListener("mousedown", mouseDownListener, false);
    window.addEventListener("mouseup", mouseUpListener, false);
		
    //code below prevents the mouse down from having an effect on the main browser window:
    if (evt.preventDefault)
    {
      evt.preventDefault();
    } //standard
    else if (evt.returnValue)
    {
      evt.returnValue = false;
    } //older IE
    return false;
  }
	
  function onTimerTick()
  {
    //because of reordering, the dragging shape is the last one in the array.
    ships[dragIndex].x = ships[dragIndex].x + easeAmount * (targetX - ships[dragIndex].x);
    ships[dragIndex].y = ships[dragIndex].y + easeAmount * (targetY - ships[dragIndex].y);
		
    //stop the timer when the target position is reached (close enough)
    if ((!dragging) && (Math.abs(ships[dragIndex].x - targetX) < 0.1) &&
        (Math.abs(ships[dragIndex].y - targetY) < 0.1))
    {
      ships[dragIndex].x = targetX;
      ships[dragIndex].y = targetY;
      //stop timer:
      clearInterval(timer);
    }
    drawScreen();
  }
	
  function mouseUpListener(evt)
  {
    theCanvas.addEventListener("mousedown", mouseDownListener, false);
    window.removeEventListener("mouseup", mouseUpListener, false);
    if (dragging)
    {
      dragging = false;
      window.removeEventListener("mousemove", mouseMoveListener, false);
    }
  }

  function mouseMoveListener(evt)
  {
    var posX;
    var posY;
    var shapeRad = ships[dragIndex].radius;
    var minX = shapeRad;
    var maxX = theCanvas.width - shapeRad;
    var minY = shapeRad;
    var maxY = theCanvas.height - shapeRad;
		
    //getting mouse position correctly 
    var bRect = theCanvas.getBoundingClientRect();
    mouseX = (evt.clientX - bRect.left) * (theCanvas.width / bRect.width);
    mouseY = (evt.clientY - bRect.top) * (theCanvas.height / bRect.height);
		
    //clamp x and y positions to prevent object from dragging outside of canvas
    posX = mouseX - dragHoldX;
    posX = (posX < minX) ? minX : ((posX > maxX) ? maxX : posX);
    posY = mouseY - dragHoldY;
    posY = (posY < minY) ? minY : ((posY > maxY) ? maxY : posY);
		
    targetX = posX;
    targetY = posY;
  }

  function drawShapes()
  {
    var i;
    for (i = 0; i < numShips; i++) {
      //the drawing of the shape is handled by a function inside the external class.
      //we must pass as an argument the context to which we are drawing the shape.
      ships[i].drawToContext(context);
    }
  }
	
  function drawScreen()
  {
    //bg
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, theCanvas.width, theCanvas.height);

    board.drawToContext(context);
		
    drawShapes();		
  }

}

