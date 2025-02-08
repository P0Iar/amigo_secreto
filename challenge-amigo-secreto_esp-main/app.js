// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Variables iniciales
let listaAmigos = [];
let amigosSorteados = [];

//Texto de indicaciones
function indicacionesDelJuego(){
    let titulo = document.querySelector('h2');
    titulo.innerHTML = 'Digite el nombre de sus amigos';
    titulo.classList.remove('error-message');
    titulo.classList.add('indication-message');
}

function mostrarMensaje(mensaje) {
    let titulo = document.querySelector('h2');
    titulo.innerHTML = mensaje;
    titulo.classList.remove('indication-message');
    titulo.classList.add('error-message');
}
/*funcion para agregar amigo, primero agrega a la nueva variable nombreAmigo el input del html "amigo"
luego valua si no hay nada escrito marca error, despues valua si hay nombre repetido, si lo está avisa error
si no lo está lo agrega mediante "push" a la "listaAmigos"  */
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if(nombreAmigo == ""){
        mostrarMensaje("Ingrese un nombre valido");
    } else if(listaAmigos.includes(nombreAmigo)){
        mostrarMensaje("El nombre ya está en la lista");
    } else {
        listaAmigos.push(nombreAmigo);
        document.getElementById('amigo').value = "";
        mostrarAmigos();
        indicacionesDelJuego(); // Restablecer el mensaje de título después de agregar un amigo
    }
}
//Esta función muestra enlitsada la "listaAmigos"
function mostrarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for(let i = 0; i < listaAmigos.length; i++){
        let elemento = document.createElement('li');
        elemento.textContent = listaAmigos[i];
        lista.appendChild(elemento);
    }
}
/*la funcion sortear amigos, primero revisa que haya nombres para sortear, despues revisa con "length" que
se hayan sorteado todos los nombres en la lista, despues hace el random y muestra el resultado, y agrega 
el nombre a la variable "amigosSorteados" para revisar posteriormente si ya fue sorteado ese nombre. */

function sortearAmigo(){
    if(listaAmigos.length == 0){
        mostrarMensaje("No hay amigos para sortear");
    } else if(amigosSorteados.length == listaAmigos.length){
        mostrarMensaje("Ya se sortearon todos los amigos");
    } else {
        let amigoSorteado;
        do {
            amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        } while (amigosSorteados.includes(amigoSorteado));
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
        amigosSorteados.push(amigoSorteado);
    }
}
//Resetea el juego e inicia el texto inicial.
function resetearJuego() {
    listaAmigos = [];
    amigosSorteados = [];
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('amigo').value = "";
    indicacionesDelJuego(); // Restablecer el mensaje de título
}


// Llamada inicial a la función para mostrar las instrucciones del juego
indicacionesDelJuego();
