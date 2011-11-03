window.onload = function()
{
    document.getElementById("quit").onmousedown = function()
    {
        window.close();
    };
    toggleElement();
};

$(function() {
                $( "#sortable" ).sortable();
                $( "#sortable" ).disableSelection();
        });
