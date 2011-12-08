$(document).ready(function() {
    var tab = InitTab(19);
    myGrid.jqGrid(CreateGrid());
    AddTabData(tab);
});

function InitTab(Nbelems) {
    var tabinfos= new Array(Nbelems);
    for (var x = 0; x <= Nbelems; x++) {
        tabinfos[x] = new Array(3);
        tabinfos[x]= {Number:"Dark", String:"Vader"};
    }
    return tabinfos;
}

function AddTabData(tab) {
    alert('#'+form[0].name);
    for (x = 0; tab[x]; x++)
        $('#'+form[0].name).addRowData(x, tab[x]);
}

function ResizeTheGrid() {
    $('#'+form[0].name).fluidGrid({base:'#grid_wrapper', offset:-20});
}

function GetColModel() {
    var ColModel = new Array(source.length);
    for (var nb1 = 0; nb1 < source.length; ++nb1)
        for (var nb2 = 0; nb2 < theme.length; ++nb2)
            if (source[nb1].name == theme[nb2].name)
                ColModel[nb1] = { name: theme[nb2].name, index: theme[nb2].name, width: theme[nb2].width, align: theme[nb2].align, datatype: source[nb1].type, editable: theme[nb2].editable};
    return ColModel;
}

function GetColNames() {
    var ColNames = new Array(source.length);
    for (var nb = 0; nb < source.length; ++nb)
        ColNames[nb] = source[nb].name;
    return ColNames;
}

function CreateGrid() {
    var MyJSON = {
        datatype: "clientSide", altRows: true, colNames: GetColNames(), colModel: GetColModel(), pager: '#pager',
        rownumbers: true, viewrecords: true, rowList: [20, 10, 5], imgpath: 'css/start/images', caption: name,
        height: "100%", cellEdit: true, autowidth: true, multiselect: true, lastpage: "1"
    };
    return MyJSON;
}
