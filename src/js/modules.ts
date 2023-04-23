const modals = () => {
  interface ISelectors {
    triggerSelector: string;
    modalSelector: string;
    closeSelector: string;
    closeClickOverlay: boolean;
  }

  function bindModal({
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay,
  }: ISelectors) {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector<HTMLElement>(modalSelector);
    const close = document.querySelector<HTMLElement>(closeSelector);
    const windows = document.querySelectorAll<HTMLElement>("[data-modal]");
    const scroll = calcScroll();

    const closeModel = () => {
      if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (e: Event) => {
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

  function showModalByTime(selector: string, time: number) {
    setTimeout(() => {
      let display;

      document.querySelectorAll("[data-modal]").forEach((item) => {
        if (getComputedStyle(item).display !== "none") {
          display = "block";
        }
      });

      if (!display) {
        const modal = document.querySelector<HTMLElement>(selector);
        if (modal) {
          modal.style.display = "block";
          document.body.style.overflow = "hidden";
        }
      }
    }, time);
  }

  const calcScroll = () => {
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  };

  bindModal({
    triggerSelector: ".button-design",
    modalSelector: ".popup-design",
    closeSelector: ".popup-design .popup-close",
    closeClickOverlay: true,
  });
  bindModal({
    triggerSelector: ".button-consultation",
    modalSelector: ".popup-consultation",
    closeSelector: ".popup-consultation .popup-close",
    closeClickOverlay: true,
  });

  showModalByTime(".popup-consultation", 5000);
};

export default modals;
