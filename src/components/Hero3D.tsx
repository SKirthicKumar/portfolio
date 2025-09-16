import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center, Sphere, MeshDistortMaterial, Environment, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingGeometry = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }
    
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.2;
      sphereRef.current.rotation.z = time * 0.1;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.3;
      torusRef.current.rotation.y = time * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        {/* Main Distorted Sphere */}
        <Sphere ref={sphereRef} args={[1.2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#a855f7"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
        
        {/* Orbiting Ring with Glow */}
        <Float speed={4} rotationIntensity={2}>
          <mesh ref={torusRef} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <torusGeometry args={[2, 0.15, 16, 100]} />
            <meshStandardMaterial
              color="#3b82f6"
              emissive="#3b82f6"
              emissiveIntensity={0.5}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
        </Float>
        
        {/* Secondary Ring */}
        <Float speed={3} rotationIntensity={1.5}>
          <mesh rotation={[0, Math.PI / 4, Math.PI / 3]} position={[0, 0, 0]}>
            <torusGeometry args={[1.6, 0.08, 16, 100]} />
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#06b6d4"
              emissiveIntensity={0.3}
              roughness={0.2}
              metalness={0.7}
            />
          </mesh>
        </Float>
        
        {/* Orbiting Spheres with Trail Effect */}
        {[...Array(6)].map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 3.5;
          return (
            <Float key={i} speed={2 + i * 0.5} rotationIntensity={1}>
              <mesh position={[
                Math.cos(angle) * radius,
                Math.sin(angle) * 0.8,
                Math.sin(angle) * radius
              ]}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial
                  color={i % 2 === 0 ? "#8b5cf6" : "#0ea5e9"}
                  emissive={i % 2 === 0 ? "#8b5cf6" : "#0ea5e9"}
                  emissiveIntensity={0.6}
                  roughness={0.1}
                  metalness={0.8}
                />
              </mesh>
            </Float>
          );
        })}
      </Float>
    </group>
  );
};

const Hero3D = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ 
            position: [0, 0, 8], 
            fov: 75,
            near: 0.1,
            far: 1000
          }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
          }}
          dpr={[1, 2]}
          style={{ 
            width: '100%', 
            height: '100%',
            background: 'transparent'
          }}
        >
          <color attach="background" args={['transparent']} />
          <Suspense fallback={null}>
            {/* Enhanced Lighting */}
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
            <pointLight position={[-10, -10, -10]} intensity={0.6} color="#3b82f6" />
            <spotLight 
              position={[0, 10, 5]} 
              intensity={0.8} 
              color="#06b6d4"
              angle={0.3}
              penumbra={1}
              castShadow
            />
            
            {/* Environment for Reflections */}
            <Environment preset="night" />
            
            {/* Stars Background */}
            <Stars 
              radius={300} 
              depth={60} 
              count={1000} 
              factor={7} 
              saturation={0} 
            />
            
            <FloatingGeometry />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI * 0.7}
              minPolarAngle={Math.PI * 0.3}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 text-foreground"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text animate-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Hi, I'm Alex
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Creative Frontend Developer specializing in immersive web experiences
            with cutting-edge animations and interactive 3D elements
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-primary rounded-2xl text-primary-foreground font-bold text-xl transition-all duration-300 glow"
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 glass-strong rounded-2xl font-bold text-xl transition-all duration-300 text-foreground border border-white/30 hover:bg-white/20"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-12 border-2 border-primary rounded-full flex justify-center glow"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-4 bg-gradient-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;