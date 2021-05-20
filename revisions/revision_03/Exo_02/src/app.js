import { hello } from './utils.js';


window.addEventListener('DOMContentLoaded', event => {

    const handleChange = event => {
        const { value : number } = event.target; 

        console.log(number);
    };

});