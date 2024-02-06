window.addEventListener("load", 
			function() {
			    alert('In load handler');

			    var body_el = document.getElementsByTagName('body')[0];
			    body_el.innerHTML = "<div><h1>Hello, World</h1></div>";
			});
