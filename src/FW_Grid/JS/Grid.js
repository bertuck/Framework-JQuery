var Grid;

function FW_GRID(grid) {
    var html;
    Grid = grid;
    html = "<div id='page-wrapper'>\n<div id='grid_wrapper' class='ui-corner-all floatLeft'>\n<table id='"+Grid.conf.name+"' class='scroll'></table>\n<div id='pager' class='scroll' style='text-align:center;'></div>\n</div>\n</div>"
    DoHtmlGrid(html);
    var myGrid = $('#'+Grid.conf.name);
    var tab = InitTab(19);
    myGrid.jqGrid(CreateGrid());
    AddGridData(tab);
}

function DoHtmlGrid(html) {
    document.write(html);
}

function CreateGrid() {
    var MyJSON = {
        datatype: "clientSide", altRows: true, colNames: GetColNames(), colModel: GetColModel(), pager: '#pager',
        rownumbers: true, viewrecords: true, rowList: [20, 10, 5], imgpath: 'css/start/images', caption: name,
        height: "100%", cellEdit: true, autowidth: true, multiselect: true, lastpage: "1"
    };
    return MyJSON;
}

function InitTab(Nbelems) {
    var tabinfos= new Array(Nbelems);
    for (var x = 0; x <= Nbelems; x++) {
        tabinfos[x] = new Array(3);
        tabinfos[x]= {Number:"Dark", String:"Vader"};
    }
    return tabinfos;
}

function AddGridData(tab) {
    for (x = 0; tab[x]; x++)
        $('#'+Grid.conf.name).addRowData(x, tab[x]);
}

function ResizeTheGrid() {
    $('#'+Grid.conf.name).fluidGrid({base:'#grid_wrapper', offset:-20});
}

function GetColModel() {
    var ColModel = new Array(Grid.source.length);
    for (var nb1 = 0; nb1 < Grid.source.length; ++nb1)
        for (var nb2 = 0; nb2 < Grid.theme.length; ++nb2)
            if (Grid.source[nb1].name == Grid.theme[nb2].name)
                ColModel[nb1] = { name: Grid.theme[nb2].name, index: Grid.theme[nb2].name, width: Grid.theme[nb2].width, align: Grid.theme[nb2].align, datatype: Grid.source[nb1].type, editable: Grid.theme[nb2].editable};
    return ColModel;
}

function GetColNames() {
    var ColNames = new Array(Grid.source.length);
    for (var nb = 0; nb < Grid.source.length; ++nb)
        ColNames[nb] = Grid.source[nb].name;
    return ColNames;
}
