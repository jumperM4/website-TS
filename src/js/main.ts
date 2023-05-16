import modals from "./modules";
import mask from "./mask";
import checkTextInputs from "./checkTextInputs";
import forms from "./forms";
import showMoreStyles2 from "./showMoreStyles-v2";
//import showMoreStyles from "./showMoreStyles";
import calc from "./calc";
import filter from "./filter";
import accordion from "./accordion";
import pictureSize from "./pictureSize";

window.addEventListener("DOMContentLoaded", () => {
  modals();
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  modals();
  forms();
  calc({
    size: "#size",
    material: "#material",
    options: "#options",
    promocode: ".promocode",
    result: ".calc-price",
  });
  // showMoreStyles(".button-styles", "#styles .row");
  showMoreStyles2(".button-styles", ".styles-2");
  filter();
  accordion(".accordion-heading");
  pictureSize('.sizes-block');
});
