var Elem = 0;
var Lien = {"mgdata":"http://mgdata-khfif.appspot.com/metadata"}
var CfgElem = {
				"div":{"css":["width", "height", "float", "background-color", "border",], "attr":["name", "class"]},
				"grid":{"data":["Url"]}
				};			
				
function gui_RefreshForm() {
elem = $(".widget-selected");
var name = elem.attr("name");
var FormDiv = CfgElem[name];
$("#TitleProperties").html("<b>Properties : "+ name + "</b></br>");	
var tmp = "";
switch (name) 
 {
	case "div" : 
		tmp = RefreshDivForm(elem, FormDiv);
		$("#FormValidate").attr("onclick", "SaveDiv();");
		break;
	case "grid" : 
		tmp = RefreshGridForm(elem, FormDiv);
		$("#FormValidate").attr("onclick", "SaveGrid();");
		break;
}
}	
                
function RefreshDivForm(elem, FormDiv) {
var formName = "";
var formValue = "";
$("#accordion-east").html('<h3><a href="#">Element - Style</a></h3><div><fieldset id="Name-css" class="floatform"><legend>Name</legend></fieldset><fieldset id="Value-css" class="floatform"><legend>Value</legend></fieldset></div><h3><a href="#">Element - Attributes</a></h3><div><fieldset id="Name-attr" class="floatform"><legend>Name</legend></fieldset><fieldset id="Value-attr" class="floatform"><legend>Value</legend></fieldset></div>');
	for(type in FormDiv) {
		for (x = 0; FormDiv[type][x]; x++) {
			formName = '<label><input  class="text ui-widget-content ui-corner-all" value="'+FormDiv[type][x]+'"  style="width: 98%;" type="text" name="text" id="'+FormDiv[type][x]+'" readonly /></label>';
			$("#Name-"+type).append(formName);	
				if (type == "css") {
					formValue = '<label><input  class="text ui-widget-content ui-corner-all" value="'+elem.css(FormDiv[type][x])+'" style="width: 98%;" type="text" name="css-'+FormDiv[type][x]+'" id="'+FormDiv[type][x]+'-value" /></label>';
				$("#Value-"+type).append(formValue);
				if (FormDiv[type][x].match(/color/))
					$('#'+FormDiv[type][x]+'-value').ColorPicker({
						onSubmit: function(hsb, hex, rgb, el) {
							$(el).val("rgb("+rgb["r"]+","+rgb["g"]+","+rgb["b"]+")");
							$(".colorpicker").css("right", "500px");
							$(el).ColorPickerHide();
					},
						onBeforeShow: function () {
							$(this).ColorPickerSetColor(this.value);
					}
					}).bind('keyup', function(){
						$(this).ColorPickerSetColor(this.value);
					});	
				}
				else if (type == "attr") { 
					formValue = '<label><input  class="text ui-widget-content ui-corner-all" value="'+elem.attr(FormDiv[type][x])+'" style="width: 98%;" type="text" name="attr-'+FormDiv[type][x]+'" id="'+FormDiv[type][x]+'-value" /></label>';
					$("#Value-"+type).append(formValue);
				}
		}
		$("#accordion-east").accordion("destroy");
		$("#accordion-east").accordion({ collapsible: true });
	}

}
	
function getChampFromServer() {
	$.getJSON( $("#urlGrid").val(), function(data) {
				$("#gridChamp").html("");
  				$.each(data, function(key, val) {
  					$("#gridChamp").append('<label for="'+val["name"]+'">'+val["verbose_name"]+'</label><input type="checkbox" id="'+val["name"]+'">');
				});
				});
}
	
function RefreshGridForm(elem, FormDiv) {
var formName = "";
var formValue = "";
var param = $('.widget-selected').jqGrid('getGridParam', 'colNames'); 
var columnNames = $(".widget-selected table").jqGrid('getGridParam','colNames');
alert(columnNames);
$("#accordion-east").html('<h3><a href="#">Url Donnees</a></h3><div><input class="text ui-widget-content ui-corner-all" value="http://mgdata-khfif.appspot.com/metadata/client" style="width: 98%;" type="text" name="urlGrid" id="urlGrid" /><input  class="text ui-widget-content ui-corner-all" value="'+$(".widget-selectet .ui-jqgrid-title").val()+'" style="width: 98%;" type="text" name="NameGrid" id="NameGrid" /><a href="#" style="float:right" class="fg-button ui-state-default fg-button-icon-solo ui-corner-all basic" title="Validate"><span class="ui-icon ui-icon-check" onclick="getChampFromServer();"></span>Validate</a></div>');
$("#accordion-east").append('<h3><a href="#">Champs</a></h3><div id="gridChamp">Entrez d\'abord l\'url du server de donnee...</div>');
$("#accordion-east").accordion("destroy");
$("#accordion-east").accordion({ collapsible: true });
}

function CreateProject(tab) {
$("#Name label").remove();
$("#Value label").remove();
$("#TitleProperties").html("<b>Properties : Project </b></br>");
	for (x = 0; tab[x]; x++) {
		var formContent = '<label><input class="validate[required,custom[onlyLetter],length[0,100]] text-input" value="'+tab[x].name+'" type="text" name="text" id="Text1" /></label>';
		$("#Name").append(formContent);
		var formContent = '<label><input class="validate[required,custom[onlyLetter],length[0,100]] text-input" value="'+tab[x].value+'" type="text" name="text" id="Text1" /></label>';
		$("#Value").append(formContent);
	}
}

function SaveDiv(elem) {

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
}


function RefreshGrid(champs) {
var NameCol = [];
var ModelCol = [];
for (var x = 0; x < champs.length; x++) {
	NameCol[x] = champs[x].id;
	ModelCol[x] = {name:champs[x].id, index:champs[x].id, width:128};
}
$(".widget-selected").html("<table></table><div id=\"pager\"></div>")
$(".widget-selected table").jqGrid({
	datatype: "json",
   	colNames:NameCol,
   	colModel:ModelCol,
   	rowNum:10,
   	rowList:[10,20,30],
    viewrecords: true,
    sortorder: "desc",
    pager: "#pager",
    caption:$("#NameGrid").val()
});
$(".widget-selected table").jqGrid('navGrid','#pager',
{edit:false,add:false,del:false},
{},
{},
{},
{multipleSearch:true, multipleGroup:true}
);
}

function SaveGrid(elem) {
champs = $("#gridChamp input:checked");
$.getJSON( $("#urlGrid").val(), RefreshGrid(champs));
}
