var TreeView;
var body;

function FW_TREEVIEW(treeview) {
    TreeView = treeview;
    body = "<ul id='" + TreeView.conf.name + "' class='filetree treeview-famfamfam'>\n";
    for (var i = 0; i < TreeView.source.length; i++) {
        DoTree(TreeView.source[i]);
    }
    document.write(body);
}

function InitTreeView() {
    $("#browser").treeview({toggle: function()
        {console.log("%s was toggled.", $(this).find(">span").text());
     }
  });
}

function AddTree() {
    $("#add").click(function() {
        var branches = $("<li><span class='folder'>New Sublist</span><ul>" +
                           "<li><span class='file'>Item1</span></li>" +
                         "<li><span class='file'>Item2</span></li></ul></li>").appendTo("#browser");
        $("#browser").treeview({
            add: branches
        });
    });
}

function DoThemeFolder(tree)
{
    var found = 0;
    for (var i = 0; i < TreeView.theme.length; i++)
        if (TreeView.theme[i].name == tree.name) {
            found = 1;
            if (TreeView.theme[i].state == "opened")
                body += "<li><span class='";
            else
                body += "<li class='closed'><span class='";
    }
    if (found == 0)
       body += "<li><span class='";
}

function DoItem(tree) {
    for (var i = 0; i < TreeView.theme.length; i++) {
        if (TreeView.theme[i].items !== undefined)
            if (TreeView.theme[i].name == tree.name) {
                body += "<ul>\n";
                for (var j = 0; j < theme[i].items.length; j++)
                    body += "<li><span class='file'>" + TreeView.theme[i].items[j].name + "</span></li>\n";
                body += "</ul>\n";
            }
    };
}

function DoTree(tree) {
    DoThemeFolder(tree);
    body += tree.type +"'>"+ tree.name + "</span>";
    if (tree.subfolder === undefined) {
        DoItem(tree);
        body += "</li>\n";
    }
    else if (tree.subfolder !== undefined) {
        for (var i = 0; i < tree.subfolder.length; i++) {
            body += "<ul>\n";
            DoTree(tree.subfolder[i], 1);
            DoItem(tree);
            body += "</ul>\n";
        }
    }
}

$(document).ready(function(){
    $("#browser").treeview({
        toggle: function() {
            console.log("%s was toggled.", $(this).find(">span").text());
        }
    });

    $("#add").click(function() {
        var branches = $("<li><span class='folder'>New Sublist</span><ul>" +
                           "<li><span class='file'>Item1</span></li>" +
                         "<li><span class='file'>Item2</span></li></ul></li>").appendTo("#browser");
        $("#browser").treeview({
            add: branches
        });
    });
});
