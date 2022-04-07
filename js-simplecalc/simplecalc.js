
// DETTE ER ET EKSEMPEL PÅ EN LØSNING FOR LOMMEREGNER OPGAVEN 

function calc(op){

    //henter input fra index.html og konvertere til integer
    const a = parseInt(document.querySelector('#simpleCalcInA').value);
    const b = parseInt(document.querySelector('#simpleCalcInB').value);
    alert(a + ' ' + b);
    let result;

    //validering på om integer
    if(Number.isInteger(a) && Number.isInteger(b)){

        //hvis valideringen er sand valider på argumentet iht operator
        if( op == '+'){
            result = a + b;
        }
        else if(op == '-'){
            result = a - b;
        }
        else if(op == '*'){
            result = a * b;
        }
        else if(op == '/'){
            result = a / b;
        }
        else{
            result = 'Fejl i operator';
        }
    }
    else{
        result = 'Fejl i validering';
    }

    //sætter output feltet i index.html til result
    document.querySelector('#simpleCalcOut').textContent = result;
}


