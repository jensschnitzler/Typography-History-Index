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
        if(td.val().length > 0){
          tr.attr('data-cat',category);
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

  const ctx = myCanvas[0].getContext("2d");

  var width = Math.floor( window.innerWidth ); // size canvas width according to viewport width! redraw again on resize.
  var height = 2000;

  myCanvasContainer.css({
    'display': 'block',
    'margin': 'auto',
    'height': 'auto',
  });
  myCanvas.css({
    'width': width + 'px',
    'height': height + 'px',
    'aspect-ratio': 'auto ' + width + ' / ' + height;
    //'border': '1px solid black',
  });

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
    myTBody.children('tr:not(".empty-row")').each(function(){ // loop rows
      var tr = $(this);
      var start = parseInt( tr.children('td[data-id="start"]').text() );
      var end = parseInt( tr.children('td[data-id="end"]').text() );
      var title = tr.children('td[data-id="title"]').text();
      var desc = tr.children('td[data-id="title"]').text();
      var category = tr.children('td[data-id="title"]').text();

      if(category.length > 0){
        tr.attr('data-cat',category);
      } else {
        tr.addClass('empty-row');
      }

    });
  }



});
