interface ISelectors {
  size: string;
  material: string;
  options: string;
  promocode: string;
  result: string;
}

const calc = ({ size, material, options, promocode, result }: ISelectors) => {
  const sizeBlock = document.querySelector(size);
  const materialBlock = document.querySelector(material);
  const optionsBlock = document.querySelector(options);
  const promocodeBlock = document.querySelector(promocode);
  const resultBlock = document.querySelector(result);

  let sum: number = 0;

  const calcFunction = () => {
    if (
      sizeBlock &&
      materialBlock &&
      optionsBlock &&
      resultBlock &&
      promocodeBlock
    ) {
      sum = Math.round(
        +sizeBlock.value * +materialBlock.value + +optionsBlock.value
      );

      if (sizeBlock.value == "" || materialBlock.value == "") {
        resultBlock.textContent =
          "Пожалуйста, выберите размер и материал картины!";
      } else if (promocodeBlock.value === "IWANTPOPART") {
        resultBlock.textContent = Math.round(sum * 0.7);
      } else {
        resultBlock.textContent = sum;
      }
    }

    sizeBlock?.addEventListener("change", calcFunction);
    materialBlock?.addEventListener("change", calcFunction);
    optionsBlock?.addEventListener("change", calcFunction);
    promocodeBlock?.addEventListener("input", calcFunction);
  };
};

export default calc;
