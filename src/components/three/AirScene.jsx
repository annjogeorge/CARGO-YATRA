import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Plane(){
  const groupRef = useRef()
  
  useFrame(({clock})=>{
    const t = clock.getElapsedTime()
    if(groupRef.current) {
      groupRef.current.position.set(Math.cos(t*1.2)*1.2, Math.sin(t*1.2)*0.4+0.4, Math.sin(t*1.2)*0.6)
      groupRef.current.rotation.y = -t*1.2
      groupRef.current.rotation.z = Math.sin(t*2)*0.1
    }
  })
  
  return (
    <group ref={groupRef}>
      {/* Fuselage */}
      <mesh position={[0,0,0]} rotation={[0,0,Math.PI/2]}>
        <cylinderGeometry args={[0.05, 0.04, 0.4, 12]} />
        <meshStandardMaterial color={'#e8f4f8'} metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Nose */}
      <mesh position={[0.2,0,0]} rotation={[0,Math.PI/2,0]}>
        <coneGeometry args={[0.05, 0.12, 12]} />
        <meshStandardMaterial color={'#00f0ff'} emissive={'#00a8cc'} emissiveIntensity={0.3} />
      </mesh>
      
      {/* Wings */}
      <mesh position={[0,0,0]}>
        <boxGeometry args={[0.08, 0.65, 0.12]} />
        <meshStandardMaterial color={'#b8d4e0'} metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Tail */}
      <mesh position={[-0.18,0,0.08]} rotation={[Math.PI/4,0,0]}>
        <boxGeometry args={[0.08, 0.25, 0.1]} />
        <meshStandardMaterial color={'#b8d4e0'} metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Engine glow */}
      <pointLight position={[-0.2,0,0]} color={'#00f0ff'} intensity={0.4} distance={0.8} />
    </group>
  )
}

export default function AirScene(){
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3,3,2]} intensity={0.6} />
      <Plane />
    </>
  )
}
