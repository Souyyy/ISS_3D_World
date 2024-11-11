import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import SplashScreenLogo from './components/SplashScreenLogo';
import ISSInfo from './components/ISSInfo';
import { initScene } from './utils/initScene';
import { createEarth } from './utils/createEarth';
import { loadIssModel } from './utils/loadIssModel';
import { animate } from './utils/animate';
import { fetchIssData } from './utils/fetchIssData';
import { handleResize } from './utils/handleResize';
import { ISS_UPDATE_INTERVAL } from './constants';

function App() {
  // État 
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [issData, setIssData] = useState(null);
  const [position, setPosition] = useState(null);
  // Référence
  const mountRef = useRef(null);
  const earthGroupRef = useRef(new THREE.Group()); 
  const issModelRef = useRef(null); 
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const animationFrameRef = useRef(null);

  // useEffect pour init
  useEffect(() => {
    const { scene, renderer, camera, controls } = initScene(mountRef.current);
    rendererRef.current = renderer;
    sceneRef.current = scene;
    cameraRef.current = camera;
    controlsRef.current = controls;
    scene.add(earthGroupRef.current);

    createEarth(renderer, earthGroupRef);
    loadIssModel(issModelRef, earthGroupRef);

    const ambientLight = new THREE.AmbientLight(0x555555, 10);
    scene.add(ambientLight);

    window.addEventListener('resize', handleResize(cameraRef, rendererRef));

    // Faire l'animation animation
    animate(rendererRef, sceneRef, cameraRef, controlsRef, earthGroupRef, animationFrameRef);

    return () => {
      window.removeEventListener('resize', handleResize);
      controlsRef.current?.dispose();
      rendererRef.current?.dispose();
      cancelAnimationFrame(animationFrameRef.current);
      mountRef.current?.removeChild(rendererRef.current.domElement);
    };
  }, []);

  // useEffect pour récupérer les données de l'ISS
  useEffect(() => {
    fetchIssData(issModelRef, setIssData, setPosition);
    const interval = setInterval(() => fetchIssData(issModelRef, setIssData, setPosition), ISS_UPDATE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // useEffect pour afficher et masquer l'écran de splash
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
<div>
    {showSplashScreen && <SplashScreenLogo />}
    <div ref={mountRef} style={{ width: '100%', height: '100vh' }}>
      {issData && <div
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          color: 'white',
          background: 'rgba(0,0,0,0.5)',
          padding: '20px',
          borderRadius: '15px',
        }}
      ><ISSInfo data={{ ...issData, position }} /></div>}
    </div></div>

  );
}

export default App;