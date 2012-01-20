var Formation;
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

document.write("<link rel='stylesheet' href='"+Directorie+"FWJQ/src/FW_Formation/css/formation.css'/>");
document.write("<script src='"+Directorie+"FWJQ/lib/FW_System/Formation/formation.js'></script>");

function FW_FORMATION(formation) {
    Formation = formation;
    document.write("<div class='stylized container' id='"+Formation.conf.name+"'><h1>"+Formation.conf.name+"</h1></div>");
    var FW = $('#'+ Formation.conf.name);
    FW.formation();
    CreateForm(FW);
}

function CreateForm(FW) {
    document.getElementById(Formation.conf.name).style.width=Formation.conf.width + "px";
    document.getElementById(Formation.conf.name).style.height=Formation.conf.height + "px";
    for (var nb = 0; nb < Formation.source.length; nb++)
       Types[Formation.source[nb].type](FW, nb);
}

function AddInput(FW, nb){
    miniJSON = {type:"text",labelValue:Formation.theme[nb].display,validation:Formation.theme[nb].validation, required:Formation.theme[nb].required,defaultValue:Formation.theme[nb].defaultValue};
    FW.formation.addInput(miniJSON);
}

function AddRadios(FW, nb){
    miniJSON = {required:Formation.theme[nb].required, labelValue:Formation.theme[nb].display, legend:Formation.theme[nb].legend};
    FW.formation.addRadios(Formation.theme[nb].choices, miniJSON);
}

function AddCheckboxes(FW, nb){
    miniJSON = {required:Formation.theme[nb].required, labelValue:Formation.theme[nb].display, legend:Formation.theme[nb].legend};
    FW.formation.addCheckboxes(Formation.theme[nb].choices, miniJSON);
}

function AddCaptcha(FW, nb){
    miniJSON = {captchaQuestions:Formation.source[nb].captchaQuestions, required:Formation.theme[nb].required};
    FW.formation.addCaptcha(miniJSON);
}

function AddTextarea(FW, nb){
    miniJSON = {name:Formation.source[nb].name, type:Formation.source[nb].input, labelValue:Formation.theme[nb].display, required:Formation.theme[nb].required, cols:Formation.theme[nb].cols, row:Formation.theme[nb].row};
    FW.formation.addTextarea(miniJSON);
}

function AddSelect(FW, nb){
    miniJSON = {required:Formation.theme[nb].required, labelValue:Formation.theme[nb].display, legend:Formation.theme[nb].legend};
    FW.formation.addSelect(Formation.theme[nb].choices, miniJSON);
}

function AddButton(FW, nb){
    miniJSON = {value:Formation.theme[nb].name, type:Formation.theme[nb].type};
    FW.formation.addButton(miniJSON);
}
