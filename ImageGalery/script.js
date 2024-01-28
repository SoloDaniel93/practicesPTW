// script.js
var imagenes = [
  "imgs/2.png",
  "imgs/1.png",
  "imgs/3.png",
  "imgs/4.png",
  // Agrega aquí las rutas a tus imágenes
];
var galeria = document.getElementById("galeria");
imagenes.forEach(function (imagen) {
  var elementoImagen = document.createElement("img");
  elementoImagen.src = imagen;
  galeria.appendChild(elementoImagen);
});
