// Toute les option sont dispo sut : http://www.trirand.com/jqgridwiki/doku.php?id=wiki:options

var MyJSON = {

    /*DEFINITION*/

    datatype: "clientSide",
    altRows: true,
    colNames: ['Name', 'Side', 'Power'],
    colModel: [
                  { name:'name', index: 'name' },
                  { name:'side', index: 'side' },
                  { name:'power', index: 'power', datatype: "int"}
               ],



    /*THEMES*/

    pager: '#pager',
    rownumbers: true,
    viewrecords: true,
    rowList: [20, 10, 5],
    imgpath: 'css/start/images',
    caption: 'The Force: Who\'s Who?',
    height: "100%",
    cellEdit: true,
    autowidth: true,
    multiselect: true,
    lastpage: "1"
};
