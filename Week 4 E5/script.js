function updateContent() {
  document.getElementById("main-title").textContent =
    "Welcome to Interactive Internet Programming";
  document.getElementById("description").textContent =
    "Click anywhere to learn more about the dynamic nature of web development.";
}

document.addEventListener("click", updateContent);