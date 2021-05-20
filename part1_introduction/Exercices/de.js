/*

Définir les constantes du script au début

*/

const NUMBER_OCCURENCE = 4;
const NUMBER_FACE = 6;
const NUMBER_DICE = 5;

const game = {
  flagSquare: false,
  flagSuite: false,
  occ: NUMBER_OCCURENCE,
  number: null,
  numbers: [],
};

function throw_dice(number, face = NUMBER_FACE) {
  let count = 0,
    res = [];

  while (true) {
    if (count === number) break;
    res.push(Math.floor(Math.random() * face) + 1);

    count++;
  }

  return res;
}

// console.log(throw_dice(5));

function occurence({ number, numbers }) {
  let count = 0;
  for (const num of numbers) {
    if (number === num) count++;
  }

  return count;
}

const numbers = throw_dice(NUMBER_DICE);
game.numbers = numbers;

// console.log(numbers);
// console.log(occurence({ numbers, number : 1}));

// console.log(game);

for (const number of numbers) {
  if (occurence({ numbers, number }) === NUMBER_OCCURENCE) {
    game.flagSquare = true;
    game.number = number;
    break;
  }
}

console.log(game);

// Savoir si on une suite de 5 nombres !

// 1 il faut avoir 5 dés tous différents parmi tous les dés

// algo suite exacte avec 5 valeurs
// 1  2  3  4  5
//  1  1  1  1
// 2  3  4  5  6
//   1  1  1  1

// algo suite exacte

numbers.sort((a, b) => a - b); // ordre croissant attention cette fonction travail par référence

// console.log(game);

const flagSet = new Set(numbers); // ensemble des éléments distincts du tableau

if (flagSet.size >= 5) {
  let count = 1; // 5 nombre qui se suivent
  // 1  2  3  4  5
  //  1  1  1  1
  for (let i = 1; i < NUMBER_DICE; i++) {
    if (Math.abs(numbers[i - 1] - numbers[i]) === 1) count++;
  }

  if (count === 5) game.flagSuite = true; // tout dans la constante de jeu
}

console.log(game);


// On peut aussi utiliser la fonction suivante pour savoir combien on de valeur(s) distinctes dans le tableau numbers

function count_distinct_dice(){
    const des = [];

    for (let number = 1; number <= NUMBER_FACE; number++) {
        let occ = occurence({ number, numbers }) ;
        if(occ > 0)
            des.push(occ);
    }
    
    return des.length;
}
