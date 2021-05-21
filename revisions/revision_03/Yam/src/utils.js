const de = () => {
  const alea = Math.random();

  if (alea < 1 / 6) return 1;
  else if (alea < 2 / 6) return 2;
  else if (alea < 3 / 6) return 3;
  else if (alea < 4 / 6) return 4;
  else if (alea < 5 / 6) return 5;
  else return 6;
};

export function Lance_de(num = 5) {
  this.count = 0;
  this.res = [];
  while (this.count++ < num) this.res.push(de());
}

export const createEl = ({ name, content }) => {
  const el = document.createElement(name);
  const newContent = document.createTextNode(content);

  el.appendChild(newContent);

  return el;
};

export const checkNumber = (number) => {
  if (number.trim() === "")
    return { message: "Attention votre champ est vide", flag: false };

  if (isNaN(parseFloat(number)))
    return {
      message: `Attention ce n'est pas un nombre ${number}`,
      flag: false,
    };

  return { message: `Merci pour votre ajout ${number}`, flag: true };
};

const occurence = ({ number, numbers }) => {
  let count = 0;
  for (const num of numbers) {
    if (number === num) count++;
  }

  return count;
};

export function Statistic(lancers) {
  this.faces = [1, 2, 3, 4, 5, 6];
  this.lancers = lancers;

  this.combinaisons = {
    yam: 0,
    square: 0,
    brelan: 0,
  };
  
  for (const lancer of this.lancers) {
    for (const face of this.faces) {
      if (occurence({ numbers: lancer, number: face }) === 5) {
        this.combinaisons.yam += 1;
        continue;
      }
      if (occurence({ numbers: lancer, number: face }) === 4) {
        this.combinaisons.square += 1;
        continue;
      }
      if (occurence({ numbers: lancer, number: face }) === 3) {
        this.combinaisons.brelan += 1;
      }
    }
  }
}
