
function assignMath(){
    // Hent data fra input
    let a = document.getElementById('opAssignInA').value;
    let b = document.getElementById('opAssignInB').value;

    // Deklarer output som array og tildeler array positionerne vores tal fra input a
    // Splitter input a op i et array som sættes '=' output
    let assignOut = [];
    assignOut = a.split(',');

    let n = 0;

    // Handling : brug forskellige operatorer til at tilføje nye værdier til arrayet. Brug evt. Genbrug evt. array værdierne
    // Eksemplet tager værdien for array positionen og først lægger b til
    // Derefter ganges den nye værdi med sig selv og resultatet tildeles output

    // Prøv evt at nøjes med en enkelt manipulation til at starte med og se hvordan det virker.
    for(n; n < assignOut.length; n++){
        assignOut[n] += b;
        assignOut[n] *= assignOut[n];
    }

    // Sæt output i index HTML
    document.getElementById('opAssignOut').textContent = '[ ' + assignOut + ' ]';

    

}