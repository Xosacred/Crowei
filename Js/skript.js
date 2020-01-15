		window.onscroll = function() {myFunction()};

		function myFunction() {
			if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				document.getElementById("navm").style="top:0;";
			} else {
				document.getElementById("navm").style=" top:-140px;";
			}
		}
		
		function myFunction1() {
			document.getElementById("cc").classList.toggle("change");
			var x = document.getElementById("jnnav");
			var y = document.getElementById("jnav");
			
			if(y.style.height==="380px"){
				y.style.height="0px";
			} else { 
				y.style.height="380px";
			}
		}