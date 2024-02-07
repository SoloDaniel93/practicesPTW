const images = ["imgs/2.png", "imgs/1.png", "imgs/3.png", "imgs/4.png"]; // Array with image URLs
let currentIndex = 0;
const galleryImg = document.getElementById("galleryImg");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to show current image
function showImage(index) {
  galleryImg.src = images[index];
}

// Function to show next image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Function to show previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Event listeners for next and previous buttons
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

// Automatically change image every 5 seconds
setInterval(nextImage, 5000);

// Show the initial image
showImage(currentIndex);
