document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.getElementById("cta-btn");

  if (ctaButton) {
    ctaButton.addEventListener("click", () => {
      alert("Thanks for supporting the campaign! Replace this alert with your action.");
    });
  }
});