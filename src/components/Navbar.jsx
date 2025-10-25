import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const items = ["Home","About","Services","Tracking","Contact"]

export default function Navbar(){
  const [active, setActive] = useState('Home')
  const [carX, setCarX] = useState(0)
  const containerRef = useRef(null)

  useEffect(()=>{
    // position car on active mount
    const idx = items.indexOf(active)
    positionCar(idx)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function positionCar(index){
    const container = containerRef.current
    if(!container) return
    const item = container.querySelectorAll('.nav-item')[index]
    if(!item) return
    const rect = item.getBoundingClientRect()
    const parentRect = container.getBoundingClientRect()
    setCarX(rect.left - parentRect.left + rect.width/2)
  }

  return (
    <header className="w-full road relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-blue shadow-lg" />
          <div className="text-xl font-semibold neon-glow">Logi</div>
        </div>

        <nav ref={containerRef} className="relative flex-1 mx-6">
          <ul className="flex items-center justify-center gap-8">
            {items.map((it, i)=> (
              <li key={it} className="nav-item relative">
                <button
                  onMouseEnter={()=> positionCar(i)}
                  onMouseLeave={()=> positionCar(items.indexOf(active))}
                  onClick={()=>{ setActive(it); positionCar(items.indexOf(it)) }}
                  className={`text-sm px-3 py-2 rounded-md transition-colors ${active===it? 'text-neon-blue':'text-gray-200/70'}`}>
                  {it}
                </button>
              </li>
            ))}
          </ul>

          {/* car indicator */}
          <AnimatePresence>
            <motion.div
              layout
              initial={false}
              animate={{ x: carX - 18 }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
              className="pointer-events-none absolute top-full left-0 w-12 h-8"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-10 h-4 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full shadow-2xl relative">
                  <div className="absolute -top-3 left-2 w-6 h-6 bg-[#0d1117] border-2 border-neon-blue rounded-full" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </nav>

        <div className="w-12" />
      </div>
    </header>
  )
}
