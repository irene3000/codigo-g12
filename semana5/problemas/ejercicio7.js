let factorial=1;
let i;
function calcularFactorial(n){

    for( i=n;i>0 ;i--){
        factorial = factorial*i
    }

    return factorial
    
}

console.log(calcularFactorial(5))