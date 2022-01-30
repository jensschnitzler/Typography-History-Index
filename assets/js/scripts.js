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

      if(id == 'category'){
        var val = td.text();
        console.log({val});
        if(val.length > 1){
          var cat = slugify(val);
          tr.attr('data-cat',cat);
        } else {
          tr.addClass('empty-row');
        }
      }
    });
  });

  /* --- Add Canvas --- */
  const myCanvasContainer = $('<div/>').addClass('graph-container');
  const myCanvas = $('<canvas id="canvas" width=1000 height=1000></canvas>');

  myTable.wrap(myCanvasContainer);
  myCanvas.insertBefore(myTable);
  //myCanvas.prependTo(myCanvasContainer);

  myCanvasContainer.css({
    'display': 'block',
    'margin': 'auto',
    'height': 'auto',
  });
  myCanvas.css({
    //'width': width + 'px',
    //'height': height + 'px',
    //'aspect-ratio': 'auto ' + width + ' / ' + height,
    'width': '100%',
    'height':'100%',
    'position': 'relative',
    //'border': '1px solid black',
  });

  var width = Math.floor( window.innerWidth ); // size canvas width according to viewport width! redraw again on resize.
  var height = 2000;
  const ctx = myCanvas[0].getContext("2d");
  ctx.canvas.width = width;
  ctx.canvas.height = height;

  // Draw

  function drawLine(x1,y1,x2,y2){
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
  }

  function drawDot(xMid,yMid){
    var rad = 4;
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(xMid, yMid, rad, 0, 2 * Math.PI);
    ctx.stroke();
  }

  function drawText(x,y,text){
    ctx.font = '30px Arial';
    ctx.fillText(text, x, y);
  }

  drawLine(10,0,10,100);

  drawText(10,50,'Hello World');

  drawDot(20,20);

  function drawTimeline(table){
    myTBody.children('tr:not(".empty-row")').each(function(i){ // loop rows
      var tr = $(this);
      console.log(i);
      var start = parseInt( tr.children('td[data-id="start"]').val() );
      console.log({start});
      var end = parseInt( tr.children('td[data-id="end"]').val() );
      console.log({end});
      var title = tr.children('td[data-id="title"]').text();
      console.log({title});
      var desc = tr.children('td[data-id="title"]').text();
      console.log({desc});
      var category = tr.children('td[data-id="title"]').text();
      console.log({category});
    });
  }



});
