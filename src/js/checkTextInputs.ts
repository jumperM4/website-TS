const checkTextInputs = (selector: string) => {
  const textInputs = document.querySelectorAll(selector);
  textInputs.forEach((input) => {
    input.addEventListener("keypress", (event) => {
      if ((event as KeyboardEvent).key.match(/[^а-яё 0-9]/gi)) {
        event.preventDefault();
      }
    });
  });
};

export default checkTextInputs;
