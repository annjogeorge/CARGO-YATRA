import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Truck(){
  const groupRef = useRef()
  const wheelsRef = useRef([])
  
  useFrame(({clock})=>{
    const t = clock.getElapsedTime()
    if(groupRef.current) {
      const bounce = Math.abs(Math.sin(t*3))*0.015
      groupRef.current.position.set(Math.cos(t*0.9)*1.1, -0.4 + bounce, Math.sin(t*0.9)*0.3)
      groupRef.current.rotation.y = -t*0.9 + Math.PI/2
    }
    
    // Rotate wheels
    wheelsRef.current.forEach(wheel => {
      if(wheel) wheel.rotation.x += 0.08
    })
  })
  
  return (
    <group ref={groupRef}>
      {/* Cab */}
      <mesh position={[0.2,0.1,0]}>
        <boxGeometry args={[0.16, 0.16, 0.22]} />
        <meshStandardMaterial color={'#0088ff'} metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Windshield */}
      <mesh position={[0.28,0.12,0]}>
        <boxGeometry args={[0.02, 0.1, 0.18]} />
        <meshStandardMaterial color={'#1a1a2e'} metalness={0.9} roughness={0.1} transparent opacity={0.5} />
      </mesh>
      
      {/* Container */}
      <mesh position={[-0.12,0.12,0]}>
        <boxGeometry args={[0.5, 0.2, 0.22]} />
        <meshStandardMaterial color={'#f5f5f5'} metalness={0.2} roughness={0.7} />
      </mesh>
      
      {/* Stripe */}
      <mesh position={[-0.12,0.15,0.111]}>
        <boxGeometry args={[0.48, 0.05, 0.001]} />
        <meshStandardMaterial color={'#0088ff'} emissive={'#0088ff'} emissiveIntensity={0.2} />
      </mesh>
      
      {/* Wheels */}
      <mesh 
        position={[0.18,0.02,0.12]} 
        rotation={[0,0,Math.PI/2]}
        ref={el => wheelsRef.current[0] = el}
      >
        <cylinderGeometry args={[0.05, 0.05, 0.04, 12]} />
        <meshStandardMaterial color={'#1a1a1a'} metalness={0.3} roughness={0.8} />
      </mesh>
      <mesh 
        position={[0.18,0.02,-0.12]} 
        rotation={[0,0,Math.PI/2]}
        ref={el => wheelsRef.current[1] = el}
      >
        <cylinderGeometry args={[0.05, 0.05, 0.04, 12]} />
        <meshStandardMaterial color={'#1a1a1a'} metalness={0.3} roughness={0.8} />
      </mesh>
      <mesh 
        position={[-0.25,0.02,0.12]} 
        rotation={[0,0,Math.PI/2]}
        ref={el => wheelsRef.current[2] = el}
      >
        <cylinderGeometry args={[0.05, 0.05, 0.04, 12]} />
        <meshStandardMaterial color={'#1a1a1a'} metalness={0.3} roughness={0.8} />
      </mesh>
      <mesh 
        position={[-0.25,0.02,-0.12]} 
        rotation={[0,0,Math.PI/2]}
        ref={el => wheelsRef.current[3] = el}
      >
        <cylinderGeometry args={[0.05, 0.05, 0.04, 12]} />
        <meshStandardMaterial color={'#1a1a1a'} metalness={0.3} roughness={0.8} />
      </mesh>
      
      {/* Headlights */}
      <pointLight position={[0.28,0.1,0.08]} color={'#ffeb3b'} intensity={0.4} distance={0.6} />
      <pointLight position={[0.28,0.1,-0.08]} color={'#ffeb3b'} intensity={0.4} distance={0.6} />
    </group>
  )
}

export default function TruckScene(){
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2,3,1]} intensity={0.6} />
      <Truck />
    </>
  )
}
