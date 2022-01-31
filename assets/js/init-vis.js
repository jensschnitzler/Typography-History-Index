// DOM element where the Timeline will be attached
var container = document.getElementById('visualization');

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
  {id: 1, content: 'item 1', start: new Date(2010,9,23),group: 1},
  {id: 2, content: 'item 2', start: new Date(2011,9,23), end: new Date(2012,9,23),group: 1},
  {id: 3, content: 'item 3', start: new Date(2013,9,23), type: 'point',group: 2}
]);

// Configuration for the Timeline
var options = {
  width: '100%',
  height: '100%',
  autoResize: true,
  start: new Date(0,1,1),
  end: new Date(2022,1,1),
  //margin: { item: 20 }
};

var groups = [
  {id: 1, content: 'Group 1'}, // Optional: a field 'className', 'style', 'order', [properties]
  {id: 2, content: 'Group 2'},
];

// Create a Timeline
var timeline = new vis.Timeline(container, items, groups, options);
