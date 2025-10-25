import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

function Globe(){
  const ref = useRef()
  useFrame((state, delta)=>{
    if(ref.current) ref.current.rotation.y += delta * 0.05
  })
  return (
    <mesh ref={ref} position={[0,0,0]}>
      <sphereGeometry args={[2.2, 64, 64]} />
      <meshStandardMaterial roughness={0.6} metalness={0.1} color="#08263a" emissive="#002b3a" emissiveIntensity={0.6} />
    </mesh>
  )
}

function Shipment({color='cyan', radius=2.8, speed=0.6, size=0.06, offset=0}){
  const ref = useRef()
  useFrame(({clock})=>{
    const t = clock.getElapsedTime() * speed + offset
    const x = Math.cos(t) * radius
    const z = Math.sin(t) * radius
    const y = Math.sin(t*2) * 0.2
    if(ref.current) {
      ref.current.position.set(x,y,z)
      ref.current.rotation.y = -t*2
    }
  })
  return (
    <mesh ref={ref}>
      <boxGeometry args={[size*1.6, size, size]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} metalness={0.5} />
    </mesh>
  )
}

export default function HeroScene(){
  return (
    <>
      <Globe />
      {/* planes / ships / trucks as simple moving primitives */}
      <Shipment color={'#00f0ff'} radius={3.6} speed={0.6} offset={0} />
      <Shipment color={'#ff7a18'} radius={2.6} speed={0.9} offset={1.2} />
      <Shipment color={'#0088ff'} radius={3.0} speed={0.4} offset={2.1} />
    </>
  )
}
