const accordion = (triggersSel: string) => {
  const btns = document.querySelectorAll(
    triggersSel
  ) as NodeListOf<HTMLParagraphElement>;

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active-style");

      if (btn.nextElementSibling) {
        btn.nextElementSibling.classList.toggle("active-content");

        if (btn.classList.contains("active-style")) {
          (btn.nextElementSibling as HTMLElement).style.maxHeight =
            btn.nextElementSibling.scrollHeight + 80 + "px";
        } else {
          (btn.nextElementSibling as HTMLElement).style.maxHeight = "0px";
        }
      }
    });
  });
  // const blocks = document.querySelectorAll(itemsSel);

  // blocks.forEach((block) => {
  //   block.classList.add("animated", "fadeInDown");
  // });

  // btns.forEach((btn) => {
  //   btn.addEventListener("click", () => {
  //     if (!btn.classList.contains("active")) {
  //       btns.forEach((btn) => {
  //         btn.classList.remove("active", "active-style");
  //       });
  //       btn.classList.add("active", "active-style");
  //     }
  //   });
  // });
};

export default accordion;
