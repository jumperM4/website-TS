import modals from "./modules";
import mask from "./mask";
import checkTextInputs from "./checkTextInputs";
import forms from "./forms";
//import showMoreStyles from "./showMoreStyles";
import calc from "./calc";

window.addEventListener("DOMContentLoaded", () => {
  modals();
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  modals();
  forms();
  //  showMoreStyles(".button-styles", ".styles-2");
  calc({
    size: "#size",
    material: "#material",
    options: "#options",
    promocode: ".promocode",
    result: ".calc-price",
  });
});
