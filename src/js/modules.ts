const modals = () => {
  function bindModal(
    triggerSelector: string,
    modalSelector: string,
    closeSelector: string,
    closeClickOverlay: boolean = true
  ) {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector<HTMLElement>(modalSelector);
    const close = document.querySelector<HTMLElement>(closeSelector);
    const windows = document.querySelectorAll<HTMLElement>("[data-modal]");
    const scroll = calcScroll();

    console.log(triggers, modal, close);

    function closeModel() {
      if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    }

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach((window) => {
          window.style.display = "";
        });

        if (modal) {
          modal.style.display = "block";
          document.body.style.overflow = "hidden";
          document.body.style.marginRight = `${scroll}px`;
        }
        //document.body.classList.add("modal-open");
      });
    });

    if (close) {
      close.addEventListener("click", () => {
        closeModel();
        document.body.style.marginRight = `0px`;
        //document.body.classList.remove("modal-open");
      });

      document.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
          windows.forEach((window) => {
            window.style.display = "";
          });

          closeModel();
          document.body.style.marginRight = `0px`;
        }
        //document.body.classList.remove("modal-open");
      });
    }

    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal && closeClickOverlay) {
          windows.forEach((window) => {
            window.style.display = "";
          });
          closeModel();
          document.body.style.marginRight = `0px`;
          //document.body.classList.remove("modal-open");
        }
      });
    }
  }

  // function showModalByTime(selector: string, time: number) {
  //   setTimeout(() => {
  //     const modal = document.querySelector<HTMLElement>(selector);
  //     if (modal) {
  //       modal.style.display = "block";
  //       document.body.style.overflow = "hidden";
  //     }
  //   }, time);
  // }

  function calcScroll() {
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  bindModal(".button_design", ".popup_design", ".popup_design .popup_close", true);
  // showModalByTime(".popup", 60000);
};

export default modals;
