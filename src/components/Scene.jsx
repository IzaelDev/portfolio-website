import { useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Island, Makar } from './index';
import { useRef } from 'react';

function Scene({ modelRef }) {
  const islandRef = useRef();

  return (
    <>
      <OrbitControls target={[0, 0.42, 0]} maxPolarAngle={1.35} minPolarAngle={1.35} enableZoom={false} />
      <PerspectiveCamera makeDefault position={[0, 0.35, 1]} />
      <ambientLight intensity={0.8} castShadow={false} />
      <Makar ref={modelRef} />
      <Island/>
      <directionalLight
        className="bg-[#ffebc4]"
        castShadow
        position={[1, 100, -1]}
        intensity={2.5}
        color={"#ffebc4"}
        shadow-bias={-0.0001}
        shadow-normalBias={0.01}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
      >
        <orthographicCamera attach="shadow-camera" />
      </directionalLight>
    </>
  );
}

export default Scene;