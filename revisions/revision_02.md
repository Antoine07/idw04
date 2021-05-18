# Exercice 02 nombre de caractères (écouter un événement)

Commencez avec l'index.html dans un dossier. Faites un fichier app.js relié le à ce fichier pour implémenter les spécificités demandés ci-dessous.

Nous allons créer un formulaire pour saisir une phrase, puis une fois que l'on aura cliqué sur le bouton "Calculer" nous afficherons le nombre de mot(s) saisi(s).

Utilisez le code suivant pour écouter les changements input de l'élément du formulaire :

```js
let elInput = document.querySelector('.phrase');

// une fonction de callback que l'on passera à addEventListener
function eventInput(event){
    let value = event.target.value;

    console.log(value);
}

// On écoute les changement des inputs
elInput.addEventListener('input', eventInput);
```

1. Affichez en temps réel le nombre de caractères dans l'élément HTML dont la classe CSS est result.

2. Lorsqu'on clique sur Calculer affichez maintenant le nombre de mot(s) que l'on a saisi dans le champ texte.

3. Gérez le cas où l'utilisateur saisit une chaîne de caractères vide et qu'il clique sur "Calculer". Affichez dans ce cas un message d'erreur.

4. L'utilisateur peut saisir des mots et introduire des espaces avant, après et entre les mots, ce qui fausse le calcul du nombre de mot(s). Trouvez une solution pour nettoyer la phrase saisie afin de compter le bon nombre de mot(s).