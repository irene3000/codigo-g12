const form = document.querySelector("form");
const pokemonName = document.querySelector("#name");
const container = document.querySelector("#container");
const button = document.querySelector("button")

const pokemons=[];

async function getPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    
    renderPokemons(data.results);
  }
function renderPokemons(pokemons){
    pokemons.forEach((pokemon)=>{
        container.innerHTML =`
        <div>
        <img src="${pokemon.sprite.front_default}"/>
        <h5>${pokemon.name}</h5>
        </div>
    `;
    })
}

//   form.onsubmit=function(event){
//     event.preventDefault();
//     pokemons.push({
//         name: pokemonName.value,
//         // image: image.value,
//       });
    
//     input.value="";

//     renderPokemons();
// }
button.onclick=function(event){
    getPokemons();
    renderPokemons();
}








