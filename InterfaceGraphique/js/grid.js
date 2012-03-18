var lastsel;
jQuery("#rowed3").jqGrid({
	datatype: "json",
	width: 480,
	height: 820,
   	colNames:['Name','Value'],
   	colModel:[
   		{name:'name',index:'id', width:5},
   		{name:'value',index:'invdate', width:10, editable:true},	
   	],
   	sortname: 'id',
    viewrecords: true,
    sortorder: "desc",
	onSelectRow: function(id){
		if(id && id!==lastsel){
			jQuery('#rowed3').jqGrid('restoreRow',lastsel);
			jQuery('#rowed3').jqGrid('editRow',id,true);
			lastsel=id;
		}
	},
	caption: "Properties"
});
jQuery("#rowed3").jqGrid('navGrid',"#prowed3",{edit:false,add:false,del:false});