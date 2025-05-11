// validation.js – Login & Registrierung prüfen

// Registrierung prüfen
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  const pw = document.getElementById("regPassword").value;
  const confirm = document.getElementById("confirmPassword").value;

  if (pw !== confirm) {
    alert("❌ Passwörter stimmen nicht überein!");
    e.preventDefault();
  }
});

// Login prüfen
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  const user = document.getElementById("username").value;
  const pw = document.getElementById("password").value;

  if (!user || !pw) {
    alert("⚠️ Bitte alle Felder ausfüllen!");
    e.preventDefault();
  }
});
