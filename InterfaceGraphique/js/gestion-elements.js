function gui_getDataElements(elem) {
		
		//var tabinfos= new Array(20);
		var tabattributes = new Array(20);
		
		var tabinfos = [
			{"name":"width", "value":"30%"},
			{"name":"height", "value":"30%"},
			{"name":"float", "value":"left"},
			{"backgroud-color":"", "value":"red"},
			{"name":"border", "value":"1px dotted black"}
			];
        for (var i = 0; i < tabinfos[i] != null; i++) {
        elemAttr = tabinfos[i];
        tabattributes[i] = {"name":elemAttr.name, "value":$(elem).attr(elemAttr.name)}; 
        }
     return tabattributes;
	}