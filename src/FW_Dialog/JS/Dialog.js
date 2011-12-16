var Dialog;

function FW_DIALOG(dialog) {
    Dialog = dialog;
    document.write("<div id='"+ Dialog.conf.name + "' title='" + Dialog.conf.title + "'>");
    document.write("<p>"+ Dialog.conf.display +"</p>");
    document.write("</div>");
    $('#'+ Dialog.conf.name).dialog();
}
