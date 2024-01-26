import React from 'react';
import { useLoader, Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ARButton, XR } from "@react-three/xr";
import Dashboard from '../Dashboard';

function Scene() {
  const gltf = useLoader(GLTFLoader, '/model.gltf');
  const scale = 3;

  gltf.scene.position.y = -1 * scale;

  return (
    <>
      {/* Establecemos su tamaño */}
      <primitive object={gltf.scene} scale={[scale, scale, scale]} />


      {/* Le ponemos luz al modelo */}
      <directionalLight intensity={1} position={[5, 5, 5]} />
    </>
  );
}
function ARAbimael() {
  return (
    <> 
      <Dashboard />
      <ARButton />
      <Canvas>
        <XR>
          <Scene />
        </XR>
      </Canvas>
    </>
  );
}
export default ARAbimael;
