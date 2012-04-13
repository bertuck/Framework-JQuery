function addWidgetDiv(destination)
{
/*elem = document.createElement('div');
elem.setAttribute('class', 'drop-zone widget-div');*/
var elem = $("<div></div>");
elem.attr("name", "div");
elem.attr("class", "drop-zone widget-div resizable");
$(destination).append(elem);

elem.click(function(e){
						$(".widget-selected").removeClass("widget-selected");
						$(this).addClass("widget-selected");
						gui_RefreshForm();
						e.stopPropagation();
						}
			);
				elem.droppable({						 greedy: true,
														 activeClass:"ui-state-hover",
                      									 hoverClass:"ui-state-active",
                                                         drop: function(event, ui) {
                                                         addToPage(ui.draggable[0], $(this)[0]);
                                                         }
                                                         });
														 $(".resizable").resizable({
														 helper: "ui-resizable-helper",
			animate: true,
		});
}

function addWidgetGrid(destination, nameCol, modelCol)
{
var elemDiv = $("<div></div>");
var elem = $("<table></table>");
elemDiv.attr("name", "grid");
elemDiv.attr("class", "widget-grid");
$(elemDiv).append(elem);
$(destination).append(elemDiv);
elem.jqGrid({
	datatype: "json",
   	colNames:['Champ1','Champ2', 'Champ3'],
   	colModel:[
   		{name:'Champ1',index:'Champ1', width:128},
   		{name:'Champ2',index:'Champ2', width:128},
   		{name:'Champ3',index:'Champ3', width:128},	
   	],
   	rowNum:10,
   	rowList:[10,20,30],
   	sortname: 'Champ1',
    viewrecords: true,
    sortorder: "desc",
    caption:"My Grid"
});
elemDiv.click(function(e){
						$(".widget-selected").removeClass("widget-selected");
						$(this).addClass("widget-selected");
						gui_RefreshForm();
						e.stopPropagation();
						}
			);
}