function gui_getDataElements(nomElement) {
		var tabinfos= new Array(20);
		var tabattributes = new Array(20);
		tabinfos = $(nomElement).listAttributes();
        var i = 0;
        for (attributes in tabinfos) {
        var attributename = tabinfos[attributes];
        tabattributes[i] = {"name":attributename, "value":$(nomElement).attr(attributename)}; 
        i++;
        }
     return tabattributes;
	}