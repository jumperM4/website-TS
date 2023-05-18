const burger = (menuSel: string, burgerSel: string) => {
  const menuElem = document.querySelector(menuSel) as HTMLElement;
  const burgerElem = document.querySelector(burgerSel) as HTMLElement;

  menuElem.style.display = "none";

  burgerElem?.addEventListener("click", () => {
    const breakpoint: number = 993;
    menuElem.style.display == "none" && window.screen.availWidth < breakpoint
      ? (menuElem.style.display = "block")
      : (menuElem.style.display = "none");
  });

  window.addEventListener("resize", () => {
    const breakpoint: number = 990;
    if (window.screen.availWidth > breakpoint) {
      menuElem.style.display = "none";
    }
  });
};

export default burger;
