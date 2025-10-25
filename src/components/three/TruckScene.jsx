import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Truck(){
  const ref = useRef()
  useFrame(({clock})=>{
    const t = clock.getElapsedTime()
    if(ref.current) ref.current.position.set(Math.cos(t*0.9)*1.1, -0.4, Math.sin(t*0.9)*0.3)
  })
  return (
    <mesh ref={ref} rotation={[0,0,0]}>
      <boxGeometry args={[0.5,0.18,0.22]} />
      <meshStandardMaterial color={'#0088ff'} emissive={'#003e9a'} />
    </mesh>
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
