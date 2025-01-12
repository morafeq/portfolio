const butterfly = document.getElementById("threedd");
const restTarget = document.querySelector(".home__img");

// Butterfly flying freely logic
function randomPosition() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  butterfly.style.transform = `translate(${x - 100}px, ${y - 100}px)`;
}

setInterval(() => {
  randomPosition();
}, 3000); // Move every 3 seconds

// Resting on the image logic
setInterval(() => {
  if (Math.random() < 0.3) {
    // 30% chance to rest
    const rect = restTarget.getBoundingClientRect();
    const targetX = rect.left + rect.width / 2;
    const targetY = rect.top;
    butterfly.style.transform = `translate(${targetX - 100}px, ${
      targetY - 100
    }px)`;
  }
}, 10000); // Check every 10 seconds for resting
