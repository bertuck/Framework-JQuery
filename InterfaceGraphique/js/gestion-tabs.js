$(function(){
		//all hover and click logic for buttons
		$(".fg-button:not(.ui-state-disabled)")
		.hover(
			function(){ 
				$(this).addClass("ui-state-hover"); 
			},
			function(){ 
				$(this).removeClass("ui-state-hover"); 
			}
		)
		.mousedown(function(){
				$(this).parents('.fg-buttonset-single:first').find(".fg-button.ui-state-active").removeClass("ui-state-active");
				if( $(this).is('.ui-state-active.fg-button-toggleable, .fg-buttonset-multi .ui-state-active') ){ $(this).removeClass("ui-state-active"); }
				else { $(this).addClass("ui-state-active"); }	
		})
		.mouseup(function(){
			if(! $(this).is('.fg-button-toggleable, .fg-buttonset-single .fg-button,  .fg-buttonset-multi .fg-button') ){
				$(this).removeClass("ui-state-active");
			}
		});
	});
	
	var Project = null;
	function gui_addGridData() {
		var tabinfos= new Array(5);
		tabinfos[0]= {name:"Name", value:Project.name};
		tabinfos[1]= {name:"Version", value:Project.version};
		CreateProject(tabinfos);
	}
	function gui_createProject(){ 
		Project = {
			name: document.getElementById('ProjectName').value,
			version: document.getElementById('ProjectVersion').value,
			element: 'default'
		};
    }    


$(function() {
		var $tab_title_input = $( "#tab_title"),
			$tab_content_input = $( "#tab_content" );
		var tab_counter = 2;

		// tabs init with a custom tab template and an "add" callback filling in the content
		var $tabs = $( "#tabs").tabs({
			tabTemplate: "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close'>Remove Tab</span></li>",
			add: function( event, ui ) {
				var tab_content = "<div class=\"drop-zone\" style=\"width 800px; height:600px; overflow: auto;background: grey;\"></div>";
				$( ui.panel ).append( "<p>" + tab_content + "</p>" );
			}
		});

		// modal dialog init: custom buttons and a "close" callback reseting the form inside
		var $dialog = $( "#dialog" ).dialog({
			autoOpen: false,
			modal: true,
			buttons: {
				Add: function() {
					addTab();
					$( this ).dialog( "close" );
				},
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			},
			open: function() {
				$tab_title_input.focus();
			},
			close: function() {
				$form[ 0 ].reset();
			}
		});

		// addTab form: calls addTab function on submit and closes the dialog
		var $form = $( "form", $dialog ).submit(function() {
			addTab();
			$dialog.dialog( "close" );
			return false;
		});

		// actual addTab function: adds new tab using the title input from the form above
		function addTab() {
			gui_createProject();
			$tabs.tabs( "add", "#tabs-" + tab_counter, Project.name );
			tab_counter++;
			gui_addGridData();
			var branches = $("<li><span class='folder'>"+Project.name+"</span><ul>" + 
					"<li><span class='file'>Header</span></li>" + 
					"<li><span class='file'>Body</span></li></ul></li>").appendTo("#browser");
					
			$("#browser").treeview({
				add: branches
			});
		}

		// addTab button: just opens the dialog
		$( "#add_tab" )
			.button()
			.click(function() {
				addTab();
				$(function(){
                      $(".drop-zone").droppable({		greedy: true,
                      									activeClass:"ui-state-hover",
                      									hoverClass:"ui-state-active",
                                                         drop: function(event, ui) {
                                                         addToPage(ui.draggable[0], $(this)[0]);
                                                         }
                                                         });
                                                         });
        
        /*function remplisElements(elements){
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

        }*/
        
                
		DoSortable("main-sortable-1");
			});

		// close icon: removing the tab on click
		// note: closable tabs gonna be an option in the future - see http://dev.jqueryui.com/ticket/3924
		$( "#tabs span.ui-icon-close" ).live( "click", function() {
			var index = $( "li", $tabs ).index( $( this ).parent() );
			$tabs.tabs( "remove", index );
		});
	});
	
	