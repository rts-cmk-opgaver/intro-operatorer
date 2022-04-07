function theTruth(){

    // Henter input værdierne fra vore operator compare formular
    let a = document.getElementById("opCompInA").value;
    let b = document.getElementById("opCompInB").value;

    //deklarere vores output variabel inden den får en værdi i if/else statement. Husk sekventielt!
    let compOut;

    // Det er her vi skal lege.. hvilke sammenlignerne kan du komme op med - input kan være strings OG integers
    // Ret sammenligningen i parantesen til nogle forskellige - udvid gerne og leg også gerne vider emed funktionen.
    if(a == b){
        compOut = '"This is the truth!"'
    }
    else{
        compOut = '"The false is ever the null of the logics"'
    }

    // Skriver vores output ude på index i h1'eren med id 'opCompOut'
    document.getElementById("opCompOut").textContent = compOut;


}