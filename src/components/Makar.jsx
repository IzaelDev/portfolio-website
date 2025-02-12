import { useRef, useImperativeHandle, forwardRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Makar = forwardRef(function Makar(props, ref) {
  const group = useRef()
  const gltf = useGLTF('models/makar/scene-transformed.glb');
  const { nodes, materials, animations } = gltf;
  const { names, actions } = useAnimations(animations, gltf.scene);
  actions[names[0]].timeScale = 0.8;
  actions[names[0]].play();

  useImperativeHandle(ref, () => ({
    play: () => {
      if (actions[names[0]]) {
        actions[names[0]].paused = false;
      }
    },
    stop: () => {
      if (actions[names[0]]) {
        actions[names[0]].paused=true;
      }
    },
  }));

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene" position={[-0.018, 0.54, 0.11]} scale={0.153} rotation={[ 0, 0, 0]}>
        <mesh name="0" geometry={nodes['0'].geometry} material={materials['Material.006']} morphTargetDictionary={nodes['0'].morphTargetDictionary} morphTargetInfluences={nodes['0'].morphTargetInfluences} position={[0.011, -0.076, 0.197]} rotation={[-1.571, 0.01, 0.018]} castShadow receiveShadow />
        <mesh name="1" geometry={nodes['1'].geometry} material={materials['Material.002']} morphTargetDictionary={nodes['1'].morphTargetDictionary} morphTargetInfluences={nodes['1'].morphTargetInfluences} position={[0.011, -0.076, 0.197]} rotation={[-1.571, 0.01, 0.018]} castShadow receiveShadow />
        <mesh name="2" geometry={nodes['2'].geometry} material={materials['Material.005']} morphTargetDictionary={nodes['2'].morphTargetDictionary} morphTargetInfluences={nodes['2'].morphTargetInfluences} position={[-0.008, -0.076, 0]} rotation={[-1.571, 0.01, 0.018]} castShadow receiveShadow />
        <mesh name="3" geometry={nodes['3'].geometry} material={materials['Material.002']} morphTargetDictionary={nodes['3'].morphTargetDictionary} morphTargetInfluences={nodes['3'].morphTargetInfluences} position={[-0.008, -0.076, 0]} rotation={[-1.571, 0.01, 0.018]} castShadow receiveShadow />
      </group>
    </group>
  )
});

useGLTF.preload('models/makar/scene-transformed.glb')

export default Makar;
