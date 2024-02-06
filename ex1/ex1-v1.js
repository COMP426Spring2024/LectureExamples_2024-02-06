let func_obj = function() {
    alert('In load handler');

    let body_el = document.getElementsByTagName('body')[0];
    let div_el = document.createElement('div');
    body_el.appendChild(div_el);
    let h1_el = document.createElement('h1');
    div_el.appendChild(h1_el);
    let h1_text= document.createTextNode('Hello, World');
    h1_el.appendChild(h1_text);   
};

let load_handler = {
  handleEvent: func_obj
};

window.addEventListener("load", load_handler);
