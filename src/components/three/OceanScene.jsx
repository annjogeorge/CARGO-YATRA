import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Ship(){
  const groupRef = useRef()
  
  useFrame(({clock})=>{
    const t = clock.getElapsedTime()
    if(groupRef.current) {
      const x = Math.cos(t*0.5)*1.2
      const z = Math.sin(t*0.5)*0.8
      const bobbing = Math.sin(t*3)*0.03
      groupRef.current.position.set(x, -0.2 + bobbing, z)
      groupRef.current.rotation.y = -t*0.5
      groupRef.current.rotation.x = Math.sin(t*2)*0.05
      groupRef.current.rotation.z = Math.sin(t*1.5)*0.08
    }
  })
  
  return (
    <group ref={groupRef}>
      {/* Ship hull */}
      <mesh position={[0,0,0]}>
        <boxGeometry args={[0.7, 0.15, 0.25]} />
        <meshStandardMaterial color={'#ff7a18'} metalness={0.6} roughness={0.4} />
      </mesh>
      
      {/* Hull bottom (V-shape) */}
      <mesh position={[0,-0.08,0]} scale={[0.9,0.8,1]}>
        <boxGeometry args={[0.7, 0.05, 0.25]} />
        <meshStandardMaterial color={'#d64810'} metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Cargo containers */}
      <mesh position={[-0.15,0.12,0]}>
        <boxGeometry args={[0.15, 0.12, 0.2]} />
        <meshStandardMaterial color={'#2a5a8f'} metalness={0.3} roughness={0.7} />
      </mesh>
      <mesh position={[0.05,0.12,0]}>
        <boxGeometry args={[0.15, 0.12, 0.2]} />
        <meshStandardMaterial color={'#d84315'} metalness={0.3} roughness={0.7} />
      </mesh>
      <mesh position={[0.25,0.12,0]}>
        <boxGeometry args={[0.15, 0.12, 0.2]} />
        <meshStandardMaterial color={'#1b5e20'} metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Bridge/cockpit */}
      <mesh position={[0.3,0.2,0]}>
        <boxGeometry args={[0.12, 0.18, 0.18]} />
        <meshStandardMaterial color={'#f5f5f5'} metalness={0.4} roughness={0.6} />
      </mesh>
      
      {/* Smokestack */}
      <mesh position={[0.28,0.32,0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.08, 8]} />
        <meshStandardMaterial color={'#424242'} metalness={0.8} roughness={0.3} />
      </mesh>
      
      {/* Navigation lights */}
      <pointLight position={[0.35,0.15,0]} color={'#ff7a18'} intensity={0.4} distance={0.8} />
      <pointLight position={[-0.35,0.08,0]} color={'#00ff00'} intensity={0.3} distance={0.6} />
    </group>
  )
}

function Ocean(){
  const ref = useRef()
  
  useFrame(({clock})=>{
    if(ref.current) {
      ref.current.rotation.z = Math.sin(clock.getElapsedTime()*0.5)*0.02
    }
  })
  
  return (
    <mesh ref={ref} position={[0,-0.5,0]} rotation={[-Math.PI/2,0,0]}>
      <planeGeometry args={[8,8,20,20]} />
      <meshStandardMaterial 
        color={'#0a3d5c'} 
        metalness={0.9} 
        roughness={0.1}
        emissive={'#041a29'}
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

export default function OceanScene(){
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[-2,3,1]} intensity={0.7} color={'#fff8e1'} />
      <pointLight position={[2,1,2]} color={'#4fc3f7'} intensity={0.3} />
      <Ship />
      <Ocean />
      <fog attach="fog" args={['#0a1628', 2, 8]} />
    </>
  )
}
