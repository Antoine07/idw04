import { Lance_de, checkNumber, Statistic } from "./utils.js";

window.addEventListener("DOMContentLoaded", (event) => {
  const elNumber = document.getElementById("number");
  const btnSubmit = document.getElementById("btn_submit");
  const elNumbers = document.querySelector(".numbers");
  const elMessage = document.querySelector(".message");

  let number = "";

  const handleChange = (event) => {
    const { value } = event.target;
    elMessage.innerHTML = "";
    number = value;
  };

  elNumber.addEventListener("input", handleChange);

  elNumber.addEventListener("focus", function (e) {
    e.target.value = "";
    elMessage.innerHTML = "";
  });

  btnSubmit.addEventListener("click", (event) => {
    const { message, flag } = checkNumber(elNumber.value);

    if (flag === false) {
      elMessage.innerHTML = message;

      return;
    }
    const lancers = [];

    // je décrémente
    while(  number-- > 0 ) lancers.push( (new Lance_de()).res ) ;

    const stat = new Statistic(lancers);

    console.log(stat);

    elNumbers.innerHTML = ""
  });
});
