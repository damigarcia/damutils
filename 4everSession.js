function refreshSessionDam(url) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

var intervalo = 0;
var totalReset = 0;
var timeout = 10000;
function resetTimeout(timeout){
	totalReset++;
	window.clearInterval(intervalo)
	timeout = (Math.floor((Math.random()*60000)+1) + 60000);
	intervalo = window.setInterval(function(){ resetTimeout(timeout)}, timeout);
	refreshSessionDam('__REEMPLAZAR URL ACAAAAAAAAAAA__'); //@todo: reemplazar URL
	console.log("intervalo: " + intervalo + ", timeout: " + timeout/1000 + "segs, ejecutados: " + totalReset);
}
intervalo = window.setInterval(function(){ resetTimeout(timeout)}, timeout);
console.log("intervalo: " + intervalo + ", timeout: " + timeout/1000 + "segs, ejecutados: " + totalReset);
