document.addEventListener("DOMContentLoaded", () => {
  // 1. Detect device type and set page title dynamically
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    document.title = "phone detected";
  } else {
    document.title = "laptop detected";
  }

  // 2. Button click event handler
  const ctaButton = document.getElementById("cta-btn");

  if (ctaButton) {
    ctaButton.addEventListener("click", () => {
      alert("button is pressed");
    });
  }
});