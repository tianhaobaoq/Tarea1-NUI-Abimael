import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function XrCone() {
  const coneRef = useRef();

  useFrame((state, delta) => {
    coneRef.current.rotation.y += delta;
  });

  return (
    <>
      <OrbitControls />
      <ambientLight />
      {/* Cambiando el mesh a un cono */}
      <mesh ref={coneRef} position={[0, 0, -5]}>
        <coneGeometry args={[1, 2, 16]} /> {/* args: [radius, height, radialSegments] */}
        <meshStandardMaterial color="black" />
      </mesh>
    </>
  );
}

export default XrCone;
