const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const numParticles = 200;
const maxDistance = 100;
const mouseRadius = 50;

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) {
      this.speedX *= -1;
    }

    if (this.y < 0 || this.y > canvas.height) {
      this.speedY *= -1;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < numParticles; i++) {
    particles.push(
      new Particle(Math.random() * canvas.width, Math.random() * canvas.height)
    );
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const distance = Math.sqrt(
        Math.pow(particles[i].x - particles[j].x, 2) +
          Math.pow(particles[i].y - particles[j].y, 2)
      );
      if (distance < maxDistance) {
        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function updateParticlesPosition(event) {
  particles.forEach((particle) => {
    const dx = particle.x - event.clientX;
    const dy = particle.y - event.clientY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouseRadius) {
      const angle = Math.atan2(dy, dx);
      const velocity = 5;
      particle.x -= Math.cos(angle) * velocity;
      particle.y -= Math.sin(angle) * velocity;
    }
  });
}

init();
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles.length = 0;
  init();
});

window.addEventListener("mousemove", updateParticlesPosition);
