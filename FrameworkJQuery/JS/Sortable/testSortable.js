window.onload = function()
{
    document.getElementById("quit").onmousedown = function()
    {
        window.close();
        Qt.quit();
    };
    toggleElement();
};

$(function() {
                $( "#sortable" ).sortable();
                $( "#sortable" ).disableSelection();
        });
