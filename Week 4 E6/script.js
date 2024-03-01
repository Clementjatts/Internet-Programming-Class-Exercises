function updateH1Content() {
  this.textContent = "Clicked H1: Discovering Web Technologies";
}

function updatePContent() {
  this.textContent = "Clicked P: Engage with Interactive Learning";
}

function revertOriginalText() {
  if (this.id === "main-title") {
    this.textContent = "Initial H1 Title";
  } else if (this.id === "description") {
    this.textContent = "Initial P Description";
  }
}

document
  .getElementById("main-title")
  .addEventListener("click", updateH1Content);
document
  .getElementById("description")
  .addEventListener("click", updatePContent);

// Adding mouseenter and mouseleave events
document.getElementById("main-title").addEventListener("mouseenter", () => {
  document.getElementById("main-title").textContent =
    "Hover over H1: Web Tech Awaits";
});
document
  .getElementById("main-title")
  .addEventListener("mouseleave", revertOriginalText);

document.getElementById("description").addEventListener("mouseenter", () => {
  document.getElementById("description").textContent =
    "Hover over P: Start Your Journey";
});
document
  .getElementById("description")
  .addEventListener("mouseleave", revertOriginalText);