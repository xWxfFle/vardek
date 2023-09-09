/* eslint-disable react/no-unknown-property */
import {
  MeshReflectorMaterial,
  OrbitControls,
  RoundedBox,
  Stage,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Door } from './shared/ui/door'

export const App = () => (
  <div className="h-screen w-full bg-slate-100">
    <Canvas className="h-screen w-full" shadows>
      <color attach="background" args={['#242533']} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.3, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          color="#171720"
          mirror={0}
        />
      </mesh>
      <Stage>
        <RoundedBox
          castShadow
          receiveShadow
          args={[1, 1, 1]}
          radius={0.05}
          smoothness={4}
          creaseAngle={0.4}
          position={[4, 0.5, 1]}
          scale={0.75}
        >
          <MeshReflectorMaterial resolution={1024} color="#49d012" mirror={0} />
        </RoundedBox>
        <Door />
      </Stage>
      <OrbitControls enablePan={false} />
    </Canvas>
  </div>
)
