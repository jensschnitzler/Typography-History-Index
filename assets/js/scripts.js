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

  th.each(function(){
    var th = $(this);
    var text = th.text();
    var slug = slugify(text);
    th.attr('data-id',slug);
    console.log({slug});
  });

  myTBody.children('tr').each(function(){ // loop rows
    var tr = $(this);
    tr.children('td').each(function(i){ // loop cells
      var td = $(this);
      var id = th.eq(i).data('id');
      td.attr('data-id',id);
    });
  });

  /* --- Add Canvas --- */
  const myCanvasContainer = $('<div/>');
  const myCanvas = $('<canvas id="canvas" width=1000 height=1000></canvas>');
  myCanvasContainer.insertBefore(myTable);
  myCanvas.appendTo(myCanvasContainer);
  myCanvasContainer.css({
    'display': 'block',
    'margin': 'auto',
    'height': 'auto',
  });
  myCanvas.css({
    'width': '100%',
    'height': '100%',
    'border': '1px solid black',
  });




});
