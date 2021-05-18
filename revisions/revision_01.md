# Exercice 01 Créer un élément HTML

Commencez avec l'index.html dans un dossier avec une partie script ou fichier linké app.js. Utilisez ce que l'on nous avons vu en cours. Faites par exemple une/des fonction(s) pour répondre aux questions ci-dessous.

Nous allons maintenant créer des éléments dans le DOM. La méthode createElement permet de créer un élément HTML :

```js
let li = document.createElement('li');
```

Pour sélectionner un élément du DOM on peut également utiliser un **getElementById** qui cible un identifiant unique d'une balise :

```js
let container = document.getElementById('numbers');
```

Puis, avec la fonction **appendChild** on ajoute l'élément créé à l'élément sélectionné, il est créé et se placera à la suite des autres li :

```js
container.appendChild(li);
```

Créez 5 autres éléments à la suite des trois premiers (voir le fichier source pour commencer) en respectant l'ordre alphabétique et en incrémentant de +1 chacune des valeurs :

```txt
A=1
B=2
C=3
D=4   <-- créer les nouveaux éléments
E=5
F=6
G=7
H=8
```

