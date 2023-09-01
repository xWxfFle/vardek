import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    doorHandle_0: THREE.Mesh
    Door_0: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

export const Door = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF('/door.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.doorHandle_0.geometry}
          material={materials.Material}
          position={[-0.001, 0.554, 1.109]}
          scale={0.055}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_0.geometry}
          material={materials['Material.001']}
          position={[-0.027, 0, 1.258]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/door.glb')
