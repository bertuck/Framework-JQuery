var Project;
	function gui_addGridData() {
		var tabinfos= new Array(5);
		tabinfos[0]= {name:"Name", value:Project.name};
		tabinfos[1]= {name:"Version", value:Project.version};
		for (x = 0; tabinfos[x]; x++)
		jQuery('#rowed3').jqGrid('addRowData', x, tabinfos[x]);
	}
	function gui_createProject(){ 
		Project = {
			name: document.getElementById('ProjectName').value,
			version: document.getElementById('ProjectVersion').value,
			element: 'default'
		};
    }    
			
	$(document).ready(function(){
                      $(".drop-zone").droppable({
                                                         drop: function(event, ui) {
                                                         addToPage(ui);
                                                         }
                                                         });
		$("#browser").treeview({
			toggle: function() {
				console.log("%s was toggled.", $(this).find(">span").text());
			}
		});
		
		$("#Create").click(function() {
			if (Project.name == "") {
				var branches = $("<li><span class='folder'>No Name</span><ul>" + 
					"<li><span class='file'>Item1</span></li>" + 
					"<li><span class='file'>Item2</span></li></ul></li>").appendTo("#browser");
					}
			else {
			$TABS.tabs( "add", "#tab_Content",Project.name);
			gui_addGridData();
			var branches = $("<li><span class='folder'>"+Project.name+"</span><ul>" + 
					"<li><span class='file'>Header</span></li>" + 
					"<li><span class='file'>Body</span></li></ul></li>").appendTo("#browser");
			}
			$("#browser").treeview({
				add: branches
			});
		});
	});