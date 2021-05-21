#### Question 1
Que signifie ECMAScript ?
*Réponses* :
* [ ] C'est un langage de programmation
* [ ] C'est une base de données
* [ ] C'est un service Web
* [ ] C'est un ensemble de normes

#### Question 2
Quels sont les types primitifs en JS ?
*Réponses* :
* [ ] boolean null undefined number bigint
* [ ] boolean null undefined number bigint string symbole
* [ ] Object number string
* [ ] Object boolean null undefined number bigint string symbole

#### Question 3
Quel est le nom de l'attribut ou méthode permettant de calculer la taille d'un Map ?
*Réponses* :
```javascript
const myMap = new Map([1, 2, 3])
```
* [ ] len
* [ ] length
* [ ] size
* [ ] size()

#### Question 4
Qu'affiche le code suivant ?
```javascript
const ensemble = new Set([1, 2, 3, 4, 5, 5]);
console.log(ensemble);
```
*Réponses* :
* [ ] `[1, 2, 3, 4, 5, 5]`
* [ ] `{1, 2, 3, 4, 5, 5}`
* [ ] `{1, 2, 3, 4, 5}`
* [ ] `{1, 2, 3, 4, 5, 5}`

#### Question 5
Qu'affiche le code suivant ?
```javascript
let b = 1;

function baz(){
    let [b, c] = [1, 2]; 
    console.log(b, c);
    function foo(){
        console.log(c)
    }
}
console.log(b);
baz();
```
*Réponses* :
* [ ] 1 2
* [ ] 1 1 2
* [ ] 1 1 2 2
* [ ] 1 1

#### Question 6
Qu'affiche le code suivant ?
```javascript
const t1 = [1, 2];
const t2 = t1;
t1.push(3);
console.log(t1);
```
*Réponses* :
* [ ] Une SyntaxError     
* [ ] `[1,2,3]`
* [ ] `[1,2]`
* [ ] `{1,2,3}`

#### Question 7
Qu'affiche le code suivant ?
```javascript
for (let j = 0; j < 10; j++) {}
console.log(j);
```
*Réponses* :
* [ ] `ReferenceError`
* [ ] `SyntaxError`
* [ ] 10
* [ ] null

#### Question 8
Qu'affiche le code suivant ?
```javascript
let x, y ;
[x,,y] = [10, 20, 11, 111];
console.log(x, y);
```
*Réponses* :
* [ ] `SyntaxError`
* [ ] `ReferenceError`
* [ ] 10 11
* [ ] 10 111

#### Question 9
Qu'affiche le code suivant ?
```javascript
let x, y ;
[,,,...rest] = [10, 20, 11, [ 111, 120, 7 ]];
console.log(rest.shift());
```
*Réponses* :
* [ ] `SyntaxError`
* [ ] `ReferenceError`
* [ ] 7
* [ ] `[111,120, 7]`

#### Question 10
Que vaut le tableau t2 ?
```javascript
let t1 = [1, 2 ];
let t2 = [ ...t1 ];
t2.push(3);
console.log(t1);
```
*Réponses* :
* [ ] `[[1, 2]]`
* [ ] `[3]`
* [ ] `[1,2,3]`
* [ ] `[1, 2]`

#### Question 11
Que vaut le tableau t2 ?
```javascript
let t1 = [ 1, 2 ];
let t2 = t1.map(x => x);
t2.push(3);
console.log(t1);
```
*Réponses* :
* [ ] `[[1, 2]]`
* [ ] `[3]`
* [ ] `[1,2,3]`
* [ ] `[1, 2]`

#### Question 12
Qu'affiche le code suivant ?
```javascript
const phrase = '8790:bonjour le monde:8987:7777:Hello World:9007';
const sentence = phrase.split(':').map(w => w.slice(w.length -1)).filter(Number);
console.log(sentence);
```
*Réponses* :
* [ ] `["7", "7", "7"]`
* [ ] `[7, 7, 7]`
* [ ] `[]`
* [ ] `["8790", "8987", "7777", "9007"]`

#### Question 13
Qu'affiche le code suivant ?
```javascript
const phrase = '8790:bonjour le monde:8987:7777:Hello World:9007';
const sentence = phrase.split(':').map(w => w.slice(w.length -1));
console.log(sentence);
```
*Réponses* :
* [ ] `["7", "7", "7"]`
* [ ] `[7, 7, 7]`
* [ ] `[]`
* [ ] `["0", "e", "7", "7", "d", "7"]`

#### Question 14
Comment récupérer le name et le nom de la soeur en utilisant de la desctructuration ?
```javascript
const st = {
    name: "Alan",
    family: {
      mother: "Isa",
      father: "Philippe",
      sister: "Sylvie"
    },
    age: 35
  };
```
*Réponses* :
* [ ] `const { name, family : { sister }} = st;`
* [ ]  `const { name, sister } = st;`
* [ ]  `const { name, family.sister } = st;`
* [ ]  `const { name, sister : { family }} = st;`
