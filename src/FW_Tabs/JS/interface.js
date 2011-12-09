var TabsName = "tabs";

var TabsOpt = [{ 
				collapsible: true,
				event: 'mouseover',
				panelTemplate: '<li></li>', 
				spinner: 'Chargement en cours...',
				tabTemplate: '<div><a href="#{href}"><span>#{label}</span></a></div>'
			  }]

var source = [
				{name:"onglet1", content:"#content1"},
				{name:"onglet2", content:"#content2"},
				{name:"onglet3", content:"#content3"}
			 ]

var theme = [
				{name:"onglet1", display:"Tab1", id:1, state:disable},
				{name:"onglet2", display:"Tab2", id:3, state:enable},
				{name:"onglet3", display:"Tab3", id:2, state:selected}
			]