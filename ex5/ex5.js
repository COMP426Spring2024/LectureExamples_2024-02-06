window.addEventListener('load', function () {
    let first_time = true;

    document.querySelector('#d1').addEventListener('keypress', function (e) {
        if (first_time) {
            this.innerText = "";
            first_time = false;
        }

        this.textContent = this.textContent + String.fromCharCode(e.which);

        document.querySelector('#type_val').innerHTML = e.type;
        document.querySelector('#charcode_val').innerHTML = e.charCode;
        document.querySelector('#keycode_val').innerHTML = e.keyCode;
        document.querySelector('#timestamp_val').innerHTML = e.timeStamp;
        document.querySelector('#which_val').innerHTML = e.which;
        document.querySelector('#shiftkey_val').innerHTML = e.shiftKey ? "true" : "false";
        document.querySelector('#ctrlkey_val').innerHTML = e.ctrlKey ? "true" : "false";
        document.querySelector('#altkey_val').innerHTML = e.altKey ? "true" : "false";
        document.querySelector('#metakey_val').innerHTML = e.metaKey ? "true" : "false";
    });

    document.querySelector('#d1').addEventListener('keydown', function (e) {
        if (e.which == 8) {
            this.textContent = this.textContent.slice(0, -1);
        }
    });
});
