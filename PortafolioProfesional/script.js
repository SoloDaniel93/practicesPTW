// script.js
document.addEventListener("DOMContentLoaded", function () {
  var proyectos = [
    "Sistema de partículas",
    "Galería de imágenes",
    "Reproductor de música",
    // Agrega aquí tus proyectos
  ];
  var listaProyectos = document.getElementById("lista-proyectos");
  proyectos.forEach(function (proyecto) {
    var elementoLista = document.createElement("li");
    elementoLista.textContent = proyecto;
    listaProyectos.appendChild(elementoLista);
  });
});
