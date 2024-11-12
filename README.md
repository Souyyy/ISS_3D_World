<div align="center">
  <img align="center" width="200" src="https://github.com/Souyyy/ISS_3D_World/blob/main/public/sigle.png" alt="ISS 3D World"/>
</div>

<h3 align="center">ReadMe à terminer</h3>

<h3 align="center">ISS 3D World</h3>
<p align="center">Visualisation 3D interactive de la Terre avec des données en temps réel d'une API sur la position de  l'ISS.</p>
<a align="center" href="https://souyyy.github.io/ISS_3D_World/" target="_blank"><p><strong>DEMO</strong></p></a>

<div align="center" style="display:flex;">
  <a href="">Raporter un bug</a> · 
  <a href="">Ajout d'une feature</a>
</div>

## Description

## Prérequis
Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre machine :

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Node.js** (version 14.0.0 ou supérieure recommandée) : [Lien du site de NodeJS](https://nodejs.org/en)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Git** : [Lien du site de Git](https://git-scm.com/downloads)

Vous pouvez vérifier leurs versions installées avec les commandes suivantes depuis votre terminal de commande :

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`node --version` -> Affiche votre version de Node.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`git --version` -> Affiche votre version de Git.


## Installation

### 1. Cloner le projet
   
Ouvrez votre terminal et exécutez la commande suivante pour cloner le dépôt :

```clone https://github.com/Souyyy/ISS_3D_World/```

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

## Knowns bugs
- Duplication de l'ISS
- Localisation Indisponible (Prbl appel API (limitation -> Resolution : Appel toute les 5 secondes ?)
