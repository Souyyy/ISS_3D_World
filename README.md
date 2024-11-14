<div align="center">
  <img align="center" width="200" src="https://github.com/Souyyy/ISS_3D_World/blob/main/public/sigle.png" alt="ISS 3D World"/>
</div>

<h3 align="center">ISS 3D World</h3>
<p align="center">Visualisation 3D interactive de la Terre avec des données en temps réel d'une API sur la position de  l'ISS.</p>
<a align="center" href="https://souyyy.github.io/ISS_3D_World/" target="_blank"><p><strong>DEMO</strong></p></a>

## Description

Ce projet est une visualisation 3D de l'ISS. Il permet de visualiser en temps réel la position de l'ISS en orbite autour de la Terre, avec une modélisation 3D de la planète et de son atmosphère. La Terre est représentée sous la forme d'une sphère, sur laquelle une texture 2D équirectangulaire est appliquée pour lui donner un aspect réaliste. Un effet de rotation de la Terre est également ajouté pour créer une dynamique visuelle et renforcer l'immersion dans l'espace.

L'ISS est représentée par un objet 3D importée directement depuis le site de la NASA pour plus de  fidèlité de la station. La position de l'ISS est calculée et mise à jour à 1seconde d'intervalle grâce à une API qui fournit les coordonnées exactes de la station. Ces coordonnées sont ensuite utilisées pour placer l'ISS à sa position correcte sur la sphère, en tenant compte de son orbite et de son déplacement.

L'application utilise également une sphère de taille beaucoup plus grande pour simuler l'effet du cosmos. La Terre, bien que centrée dans l'affichage, semble minuscule par rapport à l'étendue du cosmos, renforçant ainsi l'impact visuel de l'orbite de l'ISS.


## Prérequis
Avant de commencer, assurez-vous d'avoir une connexion haut débit et installé les outils suivants sur votre machine :

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Node.js** (version 14.0.0 ou supérieure recommandée) : [Lien du site de NodeJS](https://nodejs.org/en)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Git** : [Lien du site de Git](https://git-scm.com/downloads)

Vous pouvez vérifier leurs versions installées avec les commandes suivantes depuis votre terminal de commande :

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`node --version` -> Affiche votre version de Node.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`git --version` -> Affiche votre version de Git.


## Installation

### 1. Cloner le projet
   
Ouvrez votre terminal et exécutez la commande suivante pour cloner le dépôt :

```git clone https://github.com/Souyyy/ISS_3D_World/```

### 2. Accéder au répertoire
Naviguez dans le dossier du projet :

```cd ISS_3D_World```

### 3. Installer les dépendances
Installez toutes les dépendances nécessaires au projet :

```npm install```

Cette étape peut prendre quelques minutes selon votre connexion internet.

### 4. Lancer l'application

Démarrez le serveur de développement :

```npm start```

### 5. Accéder à l'application

Ouvrez votre navigateur web et rendez-vous à l'adresse :

```http://localhost:3000/```

## Technologies
Ce projet utilise plusieurs technologies modernes pour créer une expérience 3D interactive:

<table align="center">
  <tbody>
    <tr>
      <td  border="0">
        <img width="70" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/220px-Three.js_Icon.svg.png" alt="ThreeJS">
        <p align="center">ThreeJS</p>
      </td>
      <td>
        <img width="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/GlTF_logo.svg/langfr-130px-GlTF_logo.svg.png" alt="glTF">
        <p></p>
        <p style="top:10px;" align="center">glTF</p>
      </td>
      <td>
        <img width="75" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/220px-React_Logo_SVG.svg.png" alt="ReactJS">
        <p align="center">ReactJS</p>
      </td>
      <td>
        <img width="75" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/109px-JSON_vector_logo.svg.png" alt="Json">
        <p align="center">Json</p>
      </td>
    </tr>
  </tbody>
</table>

- Three.js est une bibliothèque JavaScript puissante qui simplifie la création et le rendu de graphiques 3D dans le navigateur.
- glTF est le format standard pour les modèles 3D.
- React est utilisé comme framework frontend principal.
- JSON est utilisé pour la gestion des données dans l'application.

## APIs

Ce projet utilise l'API [wheretheiss.at](https://wheretheiss.at/w/developer) pour suivre en temps réel la position de l'ISS. Cette API publique fournit des données précises sur la localisation et les paramètres orbitaux de l'ISS.

<table align="center">
   <tr>
    <td>https://api.wheretheiss.at/v1/satellites/25544</td>
    <td>https://api.wheretheiss.at/v1/satellites/25544/positions </td>
 </tr>
 <tr>
    <td>
       <code>{
"name": "iss",
"id": 25544,
"latitude": 50.11496269845,
"longitude": -86.82899436536,
"altitude": 408.05,
"velocity": 27635.65,
"visibility": "daylight",
"timestamp": 1364069476
}</code>
</td>
    <td><code>{
"latitude": "37.795517",
"longitude": "-122.393693",
"timezone_id": "America/Los_Angeles",
"offset": -7,
"country_code": "US",
...
}</code></td>
   
 </tr>

</table>

## Bugs Connus
### Problèmes Actuels
- Duplication de l'ISS
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Le modèle 3D de l'ISS apparaît parfois en double dans la scène.

- Localisation Indisponible
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Problème lié aux appels API car limitation des requètes.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Solution possible : Mettre en place un intervalle de 5 secondes entre les appels API.

## Licence
Ce programme est sous licence MIT.
