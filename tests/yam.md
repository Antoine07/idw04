# TP Yam

Vous allez créer une petite application qui permet de lancer 5 dés pour jouer au Yam. Il n'y aura qu'un seul joueur dans l'application et nous testerons que le lancer de 5 dés. Nous allons faire des statistiques sur les différentes combinaisons du jeu. Vous ne testerez que certaines combinaisons de Yam (voir plus bas).

Créez une application comme vu en cours : un fichier index.html et un dossier src/

Vous créerez une fonction **lance_de** pour générer le lancer des 5 dés. L'application aura deux pages uniquement.

```js
export const lance_des = () => { 
    // TODO
}
```

## Page principale

Sur la page principale vous placerez un bouton Lancer afin de générer le lancer des 5 dés, un champ de type text permettra de fixer le nombre de lancer(s) que l'on souhaite réaliser. Notez qu'un lancer correspond à 1 lancer de 5 dés. 

```txt

--------------------------------------------

    Yam 

--------------------------------------------

Nombre de lancer(s) [19]

[ Lancer ]

```

## Les Statistiques

Sous le lancer de dés vous afficherez sur la même page l'ensemble des statistiques. Vous ajouterez également un bouton Reset afin de ré-initialiser le calcul des statistiques. Si vous faîtes plusieurs lancers les statistiques seront également ré-initaliser.

Dans l'ordre des recherches on calculera le nombre de yam, carré et le brelan quelques soient la valeur des dés.

Vous testerez les combinaisons suivantes sur chaque lancer. Par exemple si on lance 10 fois les 5 dés on pourrait avoir les statistiques suivantes :

- Brelan : 2 (trois dés identiques)

- Carré : 1 (quatre dés indentiques)

- Yam : 2 (5 dés identiques)


```txt

--------------------------------------------

    Yam Reset

--------------------------------------------

[ Enregistrer ]  <-- option facultative

Résultats : 

- Brelan : 1 (trois dés identiques)

- Carré : 1 (quatre dés indentiques)

- Double paire : 1 (deux dés X 2 identiques)

- Yam : 1 (5 dés identiques)

```

## Facultatif Si vous avez le temps améliorer l'UX du jeu.