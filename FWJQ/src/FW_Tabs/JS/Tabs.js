var Tabs;
var Styles = new Array(7);
Styles["text"] = GetText;
Styles["code"] = GetCode

document.write("<link href='"+Directorie+"FWJQ/lib/JQ_System/ui/jquery-ui.css' rel='stylesheet' type='text/css'/><script src='"+Directorie+"FWJQ/lib/JQ_System/jquery-1.7.min.js'></script><script src='"+Directorie+"FWJQ/lib/JQ_System/jquery-ui-1.7.2.custom.min.js'></script>");

$(document).ready(
            function() {
                $("#"+tabs.conf.name).tabs();
            }
);

function FW_TABS(tabs) {
    Tabs = tabs;
    InitTabs();
    FillTabs();
}

function InitTabs() {
    document.write("<div id='tabs'>");
    document.write("<ul>");
    for(var i = 0; i < tabs.source.length; i++) {
        document.write("<li><a href='#"+tabs.source[i].content+"'><span>"+tabs.theme[i].name+"</span></a></li>");
    }
    document.write("</ul>");
}

function FillTabs() {
    for(var j = 0; j < tabs.source.length; j++) {
        document.write("<div id='"+tabs.source[j].content+"'><p>"+Styles[tabs.theme[j].style](j)+"</p></div>");
    }
    document.write("</div>");
}

function GetText(id) {
    return tabs.theme[id].display;
}

function GetCode(id) {
    return "<pre><code>"+tabs.theme[id].display+"</code></pre>";
}
