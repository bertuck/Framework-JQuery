   // Drag And Drop
        ;(function(b){var a=b.layout;if(!a.callbacks)a.callbacks={};a.callbacks.resizeTabLayout=function(a,c){(c.jquery?c:b(c.panel)).filter(":visible").find(".ui-layout-container:visible").andSelf().each(function(){var a=b(this).data("layout");a&&a.resizeAll()})}})(jQuery);

        //DragAndDrop
        
		$(function(){
                      $(".drop-zone").droppable({
                                                    drop: function(event, ui) {
                                                         addToPage(ui);
                                                         }
                                                         });
                                                         });
                                                         
        
        function remplisElements(elements){
            for(categori in elements){
                $("#accordion-west").append('<h3><a href="#">'+categori+'</a></h3><div id='+categori+' role="tabpanel"></div>');  
                for(elem in elements[categori]) {
                    $("#"+categori).append("<img class='drag icon_categorie' name=\""+elem+"\" src=\"img/icon/"+elements[categori][elem].src+"\"></img>");
                }
                
            }
            $("#accordion-west").accordion({ collapsible: true });
			$("#accordion-east").accordion({ collapsible: true });
            $(".drag").draggable({
                                 helper:	function () {return $(this).clone().appendTo('body').show(); }
                                 });
            //$( "#tabs").tabs( "add", "#tabs-" + 1,  "Projet 1");
			
        }
        
        function addToPage(widget, destination) {
           	switch (widget.name) 
           	{
           		case "div" : 
           			addWidgetDiv(destination);
           			break;
				case "grid" : 
					addWidgetGrid(destination);
           			break;
				case "form" : 
					addWidgetForm(destination);
           			break;
           	}
        }   
        
        function DoSortable(elem) {
		$( "#"+elem ).sortable({
		connectWith:	$(".sortable")
		,	placeholder:	'ombre'
		,	cursor:			'move'
		//	use a helper-clone that is append to 'body' so is not 'contained' by a pane
		,	helper:			function (evt, ui) {return $(ui).clone().appendTo('body').show(); }
		,	over:			function (evt, ui) {
								var
									$target_UL	= $(ui.placeholder).parent()
								,	targetWidth	= $target_UL.width()
								,	helperWidth	= ui.helper.width()
								,	padding		= parseInt( ui.helper.css('paddingLeft') )
												+ parseInt( ui.helper.css('paddingRight') )
												+ parseInt( ui.helper.css('borderLeftWidth') )
												+ parseInt( ui.helper.css('borderRightWidth') )
								;
								if (( (helperWidth + padding) - targetWidth ) > 20)
									ui.helper
										.height('auto')
										.width( targetWidth - padding )
									;
							}
		});
		
		}
		
		
		/*function DoDropable(elem) {
		 $(".drop-zone").droppable({
		 		drop: function(event, ui) {
		 		alert($(this));
				addToPage(ui.draggable[0], $(this));
				}
		});
       }*/
        