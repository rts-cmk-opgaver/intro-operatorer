
function thinkLogic(){
    // Lad os hente lidt flere inputs denne gang
    let a = document.getElementById('opLogicInA').value;
    let b = document.getElementById('opLogicInB').value;
    let c = document.getElementById('opLogicInC').value;

    // Output skal deklareres inden det sættes
    let logicOut = [];
    let boolOut;

    // Logic out bliver et array over sammenligninger der bliver sat ind med logiske operatorer i if statement
    // Vi kan ændre på både de enkelte sammenligninger samt på selve de logiske operatorer i if statement
    // Herunder hvor mange af slagsen vi vil have - betingelserne er også mere overskueliger i det her format. 
    // Find selv på nogle nye betingelser og logiske operator kombinationer.

    logicOut[0] = a > b;
    logicOut[1] = a == b;
    logicOut[2] = c < (a - b);
    logicOut[3] = c != a;

    // Lad os gå amok og se rsultatet af diverse sammenligninger
    // husk at parantes er essentielt i forhold til at sikre prioriteringen af udregningen.
    if((logicOut[0].value || logicOut[1].value) && (logicOut[2].value || !logicOut[3].value)){
        
        boolOut = 'Det gik op - vi fik sandheden!';

    }
    else{
        boolOut = 'Tungen lige i munden og prøv igen - den gik ikke op';
    }

    // Sætter vores outputs i HTML hvor ID matcher
    document.getElementById('opLogicOut').textContent = '[ ' + logicOut + ' ]';
    document.getElementById('opBoolOut').textContent = boolOut;
}