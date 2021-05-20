
const styleNormal = [
    'color: black',
    'margin-top: .5rem'
];

const styleOrange = [
    'color: orange',
    'margin-top: .5rem'
];

export const createEl = ({name, content}) => {
    const el = document.createElement(name);
    const newContent = document.createTextNode(content);

    el.appendChild(newContent);

    return el;
}

export const checkNumber = (number) => {

    if( number.trim() ==='' ) return (
         { message : "Attention votre champ est vide", flag : false }
    );

    if( isNaN(parseFloat(number))) return ( 
        { message : `Attention ce n'est pas un nombre ${number}`, flag : false }
    );

    return ( 
        { message : `Merci pour votre ajout ${number}`, flag : true }
    );
}

export const parityClass = number => number % 2 ? styleNormal : styleOrange ;