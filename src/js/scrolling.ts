const scrolling = (upSelector: string) => {
  const upElem = document.querySelector(upSelector);

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem?.classList.add("animated", "fadeIn");
      upElem?.classList.remove("fadeOut");
    } else {
      upElem?.classList.add("animated", "fadeOut");
      upElem?.classList.remove("fadeIn");
    }
  });

  // scrolling animation with requestAnimationFrame

  // let links = document.querySelectorAll('[href^="#"]');
  // let speed: number = 0.3;

  // links.forEach((link) => {
  //   link.addEventListener("click", (event) => {
  //     event.preventDefault();
  //     const { target } = event;
  //     console.log(target);

  //     let widthTop = document.documentElement.scrollTop;
  //     let hash = window.location.hash;
  //     let toBlock = document.querySelector(hash)?.getBoundingClientRect().top;
  //     let start: null | number = null;

  //     const step = (time: number) => {
  //       if (start === null) {
  //         start = time;
  //       }

  //       let progress = time - start;
  //       let r =
  //         toBlock < 0
  //           ? Math.max(widthTop - progress / speed, widthTop + toBlock)
  //           : Math.min(widthTop + progress / speed, widthTop + toBlock);

  //       document.documentElement.scrollTo(0, r);

  //       r != widthTop + toBlock
  //         ? requestAnimationFrame(step)
  //         : (location.hash = hash);
  //     };
  //     requestAnimationFrame(step);
  //   });
  // });

  // pure js scrolling
  const element = document.documentElement;
  const body = document.body;

  const calcScroll = () => {
    upElem?.addEventListener("click", (event: any) => {
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);
      const { target } = event;
      console.log(target.hash, location.hash, target);

      if (target.hash !== "") {
        event.preventDefault();
        let hashElement = document.querySelector(target.hash);
        console.log(hashElement);
        let hashElementTop: number = 0;

        while (hashElement?.offsetParent) {
          hashElementTop += hashElement.offsetTop;
          hashElement = hashElement.offsetParent;
        }

        hashElementTop = Math.round(hashElementTop);
        smoothScroll(scrollTop, hashElementTop, target.hash);
      }
    });
  };
  const smoothScroll = (from: number, to: number, hash: string) => {
    let timeInterval = 1;
    let prevScrollTop: number;
    let speed: number;
    console.log(hash);

    to > from ? (speed = 30) : (speed = -30);

    let move = setInterval(() => {
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);
      if (
        prevScrollTop === scrollTop ||
        (to > from && scrollTop >= to) ||
        (to < from && scrollTop <= to)
      ) {
        clearInterval(move);
        history.replaceState(
          history.state,
          document.title,
          location.href.replace(/#.*$/g, "") + hash
        );
      } else {
        body.scrollTop += speed;
        element.scrollTop += speed;
        prevScrollTop = scrollTop;
      }
    }, timeInterval);
  };
  calcScroll();
};

export default scrolling;
