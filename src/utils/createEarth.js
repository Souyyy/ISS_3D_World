import * as THREE from 'three';
import earthTexture from '../images/earth_4k.jpg';
import bumpMapTexture from '../images/bump_4k.jpg';
import specularMapTexture from '../images/water_4k.png';
import { createTextureLoader } from '../helpers';

// Fonction pour créer la Terre
export const createEarth = (renderer, earthGroupRef) => {
  const loadTexture = createTextureLoader(renderer);
  const earth = new THREE.Mesh(
    // Réglage de la Terre
    new THREE.SphereGeometry(1, 64, 64),
    new THREE.MeshPhongMaterial({
      map: loadTexture(earthTexture),
      bumpMap: loadTexture(bumpMapTexture),
      bumpScale: 0.02,
      specularMap: loadTexture(specularMapTexture),
      specular: new THREE.Color(0x111111),
      shininess: 5,
    })
  );

  const atmosphere = new THREE.Mesh(
    // Réglage de la l'atmosphere
    new THREE.SphereGeometry(1.02, 64, 64),
    new THREE.MeshPhongMaterial({
      transparent: true,
      opacity: 0.01,
      side: THREE.BackSide,
      color: new THREE.Color(0xffffff),
    })
  );

  // Ajoute la Terre et l'atmosphère au groupe
  earthGroupRef.current.add(earth);
  earthGroupRef.current.add(atmosphere);

  // Rotations de la Terre en fonction des vrais paramètres de la Terre
  earthGroupRef.current.rotation.z = THREE.MathUtils.degToRad(-23.5);
  earthGroupRef.current.rotation.y = THREE.MathUtils.degToRad(-90);
};