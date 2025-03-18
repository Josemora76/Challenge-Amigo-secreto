// Colocare un hola mundo a mi primera programacion en JS

alert ("Hola Mundo");

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  const nombreAmigo = document.getElementById('amigo').value;

  if (nombreAmigo.trim() === '') {
    alert('Por favor, inserte un nombre.');
    return;
  }

  amigos.push(nombreAmigo);
  document.getElementById('amigo').value = '';
  actualizarListaAmigos();
}

function actualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = amigos[i];
    listaAmigos.appendChild(nuevoAmigo);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos para sortear.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  document.getElementById('resultado').innerHTML = `<li>El amigo  secreto es: ${amigoSorteado}</li>`;
}



          