  $(document).ready(function() 
  {
  var $mytabs = $("#"+TabsName).tabs(TabsOpt);
   for (var nb1 = 0; nb1 < source.length; ++nb1)
    	for (var nb2 = 0; nb2 < theme.length; ++nb2)
            if (source[nb1].name == theme[nb2].name)
            {
				mytabs.tabs("add", source[nb1].content, source[nb1].name);				
 			 	$(source[nb1].content).css("display","block");
 			}
 });
