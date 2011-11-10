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
  myGrid.jqGrid(MyJSON);
  var tab = initTab(19);
  addTabData(tab);
});
