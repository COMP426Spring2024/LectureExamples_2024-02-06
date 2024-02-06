window.addEventListener("load", 
			function() {
			    alert('In load handler');

			    var div_el = document.createElement('div');
			    var h1_el = document.createElement('h1');
			    var h1_text= document.createTextNode('Hello, World');

			    h1_el.appendChild(h1_text);
			    div_el.appendChild(h1_el);
      
			    var body_el = document.getElementsByTagName('body')[0];
			    body_el.appendChild(div_el);
			});
