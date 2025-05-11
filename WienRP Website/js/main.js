// main.js – Läuft auf jeder Seite

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Seite vollständig geladen");

  // Führt seitenabhängige Logik aus
  if (typeof initPage === "function") {
    initPage();
  }
});
