// particulas.js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Ajusta el tamaño del canvas para que ocupe toda la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Crea un array para almacenar las partículas
var particulas = [];

// Define la clase Particula
function Particula(x, y) {
  this.x = x;
  this.y = y;
  this.velocidadX = Math.random() * 2 - 1;
  this.velocidadY = Math.random() * 5 - 1;

  this.actualizar = function () {
    this.x += this.velocidadX;
    this.y += this.velocidadY;

    // Revisa si la partícula ha salido del canvas
    if (this.x < 0 || this.x > canvas.width) this.velocidadX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.velocidadY *= -1;
  };

  this.dibujar = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
    ctx.fill();
  };
}

// Crea 100 partículas en posiciones aleatorias
for (var i = 0; i < 500; i++) {
  particulas.push(
    new Particula(Math.random() * canvas.width, Math.random() * canvas.height)
  );
}

// Actualiza y dibuja todas las partículas
function actualizarParticulas() {
  // Limpia el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Actualiza y dibuja cada partícula
  for (var i = 0; i < particulas.length; i++) {
    particulas[i].actualizar();
    particulas[i].dibujar();
  }

  // Llama a actualizarParticulas de nuevo después de 100 milisegundos
  setTimeout(actualizarParticulas, 30);
}

// Inicia la animación
actualizarParticulas();
