'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sphere } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { Mesh, Color } from 'three';

function FloatingShape({ position, shape = 'box', delay = 0 }: { position: [number, number, number]; shape?: 'box' | 'sphere' | 'octahedron' | 'torus'; delay?: number }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime + delay) * 0.3;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime + delay) * 0.2;
    }
  });

  const wireframe = useMemo(() => Math.random() > 0.6, []);

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={1.2}
      floatingRange={[-0.8, 0.8]}
    >
      <mesh ref={meshRef} position={position}>
        {shape === 'box' && <boxGeometry args={[1.2, 1.2, 1.2]} />}
        {shape === 'sphere' && <sphereGeometry args={[0.8, 20, 20]} />}
        {shape === 'octahedron' && <octahedronGeometry args={[1]} />}
        {shape === 'torus' && <torusGeometry args={[0.8, 0.3, 8, 16]} />}
        <meshStandardMaterial
          color="#8b7cf6"
          transparent
          opacity={wireframe ? 0.4 : 0.8}
          wireframe={wireframe}
          emissive={new Color('#8b7cf6')}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#8b7cf6" />
      <pointLight position={[0, 0, 15]} intensity={0.8} color="#a855f7" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#8b7cf6"
        castShadow
      />
      
      {/* More shapes spread across full width */}
      <FloatingShape position={[-12, 2, -2]} shape="box" delay={0} />
      <FloatingShape position={[-8, -1, 1]} shape="sphere" delay={0.5} />
      <FloatingShape position={[-4, 3, -1]} shape="octahedron" delay={1} />
      <FloatingShape position={[0, -2, -3]} shape="torus" delay={1.5} />
      <FloatingShape position={[4, 1, 0]} shape="box" delay={2} />
      <FloatingShape position={[8, -1, -2]} shape="sphere" delay={2.5} />
      <FloatingShape position={[12, 2, 1]} shape="octahedron" delay={3} />
      <FloatingShape position={[-10, -3, 2]} shape="torus" delay={3.5} />
      <FloatingShape position={[0, 4, -4]} shape="sphere" delay={4} />
      <FloatingShape position={[10, -3, 3]} shape="box" delay={4.5} />
      <FloatingShape position={[-6, 1, -1]} shape="torus" delay={5} />
      <FloatingShape position={[6, 3, 2]} shape="sphere" delay={5.5} />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-96 relative">
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50"></div>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 90 }}
        style={{ background: 'transparent' }}
        shadows
      >
        <Scene />
      </Canvas>
    </div>
  );
}