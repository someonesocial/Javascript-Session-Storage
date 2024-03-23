const beispiel1 = document.querySelector("#beispiel1");
beispiel1.addEventListener("click", executeExample);

// Prüfen ob sessionStorage.color existiert
if ("color" in sessionStorage) {
  document.querySelector("#sessionColor").value = sessionStorage.color;
}

// sessionStorage speichern
function executeExample() {
  sessionStorage.setItem(
    "color",
    document.querySelector("#sessionColor").value
  );
  alert("Gespeichert!");
}
