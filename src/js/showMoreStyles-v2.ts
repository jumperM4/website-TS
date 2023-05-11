import { getResource } from "./services/requests";

const showMoreStyles = (trigger: string, wrapper: string) => {
  const btn = document.querySelector(trigger);

  if (btn) {
    btn.addEventListener("click", (e: any) => {
      getResource("http://localhost:3000/styles")
        .then((res) => {
          createCards(res);
        })
        .catch((err) => {
          console.log(err);
        });

      const { target } = e;
      console.log(target);
      if (target.classList.contains === ".button-styles") {
        console.log(e.target);
      }
    });
  }

  const createCards = (response: Array<object>) => {
    response.forEach((item: any) => {
      const card = document.createElement("div");
      card.classList.add(
        "animated",
        "fadeInUp",
        "col-sm-3",
        "col-sm-offset-0",
        "col-xs-10",
        "col-xs-offset-1"
      );
      card.innerHTML = `
        <div class="styles-block">
            <img src=${item.src} alt="style">
 					  <h4>${item.title}</h4>
 					  <a href=${item.link}>Подробнее</a>
				</div>
      `;
      const divWrapper = document.querySelector(wrapper);
      divWrapper?.appendChild(card);
    });
  };
};

export default showMoreStyles;
