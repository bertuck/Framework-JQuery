var Elem = 0;
function gui_RefreshForm(elem) {
Elem = elem;
var tab = gui_getDataElements(elem);
$("#Name label").remove();
$("#Value label").remove();
// var Tab = retour fonction
$("#TitleProperties").html("<b>Properties : "+ elem + "</b></br></br>");
	for (x = 0; tab[x]; x++) {
		var formContent = '<label><input class="validate[required,custom[onlyLetter],length[0,100]] text-input" value="'+tab[x].name+'" type="text" name="text" id="Text1" /></label>';
		$("#Name").append(formContent);
		var formContent = '<label><input class="validate[required,custom[onlyLetter],length[0,100]] text-input" value="'+tab[x].value+'" type="text" name="text" id="Text1" /></label>';
		$("#Value").append(formContent);
	}
}

function CreateProject(tab) {
$("#Name label").remove();
$("#Value label").remove();
// var Tab = retour fonction
$("#TitleProperties").html("<b>Properties : Project </b></br></br>");
	for (x = 0; tab[x]; x++) {
		var formContent = '<label><input class="validate[required,custom[onlyLetter],length[0,100]] text-input" value="'+tab[x].name+'" type="text" name="text" id="Text1" /></label>';
		$("#Name").append(formContent);
		var formContent = '<label><input class="validate[required,custom[onlyLetter],length[0,100]] text-input" value="'+tab[x].value+'" type="text" name="text" id="Text1" /></label>';
		$("#Value").append(formContent);
	}
}

function gui_saveForm(elem) {
	alert("saveForm");
}
