document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const recipient = "ldcarpepro@gmail.com"; // Remplace par ton adresse mail

    if (!email || !message) {
      alert("Tous les champs sont obligatoires.");
      return;
    }

    const subject = encodeURIComponent("Renseignement");
    const body = encodeURIComponent(`${message}`);

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
