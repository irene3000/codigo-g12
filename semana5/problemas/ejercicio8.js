let text =""
let arrayText=[]
let arrayInvertido=[]
function palindromo(text){
    text =text.toLowerCase().replace(/\s+/g, '') 
    arrayText= text.split("")
    arrayInvertido=arrayText.reverse()
    textoInvertido=arrayInvertido.join("")
    if(textoInvertido==text){
         console.log ("es palindromo")
    }else{
         console.log("no es palindromo")
    }
 
}
palindromo("Anita lava la tina")
palindromo("Teclado")
