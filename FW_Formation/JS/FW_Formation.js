var miniJSON;
var Types = new Array(7);
Types["string"] = AddInput;
Types["int"] = AddInput;
Types["radios"] = AddRadios;
Types["checkbox"] = AddCheckboxes;
Types["captcha"] = AddCaptcha;
Types["textarea"] = AddTextarea;
Types["select"] = AddSelect;
Types["button"] = AddButton;

$(document).ready(function(){
  var FW = $('#'+ divName);
  FW.formation();
  CreateForm(FW);
});

function CreateForm(FW) {
    document.getElementById(divName).style.width=form[0].width + "px";
    document.getElementById(divName).style.height=form[0].height + "px";
    for (var nb = 0; nb < source.length; nb++)
       Types[source[nb].type](FW, nb);
}

function AddInput(FW, nb){
    miniJSON = {type:"text",labelValue:theme[nb].display,validation:theme[nb].validation, required:theme[nb].required,defaultValue:theme[nb].defaultValue};
    FW.formation.addInput(miniJSON);
}

function AddRadios(FW, nb){
    miniJSON = {required:theme[nb].required, labelValue:theme[nb].display, legend:theme[nb].legend};
    FW.formation.addRadios(theme[nb].choices, miniJSON);
}

function AddCheckboxes(FW, nb){
    miniJSON = {required:theme[nb].required, labelValue:theme[nb].display, legend:theme[nb].legend};
    FW.formation.addCheckboxes(theme[nb].choices, miniJSON);
}

function AddCaptcha(FW, nb){
    miniJSON = {captchaQuestions:source[nb].captchaQuestions, required:theme[nb].required};
    FW.formation.addCaptcha(miniJSON);
}

function AddTextarea(FW, nb){
    miniJSON = {name:source[nb].name, type:source[nb].input, labelValue:theme[nb].display, required:theme[nb].required, cols:theme[nb].cols, row:theme[nb].row};
    FW.formation.addTextarea(miniJSON);
}

function AddSelect(FW, nb){
    miniJSON = {required:theme[nb].required, labelValue:theme[nb].display, legend:theme[nb].legend};
    FW.formation.addSelect(theme[nb].choices, miniJSON);
}

function AddButton(FW, nb){
    miniJSON = {value:theme[nb].name, type:theme[nb].type};
    FW.formation.addButton(miniJSON);
}
