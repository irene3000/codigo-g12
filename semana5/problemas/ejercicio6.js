function ingresarNumero(n){
    if(n%2===0){
        return 2*n
    }else if(n%2===1){
        return 3*n
    }
}
console.log(ingresarNumero(25))