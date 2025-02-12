import { useGLTF } from '@react-three/drei'

export function Island(props) {
  const { nodes, materials } = useGLTF('models/island/scene-transformed.glb')
  return (
    <group {...props} dispose={null} position={[ 0, 0.499, 0]} scale={0.00117} rotation={[0, Math.PI / 6, 0]}>
      <mesh geometry={nodes.Top_01_LP_Top_0.geometry} material={materials.material} rotation={[0, -1.173, 0]} castShadow receiveShadow />
      <mesh geometry={nodes.Bottom_01_LP_Bottom_0.geometry} material={materials.Bottom} rotation={[0, -1.173, 0]} castShadow receiveShadow/>
      <mesh geometry={nodes.Cloth_01_LP_DetailsCloth_0.geometry} material={materials.DetailsCloth} rotation={[0, -1.173, 0]} castShadow receiveShadow/>
      <mesh geometry={nodes.Grass_01_OtherNature_0.geometry} material={materials.OtherNature} castShadow receiveShadow />
      <mesh geometry={nodes.Plant_01_LP_Leaves_0.geometry} material={materials.Leaves} castShadow receiveShadow />
      <mesh geometry={nodes.Rock_01_LP_BigRocks_0.geometry} material={materials.BigRocks} castShadow receiveShadow />
      <mesh geometry={nodes.Tree_01_LP_BigTree_0.geometry} material={materials.BigTree} castShadow receiveShadow />
    </group>
  )
}

useGLTF.preload('models/island/scene-transformed.glb')

export default Island;
