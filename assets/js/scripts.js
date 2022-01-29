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

  myTHead.find('th').each(function(){
    var th = $(this);
    var text = th.text();
    var slug = slugify(text);
    th.attr('data-id',slug);
    console.log({slug});
  });



});
