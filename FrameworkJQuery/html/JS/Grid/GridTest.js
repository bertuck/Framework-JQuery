function initTab(Nbelems)
{
    var tabinfos= new Array(Nbelems);
    for (var x = 0; x <= Nbelems; x++)
         {
            tabinfos[x] = new Array(3);
            tabinfos[x]= {name:"Vader", side:"Dark", power:x};
         }
    return tabinfos;
}

function addTabData(tab)
{
    for (x = 0; tab[x]; x++)
        $('#theGrid').addRowData(x, tab[x]);
}

function resize_the_grid()
{
  $('#theGrid').fluidGrid({base:'#grid_wrapper', offset:-20});
}

$(document).ready(function(){

  var myGrid = $('#theGrid');
   //$("#theGrid").jqGrid_setPagingValue({"currpage":1,"lastpage":12,"totalrows":60});
  myGrid.jqGrid({
                    datatype:'clientSide',
                    altRows:true,
                    //pgtext: 'Page {1} of {1}',
                    colNames:['Name', 'Side', 'Power'],
                    colModel:[
                    { name:'name', index: 'name' },
                    { name:'side', index: 'side' },
                    { name:'power', index: 'power', datatype: "int"} ],
                    pager: jQuery('#pager'),
                    rownumbers: true,
                    page: "page",
                    viewrecords: true,
                    rowList: [20, 10, 5],
                    imgpath: 'css/start/images',
                    caption: 'The Force: Who\'s Who?',
                    height: "100%",
                    cellEdit: true,
                    autowidth: true,
                    multiselect: true
  });
 //jQuery("#theGrid").jqGrid('navGrid', jQuery('#pager'), { edit: false, add: false, del: false })

  var tab = initTab(19);
  addTabData(tab);
  /*myGrid.addRowData("1", {name:"Luke", side:"Good", power:"6"});
  myGrid.addRowData("2", {name:"Vader", side:"Dark", power:"9"});
  myGrid.addRowData("3", {name:"Han", side:"meh?", power:"0"});*/

  //resize_the_grid();
});

//$(window).resize(resize_the_grid);
