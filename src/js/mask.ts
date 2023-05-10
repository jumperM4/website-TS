const mask = (selector: string) => {
  let setCursorPosition = (pos: number, elem: any) => {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  };

  const createMask = (event: any) => {
    const input = event.target;
    const matrix: string = "+7 (___) ___ __ __";
    let i: number = 0;
    let def: string = matrix.replace(/\D/g, "");
    let value = input.value.replace(/\D/g, "");

    if (def.length >= value.length) {
      value = def;
    }
    input.value = matrix.replace(/./g, (s) => {
      return /[_\d]/.test(s) && i < value.length
        ? value.charAt(i++)
        : i >= value.length
        ? ""
        : s;
    });
    if (event.type === "blur") {
      if (input.value.length === 2) {
        input.value = "";
      } else {
        setCursorPosition(input.value.length, this);
      }
    }
  };

  let inputs = document.querySelectorAll(selector);
  inputs.forEach((input) => {
    input.addEventListener("input", createMask);
    input.addEventListener("focus", createMask);
    input.addEventListener("blur", createMask);
  });
};

export default mask;
