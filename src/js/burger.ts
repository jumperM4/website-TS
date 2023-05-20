const burger = (menuSel: string, burgerSel: string) => {
  const menuElem = document.querySelector(menuSel) as HTMLElement;
  const burgerElem = document.querySelector(burgerSel) as HTMLElement;
  const BREAKPOINT: number = 993;

  menuElem.style.display = "none";

  burgerElem?.addEventListener("click", () => {
    menuElem.style.display == "none" && window.screen.availWidth < BREAKPOINT
      ? (menuElem.style.display = "block")
      : (menuElem.style.display = "none");
  });

  window.addEventListener("resize", () => {
    if (window.screen.availWidth > BREAKPOINT) {
      menuElem.style.display = "none";
    }
  });
};

export default burger;
