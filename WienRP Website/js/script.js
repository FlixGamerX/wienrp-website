// script.js – Startseiten-Interaktionen (Berufe klicken, Effekte)

function initPage() {
  const jobCards = document.querySelectorAll(".job-card");

  jobCards.forEach(card => {
    card.addEventListener("click", () => {
      const job = card.dataset.job || "Unbekannt";
      alert(`✅ Beruf "${job}" gewählt. Bewerbungssystem folgt bald.`);
    });

    // Optional: Hover-Animation
    card.addEventListener("mouseenter", () => {
      card.classList.add("ring", "ring-red-600", "scale-105");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("ring", "ring-red-600", "scale-105");
    });
  });
}
