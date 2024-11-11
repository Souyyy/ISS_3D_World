import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import spaceTexture from '../images/star.png';

export const initScene = (mountRef) => {
  // Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  // Texture de ciel étoilé
  const starTexture = new THREE.TextureLoader().load(spaceTexture);
  const starMaterial = new THREE.MeshBasicMaterial({
    map: starTexture,
    side: THREE.BackSide,
    opacity: 0.6,
    transparent: true,
    color: new THREE.Color(0x626262)
  });

  // Création d'une sphère pour le ciel étoilé
  const skySphere = new THREE.SphereGeometry(500, 60, 60);
  const skyMesh = new THREE.Mesh(skySphere, starMaterial);
  scene.add(skyMesh);

  // Camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 1.5, 2.5);
  camera.lookAt(0, 0, 0);

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  mountRef.appendChild(renderer.domElement);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.rotateSpeed = 0.5;
  controls.minDistance = 1.5;
  controls.maxDistance = 4;
  controls.enablePan = false;

  return { scene, renderer, camera, controls };
};