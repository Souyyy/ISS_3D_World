export const handleResize = (cameraRef, rendererRef) => {
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
  
      const { current: camera } = cameraRef;
      const { current: renderer } = rendererRef;
  
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
  
    return handleResize;
  };