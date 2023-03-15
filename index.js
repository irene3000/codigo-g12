
// const challenges = document.querySelector(".challenges");
// const btnNext = document.querySelector(".btn-next");
// const btnBack = document.querySelector(".btn-back");

// btnNext.onclick = function () {
//   challenges.scrollBy({
//     left: 50,
//   });
// };

// btnBack.onclick = function () {
//   challenges.scrollBy({
//     left: -50,
//   });
// };

// Esta es formar en la que JS accede a los elementos

// es el div donde estan todos nuestros cards
// recordemos que el div con la clase challenge tiene el scroll x (horizontal)



// const challenges = document.querySelector(".challenges");

// // obtener los botones de next y back
// const btnNext = document.querySelector(".btn-next");
// const btnBack = document.querySelector(".btn-back");

// btnNext.onclick = function () {
//   // Esto quiere decir que cuando hagamos un click en el boton con clase .btn-bnext 
//   // hara lo siguiente

//   // challenges.offsetWidth => nos da el ancho del div challenges
//   challenges.scrollBy({
//     left: challenges.offsetWidth / 4,
//   });
// };

// btnBack.onclick = function () {
//   challenges.scrollBy({
//     left: (challenges.offsetWidth / 4) * -1,
//   });
// };

// Esta es formar en la que JS accede a los elementos

// es el div donde estan todos nuestros cards
// recordemos que el div con la clase challenge tiene el scroll x (horizontal)
const jsConfetti = new JSConfetti()
jsConfetti.addConfetti({
  emojis: ["🇵🇪","#","🎶", "✅", "⭐️"],
  confettiNumber: 100,
});

const challenges = document.querySelector(".challenges");

// obtener los botones de next y back
const btnNext = document.querySelector(".btn-next");
const btnBack = document.querySelector(".btn-back");

btnNext.onclick = function () {
  // Esto quiere decir que cuando hagamos un click en el boton con clase .btn-bnext
  // hara lo siguiente
  let slider = challenges.offsetWidth / 4;

  if (challenges.offsetWidth <= 480) {
    slider = challenges.offsetWidth;
  }

  // challenges.offsetWidth => nos da el ancho del div challenges
  challenges.scrollBy({
    left: slider,
  });
};

btnBack.onclick = function () {
  let slider = (challenges.offsetWidth / 4) * -1;

  if (challenges.offsetWidth <= 480) {
    slider = -challenges.offsetWidth;
  }

  challenges.scrollBy({
    left: slider,
  });
};

let miImage = document.querySelector(".img-profile");
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/img001.jpg') {
      miImage.setAttribute('src','images/ñ.jpg');
    } else {
      miImage.setAttribute('src', 'images/img001.jpg');
    }
}
//Saludo de bienvenida al usuario
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( '.saludo-bienvenida');

function estableceNombreUsuario() {
  let miNombre = prompt('Por favor, ingresa tu nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Bienvenid@ a mi pagina, ' + miNombre;
  }
}

if (!localStorage.getItem('nombre')) {
  estableceNombreUsuario();
}
else {
  let nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo.textContent = 'Bienvenid@ a mi pagina , ' + nombreAlmacenado;
}

miBoton.onclick = function() {
  estableceNombreUsuario();
}
