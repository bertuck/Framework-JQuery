var Elem = 0;
function gui_RefreshForm() {
var formName = "";
var formValue = "";
elem = $(".widget-selected");
var name = elem.attr("name");
var FormDiv = {"css":["width", "height", "float", "background-color", "border",],
			"attr":["name", "class"]
		  };
$(".floatform label").remove();
$("#TitleProperties").html("<b>Properties : "+ name + "</b></br>");
	for(type in FormDiv) {
		for (x = 0; FormDiv[type][x]; x++) {
			formName = '<label><input  class="text ui-widget-content ui-corner-all" value="'+FormDiv[type][x]+'"  style="width: 98%;" type="text" name="text" id="'+FormDiv[type][x]+'" readonly /></label>';
			$("#Name-"+type).append(formName);	
				if (type == "css") {
				formValue = '<label><input  class="text ui-widget-content ui-corner-all" value="'+elem.css(FormDiv[type][x])+'" style="width: 98%;" type="text" name="css-'+FormDiv[type][x]+'" id="'+FormDiv[type][x]+'-value" /></label>';
				$("#Value-"+type).append(formValue);
					//if (FormDiv[type][x].match(/color/))
						//alert("toto");
				}
				else if (type == "attr") { 
					formValue = '<label><input  class="text ui-widget-content ui-corner-all" value="'+elem.attr(FormDiv[type][x])+'" style="width: 98%;" type="text" name="attr-'+FormDiv[type][x]+'" id="'+FormDiv[type][x]+'-value" /></label>';
					$("#Value-"+type).append(formValue);
				}
		}	
	}
	
}



function CreateProject(tab) {
$("#Name label").remove();
$("#Value label").remove();
// var Tab = retour fonction
$("#TitleProperties").html("<b>Properties : Project </b></br>");
	for (x = 0; tab[x]; x++) {
		var formContent = '<label><input class="validate[required,custom[onlyLetter],length[0,100]] text-input" value="'+tab[x].name+'" type="text" name="text" id="Text1" /></label>';
		$("#Name").append(formContent);
		var formContent = '<label><input class="validate[required,custom[onlyLetter],length[0,100]] text-input" value="'+tab[x].value+'" type="text" name="text" id="Text1" /></label>';
		$("#Value").append(formContent);
	}
}

function gui_saveForm(elem) {

var Object = $("#formID").serializeArray();
var Widget = $(".widget-selected");
for (item in Object)
{
	var tmp = Object[item]["name"].split('-');
	switch (tmp[0]) {
		case "css" : Widget.css(tmp[1], Object[item]["value"]); break;
		case "attr" : Widget.attr(tmp[1], Object[item]["value"]); break;
	}
}
alert('attributs a sauvgarder.');
}
