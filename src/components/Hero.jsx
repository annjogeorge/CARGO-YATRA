import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Html } from '@react-three/drei'
import HeroScene from './three/HeroScene'

export default function Hero(){
  return (
    <section className="h-[70vh] md:h-[80vh] relative">
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold neon-glow">Global logistics, accelerated</h1>
          <p className="mt-4 text-gray-300/90">Real-time shipments across air, ocean and land, visualized in cinematic 3D.</p>
        </div>
      </div>

      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.6} />
        <directionalLight position={[5,5,5]} intensity={1} />
        <HeroScene />
        <Stars radius={200} depth={50} count={3000} factor={4} saturation={0} fade />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={0.1} />
      </Canvas>
    </section>
  )
}
