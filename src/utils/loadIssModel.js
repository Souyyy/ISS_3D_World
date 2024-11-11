import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import issModelUrl from '../models/ISS_stationary.glb';
import { ISS_SCALE } from '../constants';

// Fonction pour charger le modèle 3D
export const loadIssModel = (issModelRef, earthGroupRef) => {
  const loader = new GLTFLoader();
  // Charge le modèle de l'ISS
  loader.load(
    issModelUrl,
    (gltf) => {
      const model = gltf.scene;
      model.rotation.y = Math.PI / 1.5;
      model.scale.set(ISS_SCALE, ISS_SCALE, ISS_SCALE);
      model.traverse((child) => {
        if (child.isMesh) {
          // Appliquer une couleur rouge à l'ISS
          child.material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
        }
      });
      issModelRef.current = model;
      earthGroupRef.current.add(model);
    },
    undefined,
    (error) => console.error('Erreur de chargement du modèle ISS:', error)
  );
};