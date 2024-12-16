let resultado = document.querySelector("#contador"); 
let num = 0;

function Sumar() {
    num = num + 1;
    resultado.innerHTML = num + " likes";
}

function Restar() {
    num = num - 1;
    resultado.innerHTML = num + " likes";
}

function Reset() {
    num = 0;
    resultado.innerHTML = num + " likes";
}