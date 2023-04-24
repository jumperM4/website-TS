interface ISelectors {
  slides: string;
  direction: string;
  prev?: string;
  next?: string;
}

const sliders = ({ slides, direction, prev, next }: ISelectors) => {
  let slideIndex: number = 1;
  let paused: any = false;
  const slideItems = document.querySelectorAll<HTMLDivElement>(slides);

  const showSlides = (n: number) => {
    if (n > slideItems.length) {
      slideIndex = 1;
    } else if (n < 1) {
      slideIndex = slideItems.length;
    }

    slideItems.forEach((slide) => {
      slide.classList.add("animated");
      slide.style.display = "none";
    });

    slideItems[slideIndex - 1].style.display = "block";
  };

  showSlides(slideIndex);

  const plusSlides = (n: number) => {
    showSlides((slideIndex += n));
  };

  try {
    const prevBtn = document.querySelector(prev);
    const nextBtn = document.querySelector(next);

    prevBtn?.addEventListener("click", () => {
      showSlides(-1);
      slideItems[slideIndex - 1].classList.remove("slideInLeft");
      console.log(slideItems[slideIndex - 1]);
      slideItems[slideIndex - 1].classList.add("slideInRight");
      console.log(slideItems[slideIndex - 1]);
    });
    nextBtn?.addEventListener("click", () => {
      showSlides(1);
      slideItems[slideIndex - 1].classList.remove("slideInRight");
      slideItems[slideIndex - 1].classList.add("slideInLeft");
    });
  } catch (err) {}

  const activateAnimation = () => {
    if (direction === "vertical") {
      paused = setInterval(() => {
        plusSlides(1);
        slideItems[slideIndex - 1].classList.add("slideInDown");
      }, 3000);
    } else {
      paused = setInterval(() => {
        plusSlides(1);
        slideItems[slideIndex - 1].classList.remove("slideInRight");
        slideItems[slideIndex - 1].classList.add("slideInLeft");
      }, 3000);
    }
  };

  activateAnimation();

  slideItems[0].parentNode?.addEventListener("mouseenter", () => {
    clearInterval(paused);
  });
  slideItems[0].parentNode?.addEventListener("mouseleave", () => {
    activateAnimation();
  });
};

export default sliders;
