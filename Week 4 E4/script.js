function updateContent() {
  document.getElementById("main-title").textContent =
    "Welcome to Internet Programming";
  document.getElementById("description").textContent =
    "Explore the wonders of web development and coding in the vast digital world.";
}

document.addEventListener("DOMContentLoaded", updateContent);