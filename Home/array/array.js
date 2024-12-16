let i = ["hola", "mundo"]; 
let PK = ["charmander","bulbasaur","squirtle"];
console.log(PK[0]);
let saludo = ["hola" , "buenos", "dias"];
let adios = document.querySelector("#bucle");

function Coche(){
    PK.forEach(panda => {
        let parrafo = document.createElement("p");
        parrafo.textContent= panda;
        adios.appendChild(parrafo);
    })
}