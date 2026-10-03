document.addEventListener("DOMContentLoaded", () => {
  // 1. Detect device type
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const detectedText = isMobile ? "phone detected" : "laptop detected";

  // 2. Set browser tab title
  document.title = detectedText;

  // 3. Set hero header text
  const heroHeading = document.getElementById("hero-heading");
  if (heroHeading) {
    heroHeading.textContent = detectedText;
  }

  // 4. Button click event handler
  const ctaButton = document.getElementById("cta-btn");
  if (ctaButton) {
    ctaButton.addEventListener("click", () => {
      alert("button is pressed");
    });
  }
});