/* My Scripts */

function slugify(text){
  var slug = text.toLowerCase().replace(/ /g,'-').replace(/[-]+/g, '-').replace(/[^\w-]+/g,'');
  return slug;
}

$(function(){

  console.log('Hello!');

  const myTable = $('table');
  const myTHead = myTable.children('thead');
  const myTBody = myTable.children('tbody');

  const th = myTHead.find('th');

  const idArray = [];

  th.each(function(){
    var th = $(this);
    var text = th.text();
    var id = slugify(text);
    th.attr('data-id',id);
    //console.log({id});
    if(idArray.indexOf(id) === -1) {
      idArray.push(id);
    }
  });
  console.log({idArray});

  myTBody.children('tr').each(function(){ // loop rows
    var tr = $(this);
    tr.children('td').each(function(i){ // loop cells
      var td = $(this);
      var id = th.eq(i).data('id');
      td.attr('data-id',id);
    });
  });

  /* --- Add Canvas --- */
  const myCanvasContainer = $('<div/>').addClass('graph-container');
  const myCanvas = $('<canvas id="canvas" width=1000 height=1000></canvas>');

  myTable.wrap(myCanvasContainer);
  //myCanvasContainer.insertBefore(myTable);
  myCanvas.prependTo(myCanvasContainer);

  var vw = window.innerWidth; // size canvas width according to viewport width! redraw again on resize.

  myCanvasContainer.css({
    'display': 'block',
    'margin': 'auto',
    'height': 'auto',
  });
  myCanvas.css({
    'width': vw + 'px',
    'height': '2000px',
    'border': '1px solid black',
  });

  // Draw

  function drawLine(canvas,x1,y1,x2,y2){
    var ctx = canvas.getContext("2d");
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
  }

  function drawDot(canvas,xMid,yMid){
    var rad = 4;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(xMid, yMid, rad, 0, 2 * Math.PI);
    ctx.stroke();
  }

  function drawText(canvas,x,y,text){
    var ctx = canvas.getContext("2d");
    ctx.font = '30px Arial';
    ctx.fillText(text, x, y);
  }

  drawLine(myCanvas[0],10,0,10,100);

  drawText(myCanvas[0],10,50,'Hello World');

  drawDot(myCanvas[0],20,20);



});
