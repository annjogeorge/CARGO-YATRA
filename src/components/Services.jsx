import React from 'react'
import { Canvas } from '@react-three/fiber'
import AirScene from './three/AirScene'
import OceanScene from './three/OceanScene'
import TruckScene from './three/TruckScene'

export default function Services(){
  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold neon-glow text-center">Our Services</h2>
      <p className="text-center text-gray-300/80 mt-2">Air, Ocean and Truck — visualized with animated 3D models.</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#071022] p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Air</h3>
          <div className="h-48 mt-4 bg-transparent rounded overflow-hidden">
            <Canvas>
              <AirScene />
            </Canvas>
          </div>
        </div>

        <div className="bg-[#071022] p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Ocean</h3>
          <div className="h-48 mt-4 bg-transparent rounded overflow-hidden">
            <Canvas>
              <OceanScene />
            </Canvas>
          </div>
        </div>

        <div className="bg-[#071022] p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Truck</h3>
          <div className="h-48 mt-4 bg-transparent rounded overflow-hidden">
            <Canvas>
              <TruckScene />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}
