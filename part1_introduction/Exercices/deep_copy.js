
// 1

const numbers = [1,2,3];
const newNumbers = [ ...numbers ];

newNumbers[1] = 100;

console.log(numbers);
console.log(newNumbers);

// 2 copie profonde

// Attention le spread opérateur ne fait pas de copie profonde

const populations = [
    { id: 0, name: "Alan" }, // d'autres objets => d'autres référence
    { id: 1, name: "Albert" },
    { id: 2, name: "Jhon" },
    { id: 3, name: "Brice" },
    { id: 4, name: "Alexendra" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl" },
    { id: 7, name: "Dallas" },
    { id: 8, name: "Dennis" },
    { id: 9, name: "Edgar" },
    { id: 10, name: "Erika" },
    { id: 11, name: "Isaac" },
    { id: 12, name: "Ian" },
  ];

  const newPop = [ ... populations ]; // pas de copie profonde

  newPop[0].name = "ALICE";

  console.log(newPop);
  console.log(populations);

  const deepCopy = populations.map( population => ({...population}) ) ; // chaque littéral est copié dans une nouvelle réf

  deepCopy[0].name = "Alan";

  console.log(newPop);
  console.log(deepCopy);