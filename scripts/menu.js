const { animate, delay } = Motion;

const openMenuButton = document.getElementById("open-menu");
const closeMenuButton = document.getElementById("close-menu");
const mobileOverlay = document.getElementById("overlay");

openMenuButton.addEventListener("click", () => {
  mobileOverlay.classList.remove("hidden");
  animate(
    mobileOverlay,
    {
      opacity: [0, 1],
    },
    {
      duration: 0.4,
    },
  );
});

closeMenuButton.addEventListener("click", () => {
  delay(() => mobileOverlay.classList.add("hidden"), 0.4);
  animate(
    mobileOverlay,
    {
      opacity: [1, 0],
    },
    {
      duration: 0.4,
    },
  );
});
