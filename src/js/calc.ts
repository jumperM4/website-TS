interface ISelectors {
  size: string;
  material: string;
  options: string;
  promocode: string;
  result: string;
}

const calc = ({ size, material, options, promocode, result }: ISelectors) => {
  const sizeBlock = document.querySelector(size) as HTMLSelectElement;
  const materialBlock = document.querySelector(material) as HTMLSelectElement;
  const optionsBlock = document.querySelector(options) as HTMLSelectElement;
  const promocodeBlock = document.querySelector(promocode) as HTMLInputElement;
  const resultBlock = document.querySelector(result);

  const calcFunction = () => {
    let sum: number = 0;
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
      } else if (promocodeBlock.value.toUpperCase() === "IWANTPOPART") {
        resultBlock.textContent = String(Math.round(sum * 0.7));
      } else {
        resultBlock.textContent = String(sum);
      }
    }
  };
  sizeBlock?.addEventListener("change", calcFunction);
  materialBlock?.addEventListener("change", calcFunction);
  optionsBlock?.addEventListener("change", calcFunction);
  promocodeBlock?.addEventListener("input", calcFunction);
};

export default calc;
