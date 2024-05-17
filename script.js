function promptForNumber() {
    let number 
    while (true) {
        let input = prompt("Introduce un número");
        number = parseInt(input)

        if (!isNaN(number) && number >= 0) {
            break;
        } else {
            alert("Ingrese un número entero.");
        }

        }
   
    let factorial = calculateFactorial(number);
    document.getElementById('result').innerHTML = `El factorial de ${number} es ${factorial}.`;  
    
    }

function calculateFactorial(n) {
    if (n === 0) return 1; // Caso especial para 0
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

    
