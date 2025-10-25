import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Marker({pos=[0,0,0], color='#00f0ff'}){
  const ref = useRef()
  useFrame(({clock})=>{
    if(ref.current) ref.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime()*2)/8)
  })
  return (
    <mesh position={pos} ref={ref}>
      <sphereGeometry args={[0.06, 12, 12]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
    </mesh>
  )
}

function Globe(){
  const ref = useRef()
  useFrame((state, delta)=>{
    if(ref.current) ref.current.rotation.y += delta * 0.08
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.6, 48, 48]} />
      <meshStandardMaterial color={'#062033'} emissive={'#00131b'} metalness={0.2} roughness={0.8} />
    </mesh>
  )
}

export default function TrackingScene(){
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3,4,2]} intensity={0.8} />
      <Globe />
      <Marker pos={[1.1,0.3,0.2]} color={'#00f0ff'} />
      <Marker pos={[-0.8,-0.2,1.0]} color={'#ff7a18'} />
      <Marker pos={[0.0,0.9,-1.0]} color={'#0088ff'} />
    </>
  )
}
