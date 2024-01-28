// script.js
var imagenes = [
  "imgs/2.png",
  "imgs/1.png",
  "imgs/3.png",
  "imgs/4.png",
  // Agrega aquí las rutas a tus imágenes
];
var imagenActual = document.getElementById("imagen-actual");
var botonAnterior = document.getElementById("anterior");
var botonSiguiente = document.getElementById("siguiente");
var indiceActual = 0;

function actualizarImagen() {
  imagenActual.src = imagenes[indiceActual];
}

botonAnterior.addEventListener("click", function () {
  indiceActual--;
  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1;
  }
  actualizarImagen();
});

botonSiguiente.addEventListener("click", function () {
  indiceActual++;
  if (indiceActual >= imagenes.length) {
    indiceActual = 0;
  }
  actualizarImagen();
});

actualizarImagen();
