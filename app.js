let amigos = [];
let inputNombre, listaAmigos, resultado;

document.addEventListener("DOMContentLoaded", function() {
    inputNombre = document.getElementById("amigo");
    listaAmigos = document.getElementById("listaAmigos");
    resultado = document.getElementById("resultado");
});

function agregarAmigo() {
    let nombre = inputNombre.value.trim();
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombre);
        actualizarListaAmigos();
        inputNombre.value = "";
    }
}

function actualizarListaAmigos() {
    listaAmigos.innerHTML = "";
    
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}
