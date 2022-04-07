
    function mathItUp(){
        // henter værdierne fra input felterne ved hjælp af id
        // Værd opmærksom på at input konverteres til integers da de ellers ville blive gemt som strings 
        // - mere om dette i datatyper
        let a = parseInt(document.getElementById("opArithInA").value);
        let b = parseInt(document.getElementById("opArithInB").value);

        let mathOut;
    
        // det er herinde du leger med de matematiske operatorer brug variablerne a og b i stedet for tal
        // værdierne gemmes i variablen 'mathOut'
    
        mathOut = a - b;
    
        // sørger for at skrive output ind i index ved at ændre værdi på h2 med id = 'opArithOut'
        // husk at den bugger når man prøver at klistre number og string sammen - så vi konvertere mathOut til string
        document.getElementById('opArithOut').textContent = mathOut;
    }

    

    

   
    



