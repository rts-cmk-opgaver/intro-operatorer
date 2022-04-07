
// Nødvendigt med en funktion der genere et <script> tag i HTML med URL som parameter for at kunne importere JS til JS. 

function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}

loadScript('/js-operators/operatorArithmetic.js');
loadScript('/js-operators/operatorCompare.js');
loadScript('/js-operators/operatorLogic.js');
loadScript('/js-operators/operatorAssign.js');
loadScript('/js-simplecalc/simplecalc.js');
