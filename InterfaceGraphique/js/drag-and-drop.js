   // Drag And Drop
        ;(function(b){var a=b.layout;if(!a.callbacks)a.callbacks={};a.callbacks.resizeTabLayout=function(a,c){(c.jquery?c:b(c.panel)).filter(":visible").find(".ui-layout-container:visible").andSelf().each(function(){var a=b(this).data("layout");a&&a.resizeAll()})}})(jQuery);

        //DragAndDrop
        var MyElements = {
            "categori1":{
                "gui_img":{"src":"<img src=\"image.jpg\" />", "nom":"Image"},
                "gui_input":{"src":"<input type=\"button\" value=\"Bouton\"/>", "nom":"Bouton"}
            },
            "categori2":{
                "gui_lien":{"src":"<a href=\"#\" >Lien</a>", "nom":"Lien"},
                "gui_titre":{"src":"<h1>Titre</h1>", "nom":"Titre"}
            }
        };
        
        
        function remplisElements(elements){
            for(categori in elements){
                $("#accordion-west").append('<h3><a href="#">'+categori+'</a></h3><div id='+categori+' role="tabpanel"></div>');  
                for(elem in elements[categori]) {
                    $("#"+categori).append("<div class='drag' id=\""+elem+"\">- <span>"+elements[categori][elem]['nom']+"</span></div><br />");
                }
                
            }
            $("#accordion-west").accordion({ collapsible: true });
            $(".drag").draggable({
                                 helper:	function () {return $(this).clone().appendTo('body').show(); },
                                 });

        }
        
                

        
        function addToPage(test) {
            idElement = $(test.helper).attr("id");
            $(test.helper).remove();
            for(categori in MyElements){
                if (MyElements[categori][idElement])
                $(".drop-zone").append(MyElements[categori][idElement]['src']); 
            }                   
        }
        