const accordion = (triggersSel: string, itemsSel: string) => {
  const btns = document.querySelectorAll(triggersSel);
  const blocks = document.querySelectorAll(itemsSel);

  blocks.forEach((block) => {
    block.classList.add("animated", "fadeInDown");
  });

  btns.forEach((btn) => {
    btn.addEventListener("click", (e: any) => {
      const { target } = e;
      console.log(target);
      if (!target?.classList.contains("active")) {
        btns.forEach((btn) => {
          btn.classList.remove("active", "active-style");
        });
        target?.classList.add("active", "active-style");
      }
    });
  });
};

export default accordion;
