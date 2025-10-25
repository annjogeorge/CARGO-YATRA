import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Ship(){
  const groupRef = useRef()
  
  useFrame(({clock})=>{
    const t = clock.getElapsedTime()
    if(groupRef.current) {
      const bobbing = Math.sin(t*2)*0.03
      groupRef.current.position.set(Math.cos(t*0.7)*1.0, -0.3 + bobbing, Math.sin(t*0.7)*0.6)
      groupRef.current.rotation.y = -t*0.7
      groupRef.current.rotation.z = Math.sin(t*1.5)*0.06
    }
  })
  
  return (
    <group ref={groupRef}>
      {/* Hull */}
      <mesh position={[0,0,0]}>
        <boxGeometry args={[0.6, 0.12, 0.22]} />
        <meshStandardMaterial color={'#ff7a18'} metalness={0.5} roughness={0.4} />
      </mesh>
      
      {/* Hull bottom */}
      <mesh position={[0,-0.07,0]} scale={[0.85,0.6,1]}>
        <boxGeometry args={[0.6, 0.05, 0.22]} />
        <meshStandardMaterial color={'#d65010'} metalness={0.4} roughness={0.5} />
      </mesh>
      
      {/* Containers */}
      <mesh position={[-0.12,0.1,0]}>
        <boxGeometry args={[0.14, 0.1, 0.18]} />
        <meshStandardMaterial color={'#2a5a8f'} metalness={0.3} roughness={0.7} />
      </mesh>
      <mesh position={[0.05,0.1,0]}>
        <boxGeometry args={[0.14, 0.1, 0.18]} />
        <meshStandardMaterial color={'#c62828'} metalness={0.3} roughness={0.7} />
      </mesh>
      <mesh position={[0.22,0.1,0]}>
        <boxGeometry args={[0.14, 0.1, 0.18]} />
        <meshStandardMaterial color={'#2e7d32'} metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Bridge */}
      <mesh position={[0.26,0.17,0]}>
        <boxGeometry args={[0.1, 0.15, 0.16]} />
        <meshStandardMaterial color={'#f0f0f0'} metalness={0.4} roughness={0.6} />
      </mesh>
      
      {/* Smokestack */}
      <mesh position={[0.24,0.27,0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.06, 8]} />
        <meshStandardMaterial color={'#424242'} metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Lights */}
      <pointLight position={[0.3,0.12,0]} color={'#ff7a18'} intensity={0.3} distance={0.6} />
    </group>
  )
}

export default function OceanScene(){
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[-2,3,1]} intensity={0.6} />
      <Ship />
    </>
  )
}
