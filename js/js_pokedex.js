const btnSearch = document.getElementById("btnSearch");
const inpPokeName = document.getElementById("inpPokeName");
const namePokemon = document.getElementById("namePokemon");

const fetchPokemon = () => {
    let pokeName = inpPokeName.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/pokemon-sad.gif")
            namePokemon.textContent  = "No se encontro este pokemon"
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

btnSearch.addEventListener('click',(e)=>{
    if(inpPokeName.value != ""){
        fetchPokemon();
    }
    else {
        alert("Porfavor ingrese un nombre o un numero")
    }
})