import modals from "./modules";
import mask from "./mask";
import checkTextInputs from "./checkTextInputs";
import forms from "./forms";
import showMoreStyles from "./showMoreStyles";

window.addEventListener("DOMContentLoaded", () => {
  modals();
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  modals();
  forms();
  showMoreStyles(".button-styles", ".styles-2");
});
