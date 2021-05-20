import { createEl, checkNumber, parityClass } from "./utils.js";

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

    const li = createEl({ name: "li", content: number });
    li.setAttribute('style', parityClass(number).join('; ')) ;
    const button = createEl({ name : 'button', content : 'X'});

    button.addEventListener('click', event => {
        li.remove();
    });

    const classes = ['btn', 'btn-danger', 'cursor'];
    button.classList.add(...classes); // spread => propagé les valeurs du tableau en paramètre de la fonction add

    li.appendChild(button);
    document.body.insertBefore(li, elNumbers.nextElementSibling);
    elNumber.value = "";
    elMessage.innerHTML = message;
  });
});
