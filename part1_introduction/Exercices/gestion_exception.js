function ttc(price, tva = .2) {

    if (isNaN(parseFloat(price)) || isNaN(parseFloat(tva))){ throw "Error number price value"};

    console.log("ICI");

    return Math.floor((price * (1 + tva)) * 100) / 100; 
}

ttc("Bonjour");

ttc("35.9");
