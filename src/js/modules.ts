const modals = () => {
  interface ISelectors {
    triggerSelector: string;
    modalSelector: string;
    closeSelector: string;
    destroy: boolean;
  }

  let btnPressed: boolean = false;

  function bindModal({
    triggerSelector,
    modalSelector,
    closeSelector,
    destroy,
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

        btnPressed = true;

        if (destroy) {
          trigger.remove();
        }

        windows.forEach((window) => {
          window.style.display = "";
          trigger.classList.add("animated", "fadeIn");
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
        if (e.target === modal) {
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
          let scroll = calcScroll();
          document.body.style.marginRight = `${scroll}px`;
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

  const openByScroll = (selector: string) => {
    const giftIcon = document.querySelector<HTMLElement>(selector);
    window.addEventListener("scroll", () => {
      if (
        !btnPressed &&
        window.pageYOffset + document.documentElement.clientHeight >=
          document.documentElement.scrollHeight
      ) {
        if (giftIcon) {
          giftIcon.click();
        }
      }
    });
  };

  bindModal({
    triggerSelector: ".button-design",
    modalSelector: ".popup-design",
    closeSelector: ".popup-design .popup-close",
    destroy: false,
  });
  bindModal({
    triggerSelector: ".button-consultation",
    modalSelector: ".popup-consultation",
    closeSelector: ".popup-consultation .popup-close",
    destroy: false,
  });
  bindModal({
    triggerSelector: ".fixed-gift",
    modalSelector: ".popup-gift",
    closeSelector: ".popup-gift .popup-close",
    destroy: true,
  });
  openByScroll(".fixed-gift");

  showModalByTime(".popup-consultation", 5000);
};

export default modals;
