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

  /* --- Prepare Table --- */

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
        //console.log({val});
        if(val.length > 1){
          var cat = slugify(val);
          tr.attr('data-cat',cat);
        } else {
          tr.addClass('empty-row');
        }
      }
    });
  });

  /* --- Add Visualization DOM Elements --- */

  const myVisContainer = $('<div/>').addClass('graph-container');
  const myVis = $('<div id="visualization"></div>');

  myTable.wrap(myVisContainer);
  myVis.insertBefore(myTable);

  myVisContainer.css({
    'display': 'block',
    'margin': 'auto',
    'height': 'auto',
  });

  var width = Math.floor( window.innerWidth ); // size canvas width according to viewport width! redraw again on resize.
  var height = 100;

  /* --- Initiate Vis.js --- */

  myTBody.children('tr:not(".empty-row")').each(function(i){ // loop rows
    var tr = $(this);
    console.log(i);
    var start = tr.children('td[data-id="start"]').text().trim();
    console.log({start});
    var end = tr.children('td[data-id="end"]').text().trim();
    console.log({end});
    var title = tr.children('td[data-id="title"]').text().trim();
    console.log({title});
    var desc = tr.children('td[data-id="description"]').text().trim();
    console.log({desc});
    var category = tr.children('td[data-id="category"]').text().trim();
    console.log({category});
  });


});
