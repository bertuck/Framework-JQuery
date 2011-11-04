function resize_the_grid()
{
  $('#theGrid').fluidGrid({base:'#grid_wrapper', offset:-20});
}

$(document).ready(function(){

  var myGrid = $('#theGrid');

  myGrid.jqGrid({
    datatype:'clientSide',
    altRows:true,
    colNames:['Name', 'Side', 'Power'],
    colModel:[
      { name:'name', index: 'name' },
      { name:'side', index: 'side' },
      { name:'power', index: 'power' } ],
    pager: jQuery('#pager'),
    viewrecords: true,
    imgpath: 'css/start/images',
                      caption: 'The Force: Who\'s Who?',
                      height: "100%"
  });

  myGrid.addRowData("1", {name:"Luke", side:"Good", power:"6"});
  myGrid.addRowData("2", {name:"Vader", side:"Dark", power:"9"});
  myGrid.addRowData("3", {name:"Han", side:"meh?", power:"0"});

  //resize_the_grid();
});

//$(window).resize(resize_the_grid);
