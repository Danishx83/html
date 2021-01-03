import {textLine1, textLine2} from './module1.js'; //imports

function init(){
	pi1 = document.getElementById("idP1");
	pi2 = document.getElementById("idP2");
	pi3 = document.getElementById("idP3");
	pi1.innerHTML = "It is Javascript inserted text.";
	pi2.innerHTML = "Added a JS module.";
	pi3.innerHTML = textLine1;
}
