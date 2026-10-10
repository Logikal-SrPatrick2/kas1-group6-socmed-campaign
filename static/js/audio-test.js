document.addEventListener("DOMContentLoaded", () => {
  const hoverBtn = document.getElementById("hover-btn");
  const hoverSound = document.getElementById("hover-sound");

  if (hoverBtn && hoverSound) {
    hoverBtn.addEventListener("mouseenter", () => {
      hoverSound.currentTime = 0;
      hoverSound.play().catch(e => console.log("Hover audio blocked:", e));
    });
  }

  const clickBtn = document.getElementById("click-btn");
  const clickSound = document.getElementById("click-sound");

  if (clickBtn && clickSound) {
    clickBtn.addEventListener("click", () => {
      clickSound.currentTime = 0;
      clickSound.play().catch(e => console.log("Click audio blocked:", e));
    });
  }
});