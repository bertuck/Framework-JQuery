var Dialog;

document.write("<script src='"+Directorie+"FWJQ/lib/JQ_System/jquery-1.7.min.js'></script><script src='"+Directorie+"FWJQ/lib/JQ_System/ui/jquery.bgiframe-2.1.2.js'></script><script src='"+Directorie+"FWJQ/lib/JQ_System/ui/jquery.ui.core.js'></script><script src='"+Directorie+"FWJQ/lib/JQ_System/ui/jquery.ui.widget.js'></script><script src='"+Directorie+"FWJQ/lib/JQ_System/ui/jquery.ui.mouse.js'></script><script src='"+Directorie+"FWJQ/lib/JQ_System/ui/jquery.ui.draggable.js'></script><script src='"+Directorie+"FWJQ/lib/JQ_System/ui/jquery.ui.position.js'></script><script src='"+Directorie+"FWJQ/lib/JQ_System/ui/jquery.ui.resizable.js'></script><script src='"+Directorie+"FWJQ/lib/JQ_System/ui/jquery.ui.dialog.js'></script>");

function includeCSS(fileName){
    document.write("<link rel='stylesheet' href='"+fileName+"'>");
}

function FW_DIALOG(dialog) {
    includeCSS(Directorie+"FWJQ/src/FW_Dialog/css/jquery.ui.dialog.css");
    includeCSS(Directorie+"FWJQ/src/FW_Dialog/css/jquery.ui.theme.css");
    includeCSS(Directorie+"FWJQ/src/FW_Dialog/css/jquery.ui.base.css");
    Dialog = dialog;
    document.write("<div id='"+ Dialog.conf.name + "' title='" + Dialog.conf.title + "'>");
    document.write("<p>"+ Dialog.conf.display +"</p>");
    document.write("</div>");
    $('#'+ Dialog.conf.name).dialog();
}
