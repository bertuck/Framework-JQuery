   // Drag And Drop
        ;(function(b){var a=b.layout;if(!a.callbacks)a.callbacks={};a.callbacks.resizeTabLayout=function(a,c){(c.jquery?c:b(c.panel)).filter(":visible").find(".ui-layout-container:visible").andSelf().each(function(){var a=b(this).data("layout");a&&a.resizeAll()})}})(jQuery);

        //DragAndDrop
        var MyElements = {
            "categori1":{
                "gui_img":{"src":"<img src=\"img/icon/image_icon.png\" />", "nom":"<img src=\"img/icon/image_icon.png\" />"},
                "gui_input":{"src":"<button type=\"button\">Bouton</button>", "nom":"<img src=\"img/icon/button_icon.png\" />"}
            },
            "categori2":{
                "gui_lien":{"src":"<a href=\"#\" >Lien</a>", "nom":"<img src=\"img/icon/text_link_icon.png\" />"},
                "gui_titre":{"src":"<h1>Titre</h1>", "nom":"<img src=\"img/icon/heading_icon.png\" />"}
            }
        };
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
                    $("#"+categori).append("<div class='drag' id=\""+elem+"\"><span>"+elements[categori][elem]['nom']+"</span></div><br />");
                }
                
            }
            $("#accordion-west").accordion({ collapsible: true });
            $(".drag").draggable({
                                 helper:	function () {return $(this).clone().appendTo('body').show(); },
                                 });

        }
        
                
		$(function() {
		$( ".sortable" ).sortable({
		connectWith:	$(".sortable")
		,	start: function(e, ui){
        ui.placeholder.height(ui.item.height());
        ui.placeholder.width(ui.item.width());
        ui.placeholder.css("border:5px dotted black;list-style-type: none; ");
    	}
		,	cursor:			'move'
		//	use a helper-clone that is append to 'body' so is not 'contained' by a pane
		,	helper:			function (evt, ui) { return $(ui).clone().appendTo('body').show(); }
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
								//if (( (helperWidth + padding) - targetWidth ) > 20)
									ui.helper
										.height('auto')
										.width( targetWidth - padding )
									;
							}
		});
		
		});
        
        
        
        function addToPage(test) {
            idElement = $(test.helper).attr("id");
            $(test.helper).remove();
            for(categori in MyElements){
                if (MyElements[categori][idElement])
                $(".drop-zone ul").append("<li class=\"hoverable\"style=\"list-style-type: none;\">"+MyElements[categori][idElement]['src']+"</li>"); 
            }   
        }
       
        