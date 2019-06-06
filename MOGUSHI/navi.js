(function( $, window, document, undefined ) {



	function addEvent( target, event, method ) {
		( typeof window.addEventListener === "function" )?
			target.addEventListener( event, method, false ): target.attachEvent( "on" + event, method );
	}



	var nav = {

		create: function( tg ) {
			var mn = document.createElement("div");
			mn.id = "menu";
			mn.innerHTML = "<span></span>";
			tg.parentNode.insertBefore(mn, tg);
			return mn;
		},

		open: function( tit, tg, mn ) {
			return function( e ) {
				if ( !!tg.className && tg.className.indexOf("show") > -1 ) {
					tit.className = tg.className = mn.className = "";
				} else {
					tit.className = tg.className = mn.className = "show";
				}
			}
		},

		execute: function( target, navigation ) {
			var logo = document.getElementById(target);
			var nav = document.getElementById(navigation);
			var menu = this.create(logo);
			addEvent( menu, "click", this.open( logo, nav, menu ) );
		}

	};


	$(function() {
		nav.execute("spmenuwarp", "navigation");
	});



})( jQuery, this, this.document );