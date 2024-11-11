//Import de la constante
import { EARTH_ROTATION_SPEED } from '../constants';

// Fonction d'animation
export const animate = (rendererRef, sceneRef, cameraRef, controlsRef, earthGroupRef, animationFrameRef) => {
  const animate = () => {
    if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;

    // Références de contrôles, de renderer, de scène et de caméra
    const { current: controls } = controlsRef;
    const { current: renderer } = rendererRef;
    const { current: scene } = sceneRef;
    const { current: camera } = cameraRef;
    const { current: earthGroup } = earthGroupRef;

    if (controls) controls.update();

    // Fait tourner le groupe contenant la Terre autour de l'axe Y
    earthGroup.rotation.y += EARTH_ROTATION_SPEED;

    renderer.render(scene, camera);

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  animate();
};
