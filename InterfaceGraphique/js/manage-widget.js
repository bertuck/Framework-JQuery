function addWidgetDiv(destination)
{
/*elem = document.createElement('div');
elem.setAttribute('class', 'drop-zone widget-div');*/
var elem = $("<div></div>");
elem.attr("name", "div");
elem.attr("class", "drop-zone widget-div");
$(destination).append(elem);

elem.click(function(e){
						$(".widget-selected").removeClass("widget-selected");
						$(this).addClass("widget-selected resizable");
						gui_RefreshForm();
						$( ".resizable" ).resizable();
						e.stopPropagation();
						}
			);
elem.droppable({										greedy: true,
														activeClass:"ui-state-hover",
                      									hoverClass:"ui-state-active",
                                                         drop: function(event, ui) {
                                                         addToPage(ui.draggable[0], $(this)[0]);
                                                         }
                                                         });
}

function addWidgetGrid(destination)
{
var elem = $("<div><table id='Grid'></table></div>");
elem.attr("name", "grid");
elem.attr("class", "widget-grid");
$(destination).append(elem);
jQuery("#Grid").jqGrid({
	datatype: "json",
   	colNames:['Inv No','Date', 'Client', 'Amount','Tax','Total','Notes'],
   	colModel:[
   		{name:'id',index:'id', width:55},
   		{name:'invdate',index:'invdate', width:90},
   		{name:'name',index:'name asc, invdate', width:100},
   		{name:'amount',index:'amount', width:80, align:"right"},
   		{name:'tax',index:'tax', width:80, align:"right"},		
   		{name:'total',index:'total', width:80,align:"right"},		
   		{name:'note',index:'note', width:150, sortable:false}		
   	],
   	rowNum:10,
   	rowList:[10,20,30],
   	sortname: 'id',
    viewrecords: true,
    sortorder: "desc",
    caption:"JSON Example"
});
elem.click(function(e){
						$(".widget-selected").removeClass("widget-selected");
						$(this).addClass("widget-selected");
						gui_RefreshForm();
						e.stopPropagation();
						}
			);
elem.droppable({										greedy: true,
														activeClass:"ui-state-hover",
                      									hoverClass:"ui-state-active",
                                                         drop: function(event, ui) {
                                                         addToPage(ui.draggable[0], $(this)[0]);
                                                         }
                                                         });
}