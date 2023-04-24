interface ISelectors {
  slides: string;
  direction: string;
  prev: string;
  next: string;
}

const sliders = ({ slides, direction, prev, next }: ISelectors) => {
  let slideIndex: number = 1;
  const slideItems = document.querySelectorAll<HTMLDivElement>(slides);
  const prevBtn = document.querySelector(prev);
  const nextBtn = document.querySelector(next);

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
};

export default sliders;
