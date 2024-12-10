let resultado = document.querySelector("#contador"); 
let num = 0;

function Sumar() {
    num = num + 1;
    resultado.innerHTML = num + " gatitos";
}

function Restar() {
    num = num - 1;
    resultado.innerHTML = num + " gatitos";
}

function Reset() {
    num = 0;
}