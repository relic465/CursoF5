let i = ["hola", "mundo"]; 
let PK = ["charmander","bulbasaur","squirtle"];
let saludo = ["hola" , "buenos", "dias"];
let adios = document.querySelector("#bucle");
let memes = ["https://cdn.pixabay.com/photo/2024/02/16/06/18/cat-8576777_1280.jpg" , "/images/meme(1).jpg" , "/images/meme(2).jpg" , "/images/meme(4).jpg"];


function Coche(){
    PK.forEach(panda => {
        let parrafo = document.createElement("p");
        parrafo.textContent= panda;
        adios.appendChild(parrafo);
    });
}

function Tap(){
    memes.forEach(leon =>{
        let imagen = document.createElement("img");
        imagen.src= leon;
        adios.appendChild(imagen);
    });
}