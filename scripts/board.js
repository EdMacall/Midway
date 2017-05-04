// Board class example
function Board() 
{
}



//A function for drawing the particle.
Board.prototype.drawToContext = function(theContext) 
{
  // theContext.fillStyle = this.color;
  // theContext.fillRect(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius);


    theContext.lineWidth = 2;
    theContext.beginPath();


    for(var i = 0; i < 23; i++)
    {
      theContext.moveTo(((i === 0) || ((i + 2) % 3 === 0)) ? 0 : 31,
                      i * 30 + 1);
      theContext.lineTo(841, i * 30 + 1);
      theContext.stroke();
    }


    for(var i = 0; i < 29; i++)
    {
      theContext.moveTo(i * 30 + 1,
                      ((i === 0) || ((i + 2) % 3 === 0)) ? 0 : 31);
      theContext.lineTo(i * 30 + 1, 661);
      theContext.stroke();
    }

    theContext.font = "20px Verdana";

    for(var i = 0; i < 7; i++)
    {
      theContext.fillText((i + 1), 10, 83 + (i * 90));
    }

    var string = "ABCDEFGHI";

    for(var i = 0; i < 9; i++)
    {
      theContext.font = "20px Verdana";
      
      theContext.fillText(string.charAt(i), 70 + (i * 90), 23);

      theContext.font = "10px Verdana";

      for(var j = 0; j < 9; j++)
      {
        for(var k = 0; k < 7; k++)
        {
          theContext.fillText(string.charAt(i),
                            43 + (j * 90 + (i % 3) * 30),
                            51 + (k * 90 + Math.floor(i / 3) * 30));
        }
      }
    }

}
