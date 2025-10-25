import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Ship(){
  const ref = useRef()
  useFrame(({clock})=>{
    const t = clock.getElapsedTime()
    if(ref.current) ref.current.position.set(Math.cos(t*0.7)*1.0, -0.3, Math.sin(t*0.7)*0.6)
  })
  return (
    <mesh ref={ref} rotation={[0,0,0]}>
      <boxGeometry args={[0.6, 0.12, 0.22]} />
      <meshStandardMaterial color={'#ff7a18'} emissive={'#522a06'} />
    </mesh>
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
