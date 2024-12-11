let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let tiempoRestante = 60;
let tiempo;

function iniciarTiempo() {
    tiempo = setInterval(() => {
        tiempoRestante -= 1;
        document.getElementById("temporisador").innerText = "Tiempo restante: " + tiempoRestante + " segundos";

        if (tiempoRestante === 0) {
            clearInterval(tiempo);
            document.getElementById("resultado").innerText = "¡Se acabó el tiempo!";
            document.getElementById("resetButton").style.display = "block";
            bloquearEntrada(); // Bloquear la entrada si el tiempo acaba
        }
    }, 1000);
}

function adivinar() {
    // Verificar si la entrada está bloqueada
    if (document.getElementById("InputAdivinando").disabled) {
        return; // No hacer nada si la entrada está deshabilitada
    }

    let intento = parseInt(document.getElementById("InputAdivinando").value);
    let mensaje = "";

    if (isNaN(intento)) {
        mensaje = "Introduce un número válido.";
    } else {
        intentos++;

        if (intento < numeroSecreto) {
            mensaje = "El número es mayor.";
        } else if (intento > numeroSecreto) {
            mensaje = "El número es menor.";
        } else if (intento === numeroSecreto) {
            mensaje = "¡Felicidades! Has adivinado el número en " + intentos + " intentos.";
            clearInterval(tiempo);
            document.getElementById("resetButton").style.display = "block";
            bloquearEntrada(); // Bloquear la entrada si acierta
        }

        if (intentos === 5 && intento !== numeroSecreto) {
            mensaje = "¡Has alcanzado el máximo de intentos!";
            document.getElementById("resetButton").style.display = "block";
            bloquearEntrada(); // Bloquear la entrada después de 5 intentos
        }
    }

    // Solo actualizar el texto del resultado si no se ha alcanzado el límite
    document.getElementById("resultado").innerText = mensaje;
}

// Bloquear entrada después de 5 intentos o si acierta
function bloquearEntrada() {
    document.getElementById("InputAdivinando").disabled = true;
    clearInterval(tiempo);
}

// Desbloquear entrada al reiniciar el juego
function desbloquearEntrada() {
    document.getElementById("InputAdivinando").disabled = false;
}

function Reset() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    tiempoRestante = 60;
    document.getElementById("InputAdivinando").value = "";
    document.getElementById("resultado").innerText = "";  
    document.getElementById("temporisador").innerText = "Tiempo restante: " + tiempoRestante + " segundos";
    document.getElementById("resetButton").style.display = "none";
    desbloquearEntrada();
    iniciarTiempo();
}

document.getElementById("InputAdivinando").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        adivinar(); // Llama a la función adivinar al presionar Enter
    }
});

window.onload = iniciarTiempo;
