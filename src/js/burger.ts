const burger = (menuSel: string, burgerSel: string) => {
  const menuElem = document.querySelector(menuSel) as HTMLElement;
  const burgerElem = document.querySelector(burgerSel) as HTMLElement;

  menuElem.style.display = "none";

  burgerElem?.addEventListener("click", () => {
    if (menuElem.style.display == "none" && window.screen.availWidth < 993) {
      menuElem.style.display = "block";
    } else {
      menuElem.style.display = "none";
    }
  });

  window.addEventListener("resize", () => {
    if (window.screen.availWidth > 990) {
      menuElem.style.display = "none";
    }
  });
};

export default burger;
