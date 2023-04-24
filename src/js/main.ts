import modals from "./modules";
import sliders from "./sliders";

window.addEventListener("DOMContentLoaded", () => {
  modals();
  sliders({
    slides: ".feedback-slider-item",
    direction: "horizontal",
    prev: ".main-prev-btn",
    next: ".main-next-btn",
  });
  sliders({ slides: ".main-slider-item", direction: "vertical" });
});
