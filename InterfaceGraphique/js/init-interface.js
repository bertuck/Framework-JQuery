
	$(document).ready(function () {
		var newTabCounter = 1;
         
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



		// INIT ALL ACCORDIONS - EVEN THOSE NOT VISIBLE

		$("#accordion-east").accordion({ fillSpace: true });

		// THEME SWITCHER

		addThemeSwitcher('#basic-modal-content',{ top: '185px', right: '90px' });

		// if a new theme is applied, it could change the height of some content,

		// so call resizeAll to 'correct' any header/footer heights affected

		// NOTE: this is only necessary because we are changing CSS *AFTER LOADING* using themeSwitcher

		setTimeout( pageLayout.resizeAll, 2000 ); /* allow time for browser to re-render with new theme */

	});