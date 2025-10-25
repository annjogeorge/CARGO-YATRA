import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-[#060714] py-8 mt-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-lg font-semibold neon-glow">Logi</div>
          <div className="text-gray-400 text-sm mt-1">© {new Date().getFullYear()} Logi Inc. All rights reserved.</div>
        </div>

        <div className="flex items-center gap-4">
          <a className="text-gray-300/80 hover:text-neon-blue transition">Privacy</a>
          <a className="text-gray-300/80 hover:text-neon-blue transition">Terms</a>
          <a className="text-gray-300/80 hover:text-neon-blue transition">Contact</a>
        </div>
      </div>
    </footer>
  )
}
