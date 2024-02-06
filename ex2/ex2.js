window.addEventListener('load', function () {
    
    let event_handler = function() {
	    // Create a random color using "rgb()" notation
	
    	let random_color_spec = "rgb(" + Math.floor(Math.random() * 256) +
	                              ", " + Math.floor(Math.random() * 256) +
	                              ", " + Math.floor(Math.random() * 256) + ")";
	
	    // Set background color of element where event occurs to new random color

	    this.style.backgroundColor = random_color_spec;
    };
    

    document.querySelector('#d1').addEventListener('click', event_handler);
    document.querySelector('#d2').addEventListener('dblclick', event_handler);
});
