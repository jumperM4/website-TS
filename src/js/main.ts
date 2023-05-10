import modals from "./modules";
import mask from "./mask";
import checkTextInputs from "./checkTextInputs";
import forms from "./forms";

window.addEventListener("DOMContentLoaded", () => {
  modals();
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  modals();
  forms();

});
