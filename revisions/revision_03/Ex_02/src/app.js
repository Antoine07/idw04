import { hello } from './utils.js';


window.addEventListener('DOMContentLoaded', event => {
    
    const number = document.getElementById('number');
    const btnSubmit = document.getElementById('btn_submit');
    const numbers = document.querySelector('.numbers');

    let value = '';

    const handleChange = event => {
        const { value : number } = event.target; 

        console.log(number);

        value = number;
    };

    number.addEventListener('input', handleChange );

    btnSubmit.addEventListener('click', event => {
        // Create element li et l'ajouter dans numbers ul 

    });

});