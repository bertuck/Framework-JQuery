var body;

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

CreateTree();

function CreateTree() {
    body = "<ul id='" + form[0].name + "' class='filetree treeview-famfamfam'>\n";
    for (var i = 0; i < source.length; i++) {
        DoTree(source[i]);
    }
    document.write(body);
}

function DoTree(tree) {
    body += "<li><span class='";
    body += tree.type +"'>"+ tree.name + "</span>";
    if (tree.sub === undefined) {
        body += "</li>\n";
    }
    else {
        for (var i = 0; i < tree.sub.length; i++) {
            body += "<ul>\n";
            DoTree(tree.sub[i]);
            body += "</ul>\n";
        }
    }
}

