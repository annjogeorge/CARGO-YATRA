import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Truck(){
  const groupRef = useRef()
  const wheelsRef = useRef([])
  
  useFrame(({clock})=>{
    const t = clock.getElapsedTime()
    if(groupRef.current) {
      const x = Math.cos(t*0.6)*1.3
      const z = Math.sin(t*0.6)*0.5
      const bounce = Math.abs(Math.sin(t*4))*0.02
      groupRef.current.position.set(x, -0.35 + bounce, z)
      groupRef.current.rotation.y = -t*0.6 + Math.PI/2
      groupRef.current.rotation.z = Math.sin(t*4)*0.02
    }
    
    // Rotate wheels
    wheelsRef.current.forEach(wheel => {
      if(wheel) wheel.rotation.x += 0.1
    })
  })
  
  return (
    <group ref={groupRef}>
      {/* Truck cab */}
      <mesh position={[0.25,0.12,0]}>
        <boxGeometry args={[0.18, 0.18, 0.24]} />
        <meshStandardMaterial color={'#0088ff'} metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Windshield */}
      <mesh position={[0.34,0.15,0]}>
        <boxGeometry args={[0.02, 0.12, 0.2]} />
        <meshStandardMaterial color={'#1a1a2e'} metalness={0.9} roughness={0.1} transparent opacity={0.6} />
      </mesh>
      
      {/* Cargo container */}
      <mesh position={[-0.15,0.15,0]}>
        <boxGeometry args={[0.6, 0.22, 0.24]} />
        <meshStandardMaterial color={'#f5f5f5'} metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Container branding stripes */}
      <mesh position={[-0.15,0.18,0.121]}>
        <boxGeometry args={[0.55, 0.06, 0.001]} />
        <meshStandardMaterial color={'#0088ff'} emissive={'#0088ff'} emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[-0.15,0.18,-0.121]}>
        <boxGeometry args={[0.55, 0.06, 0.001]} />
        <meshStandardMaterial color={'#0088ff'} emissive={'#0088ff'} emissiveIntensity={0.3} />
      </mesh>
      
      {/* Wheels - front */}
      <mesh 
        position={[0.22,0.0,0.14]} 
        rotation={[0,0,Math.PI/2]}
        ref={el => wheelsRef.current[0] = el}
      >
        <cylinderGeometry args={[0.06, 0.06, 0.04, 16]} />
        <meshStandardMaterial color={'#1a1a1a'} metalness={0.4} roughness={0.8} />
      </mesh>
      <mesh 
        position={[0.22,0.0,-0.14]} 
        rotation={[0,0,Math.PI/2]}
        ref={el => wheelsRef.current[1] = el}
      >
        <cylinderGeometry args={[0.06, 0.06, 0.04, 16]} />
        <meshStandardMaterial color={'#1a1a1a'} metalness={0.4} roughness={0.8} />
      </mesh>
      
      {/* Wheels - back (dual) */}
      <mesh 
        position={[-0.3,0.0,0.14]} 
        rotation={[0,0,Math.PI/2]}
        ref={el => wheelsRef.current[2] = el}
      >
        <cylinderGeometry args={[0.06, 0.06, 0.04, 16]} />
        <meshStandardMaterial color={'#1a1a1a'} metalness={0.4} roughness={0.8} />
      </mesh>
      <mesh 
        position={[-0.3,0.0,-0.14]} 
        rotation={[0,0,Math.PI/2]}
        ref={el => wheelsRef.current[3] = el}
      >
        <cylinderGeometry args={[0.06, 0.06, 0.04, 16]} />
        <meshStandardMaterial color={'#1a1a1a'} metalness={0.4} roughness={0.8} />
      </mesh>
      
      {/* Headlights */}
      <pointLight position={[0.35,0.12,0.1]} color={'#ffeb3b'} intensity={0.5} distance={0.8} />
      <pointLight position={[0.35,0.12,-0.1]} color={'#ffeb3b'} intensity={0.5} distance={0.8} />
      
      {/* Tail lights */}
      <mesh position={[-0.451,0.12,0.08]}>
        <boxGeometry args={[0.01, 0.03, 0.03]} />
        <meshStandardMaterial color={'#ff0000'} emissive={'#ff0000'} emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[-0.451,0.12,-0.08]}>
        <boxGeometry args={[0.01, 0.03, 0.03]} />
        <meshStandardMaterial color={'#ff0000'} emissive={'#ff0000'} emissiveIntensity={0.8} />
      </mesh>
    </group>
  )
}

function Road(){
  return (
    <mesh position={[0,-0.5,0]} rotation={[-Math.PI/2,0,0]}>
      <planeGeometry args={[8,8]} />
      <meshStandardMaterial 
        color={'#1a1a2e'}
        metalness={0.1}
        roughness={0.9}
      />
    </mesh>
  )
}

export default function TruckScene(){
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[2,3,1]} intensity={0.8} />
      <pointLight position={[-1,1,1]} color={'#0088ff'} intensity={0.4} />
      <Truck />
      <Road />
    </>
  )
}
