const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');

const searchPokemon = event =>{
    event.preventDefault();
    const { value } =  event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then(data=>data.json())
    .then(response=>renderPokemonData(response))
}

const renderPokemonData= data =>{
    const sprite =data.sprites.other.home.front_default;
    
    pokeName.textContent=data.name;
    pokeImg.setAttribute('src',sprite);
}

searchPokemon();
 