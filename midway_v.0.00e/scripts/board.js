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



var lastClicked;
var grid = clickableGrid(20,26,function(el,row,col,i){
    console.log("You clicked on element:",el);
    console.log("You clicked on row:",row);
    console.log("You clicked on col:",col);
    console.log("You clicked on item #:",i);

    el.className='clicked';
    if (lastClicked) lastClicked.className='';
    lastClicked = el;
});

document.body.appendChild(grid);
     
function clickableGrid( rows, cols, callback ){
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.innerHTML = ++i;
            cell.addEventListener('click',(function(el,r,c,i){
                return function(){
                    callback(el,r,c,i);
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
}
