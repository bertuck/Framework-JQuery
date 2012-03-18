
	$(document).ready(function () {
                      
                      remplisElements(MyElements);             
        		
		// OUTER/PAGE LAYOUT

		pageLayout = $("body").layout({ // DO NOT use "var pageLayout" here

			west__size:			.15 

		,	east__size:			.20 

		,	south__initClosed:	true

		,	north__initClosed:	false

		,	west__onresize:		$.layout.callbacks.resizePaneAccordions // west accordion a child of pane

		,	east__onresize:		$.layout.callbacks.resizePaneAccordions // east accordion nested inside a tab-panel

		}); 



		// TABS IN CENTER-PANE

		// create tabs before wrapper-layout so elems are correct size before creating layout

		pageLayout.panes.center.tabs({

			show:				$.layout.callbacks.resizeTabLayout // tab2-accordion is wrapped in a layout

		});



		// WRAPPER-LAYOUT FOR TABS/TAB-PANELS, INSIDE OUTER-CENTER PANE

		pageLayout.panes.center.layout({

			closable:			false

		,	resizable:			false

		,	spacing_open:		0

		,	center__onresize:	$.layout.callbacks.resizeTabLayout // tabs/panels are wrapped with an inner-layout

		});



		// LAYOUT TO CONTAIN HEADER+ACCORDION, INSIDE A TAB, INSIDE OUTER-CENTER PANE

		$("#tab-panel-center-2").layout({

			center__onresize:	$.layout.callbacks.resizePaneAccordions // accordion is inside center-pane

		,	resizeWithWindow:	false	// resizing is handled by callbacks to ensure the correct resizing sequence

		,	triggerEventsOnLoad: true	// force resize of accordion when layout inits - ie, becomes visible 1st time

		});



		// TABS INSIDE EAST-PANE

		pageLayout.panes.east.tabs({

			show:				$.layout.callbacks.resizePaneAccordions // resize tab2-accordion when tab is activated

		});

		pageLayout.sizeContent("east"); // resize pane-content-elements after creating east-tabs



		// INIT ALL ACCORDIONS - EVEN THOSE NOT VISIBLE

		

		$("#accordion-center").accordion({ fillSpace: true });

		$("#accordion-east").accordion({ fillSpace: true });





		// THEME SWITCHER

		addThemeSwitcher('#basic-modal-content',{ top: '150px', right: '170px' });

		// if a new theme is applied, it could change the height of some content,

		// so call resizeAll to 'correct' any header/footer heights affected

		// NOTE: this is only necessary because we are changing CSS *AFTER LOADING* using themeSwitcher

		setTimeout( pageLayout.resizeAll, 2000 ); /* allow time for browser to re-render with new theme */

	});