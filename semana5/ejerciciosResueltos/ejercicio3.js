function numeroRandom(min,max) {
    // Generar un número al azar entre 15 y 34 y devolverlo
  const n=Math.floor(Math.random()*(max-min+1)+min)
 return n
  }
  console.log(numeroRandom(15,34))