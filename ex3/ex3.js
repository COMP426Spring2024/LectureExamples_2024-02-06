window.addEventListener('load', function () {

    document.querySelector('#d1').addEventListener('click', function(e) {
	    let random_color_spec = "rgb(" + Math.floor(Math.random() * 256) +
	                            ", " + Math.floor(Math.random() * 256) +
	                            ", " + Math.floor(Math.random() * 256) + ")";


	this.style.backgroundColor = random_color_spec;

	document.querySelector('#type_val').innerHTML = e.type;
	document.querySelector('#clientx_val').innerHTML = e.clientX;
	document.querySelector('#clienty_val').innerHTML = e.clientY;
	document.querySelector('#screenx_val').innerHTML = e.screenX;
	document.querySelector('#screeny_val').innerHTML = e.screenY;
	document.querySelector('#timestamp_val').innerHTML = e.timeStamp;
	document.querySelector('#button_val').innerHTML = e.button;
	document.querySelector('#which_val').innerHTML = e.which;
	document.querySelector('#shiftkey_val').innerHTML = e.shiftKey ? "true" : "false";
	document.querySelector('#ctrlkey_val').innerHTML = e.ctrlKey ? "true" : "false";
	document.querySelector('#altkey_val').innerHTML = e.altKey ? "true" : "false";
	document.querySelector('#metakey_val').innerHTML = e.metaKey ? "true" : "false";
    });
});
