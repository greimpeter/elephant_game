// Gentle playful animation on load
window.addEventListener("load", () => {
  const elements = document.querySelectorAll(".info-box, .image-wrapper");

  elements.forEach((el, index) => {
    el.animate(
      [
        { transform: "translateY(10px)", opacity: 0 },
        { transform: "translateY(0)", opacity: 1 }
      ],
      {
        duration: 600,
        delay: index * 150,
        easing: "ease-out",
        fill: "forwards"
      }
    );
  });
});
