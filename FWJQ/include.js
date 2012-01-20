/* Dir = le chemin ou se situe repetoire FWJQ */
var Directorie;

function loadFrameworkJQuery(dir) {
    Directorie = dir;
    document.write("<script src='"+dir+"FWJQ/src/FW_Dialog/JS/Dialog.js' type='text/javascript' charset='utf-8'></script>");
	document.write("<script src='"+dir+"FWJQ/src/FW_Tabs/JS/Tabs.js' type='text/javascript' charset='utf-8'></script>");
    document.write("<script src='"+dir+"FWJQ/src/FW_Formation/JS/Formation.js' type='text/javascript' charset='utf-8'></script>");
    document.write("<script src='"+dir+"FWJQ/src/FW_Grid/JS/Grid.js' type='text/javascript' charset='utf-8'></script>"); 
	document.write("<script src='"+dir+"FWJQ/src/FW_TreeView/JS/TreeView.js' type='text/javascript' charset='utf-8'></script>"); 
}
