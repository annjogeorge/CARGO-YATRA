import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Plane(){
  const ref = useRef()
  useFrame(({clock})=>{
    const t = clock.getElapsedTime()
    if(ref.current) ref.current.position.set(Math.cos(t*1.2)*1.2, Math.sin(t*1.2)*0.4+0.4, Math.sin(t*1.2)*0.6)
  })
  return (
    <mesh ref={ref} rotation={[0,0,0]}>
      <boxGeometry args={[0.45, 0.08, 0.25]} />
      <meshStandardMaterial color={'#00f0ff'} emissive={'#00697a'} />
    </mesh>
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
