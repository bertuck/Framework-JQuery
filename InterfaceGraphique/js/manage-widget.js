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