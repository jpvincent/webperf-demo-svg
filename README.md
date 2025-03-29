# Objectif

Démo des différents manières d'inclure du SVG dans une page
- en image externe
- inline dans lt HTML (via un composant React)
- en `xlink:href`, dite méthode des sprites

Pour les modifications externes de couleur, on teste
- l'antique `currentColor`
- les custom properties CSS, dites "variables CSS"


# Commandes utiles

- avoir installé : `npm install`
- avoir build au moins une fois les SVG : `npm run svg-build`
- Pour afficher la page `npm start`
- - regarder le réseau, notamment pour le poids du JS et les images lazy-loadés
- pour mieux voir les conséquences des composants React
  - `npm run build:profiling`
  - regarder ce que contiennent les chunks, il y a les SVG composantifiés
  - trouver unused => cela signifie qu'à cause du barrel file de svgr-out, on récupère tous les SVG
  - solution : dans `package.json` passer à `"--sideEffects": false,`
- voir la page en mode bundle : `npm run serve`



Démo initialement créée à partir de [Create React App](https://github.com/facebook/create-react-app), puis eject avant modifications.

