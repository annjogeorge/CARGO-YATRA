import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import TrackingScene from './three/TrackingScene'

export default function Tracking(){
  return (
    <section className="py-16 bg-[#04050a]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold neon-glow">Shipment Tracking</h2>
        <p className="text-gray-300/80 mt-2">Interactive globe with live-tracking-style markers.</p>

        <div className="mt-6 h-96 rounded-lg overflow-hidden bg-[#071022] shadow-xl">
          <Canvas>
            <TrackingScene />
          </Canvas>
        </div>
      </div>
    </section>
  )
}
