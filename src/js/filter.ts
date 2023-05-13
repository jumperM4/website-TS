const filter = () => {
  const menu = document.querySelector(".portfolio-menu") as HTMLUListElement;
  const items = menu.querySelectorAll("li");
  const btnAll = menu.querySelector(".all") as HTMLLIElement;
  const btnLovers = menu.querySelector(".lovers") as HTMLLIElement;
  const btnChef = menu.querySelector(".chef") as HTMLLIElement;
  const btnGirl = menu.querySelector(".girl") as HTMLLIElement;
  const btnGuy = menu.querySelector(".guy") as HTMLLIElement;
  const btnGrandmother = menu.querySelector(".grandmother") as HTMLLIElement;
  const btnGranddad = menu.querySelector(".granddad") as HTMLLIElement;
  const wrapper = document.querySelector(
    ".portfolio-wrapper"
  ) as HTMLDivElement;
  const markAll: NodeListOf<HTMLDivElement> = wrapper.querySelectorAll(".all");
  const markGirl: NodeListOf<HTMLDivElement> =
    wrapper.querySelectorAll(".girl");
  const markLovers: NodeListOf<HTMLDivElement> =
    wrapper.querySelectorAll(".lovers");
  const markChef: NodeListOf<HTMLDivElement> =
    wrapper.querySelectorAll(".chef");
  const markGuy: NodeListOf<HTMLDivElement> = wrapper.querySelectorAll(".guy");
  const no = document.querySelector(".portfolio-no") as HTMLParagraphElement;

  // const filterFunction = (
  //   allLiElements: NodeListOf<HTMLLIElement>,
  //   allDivElements: NodeListOf<HTMLDivElement>
  // ) => {
  //   allLiElements.forEach((liElem) => {
  //     liElem.addEventListener("click", (e: any) => {
  //       const { target } = e;
  //       allDivElements.forEach((divElem) => {
  //         if (divElem.classList.contains(target.className)) {
  //           typeFilter(divElem);
  //         }
  //       });
  //     });
  //   });
  // };
  // filterFunction(items, markAll);

  const typeFilter = (markType?: NodeListOf<HTMLDivElement>) => {
    markAll?.forEach((mark: HTMLDivElement) => {
      mark.style.display = "none";
      mark.classList.remove("animated", "fadeIn");
    });

    no.style.display = "none";
    no.classList.remove("animated", "fadeIn");

    if (markType) {
      markType.forEach((mark: HTMLDivElement) => {
        mark.style.display = "block";
        mark.classList.add("animated", "fadeIn");
      });
    } else {
      no.style.display = "block";
      no.classList.add("animated", "fadeIn");
    }
  };

  btnAll?.addEventListener("click", () => {
    typeFilter(markAll);
  });

  btnLovers?.addEventListener("click", () => {
    typeFilter(markLovers);
  });

  btnChef?.addEventListener("click", () => {
    typeFilter(markChef);
  });

  btnGirl?.addEventListener("click", () => {
    typeFilter(markGirl);
  });
  btnGuy?.addEventListener("click", () => {
    typeFilter(markGuy);
  });
  btnGrandmother?.addEventListener("click", () => {
    typeFilter();
  });
  btnGranddad?.addEventListener("click", () => {
    typeFilter();
  });

  // const params: any = [
  //   { btnAll, markAll },
  //   { btnLovers, markLovers },
  //   { btnChef, markChef },
  //   { btnGirl, markGirl },
  //   { btnGuy, markGuy },
  //   { btnGranddad },
  //   { btnGrandmother },
  // ];

  // params.forEach(({ elem, type }: any) => {
  //   console.log(elem, type);
  //   elem.onclick = typeFilter(type);
  // });

  menu?.addEventListener("click", (e: any) => {
    let { target } = e;
    if (target && target.tagName === "LI") {
      items.forEach((btn) => {
        btn.classList.remove("active");
        target?.classList.add("active");
      });
    }
  });
};

export default filter;
