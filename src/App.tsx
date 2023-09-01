import { OrbitControls, RoundedBox, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Door } from './shared/ui/door'

export const App = () => (
  <div className="h-screen w-full bg-slate-100">
    <Canvas className="h-screen w-full">
      <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} color="red" />
      <pointLight position={[-10, -10, -10]} color="blue" />
      <Stage intensity={0.1}>
        <RoundedBox
          args={[1, 1, 1]}
          radius={0.05}
          smoothness={4}
          creaseAngle={0.4}
          position={[6, 0, 2]}
        >
          <meshPhongMaterial color="#f3f3f3" wireframe />
        </RoundedBox>
        
        <mesh castShadow receiveShadow position={[2.75, 0, 0]} scale={0.75}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial color="hotpink" roughness={0} />
        </mesh>

        <Door />
      </Stage>
      <OrbitControls enablePan={false} />
    </Canvas>
  </div>
)
