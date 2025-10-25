import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Trail } from '@react-three/drei'

function Plane(){
  const groupRef = useRef()
  
  useFrame(({clock})=>{
    const t = clock.getElapsedTime()
    if(groupRef.current) {
      const x = Math.cos(t*0.8)*1.5
      const y = Math.sin(t*0.8)*0.5 + 0.5
      const z = Math.sin(t*0.8)*0.8
      groupRef.current.position.set(x, y, z)
      groupRef.current.rotation.y = -t*0.8 + Math.PI/2
      groupRef.current.rotation.z = Math.sin(t*2)*0.1
    }
  })
  
  return (
    <Trail
      width={0.5}
      length={8}
      color={'#00f0ff'}
      attenuation={(t) => t * t}
    >
      <group ref={groupRef}>
        {/* Fuselage */}
        <mesh position={[0,0,0]}>
          <cylinderGeometry args={[0.06, 0.04, 0.5, 16]} />
          <meshStandardMaterial color={'#e8f4f8'} metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Nose cone */}
        <mesh position={[0,0.25,0]} rotation={[0,0,0]}>
          <coneGeometry args={[0.06, 0.15, 16]} />
          <meshStandardMaterial color={'#00f0ff'} emissive={'#00f0ff'} emissiveIntensity={0.4} metalness={0.9} />
        </mesh>
        
        {/* Wings */}
        <mesh position={[0,-0.05,0]} rotation={[0,0,Math.PI/2]}>
          <boxGeometry args={[0.08, 0.8, 0.15]} />
          <meshStandardMaterial color={'#c0d8e0'} metalness={0.7} roughness={0.3} />
        </mesh>
        
        {/* Tail wing */}
        <mesh position={[0,-0.22,0.1]} rotation={[Math.PI/4,0,0]}>
          <boxGeometry args={[0.3, 0.08, 0.12]} />
          <meshStandardMaterial color={'#c0d8e0'} metalness={0.7} roughness={0.3} />
        </mesh>
        
        {/* Engine glow */}
        <pointLight position={[0,-0.25,0]} color={'#00f0ff'} intensity={0.5} distance={1} />
      </group>
    </Trail>
  )
}

export default function AirScene(){
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3,3,2]} intensity={0.8} />
      <pointLight position={[-2,2,2]} color={'#00f0ff'} intensity={0.3} />
      <Plane />
      
      {/* Sky gradient effect */}
      <mesh position={[0,0,-2]}>
        <planeGeometry args={[10,10]} />
        <meshBasicMaterial color={'#0a1628'} />
      </mesh>
    </>
  )
}
