# Logi — Futuristic Logistics Landing (Frontend)

This repository is a frontend scaffold for a futuristic logistics landing page using React, Vite, Tailwind CSS, React Three Fiber (Three.js) and Framer Motion.

Features included:
- 3D hero globe with animated shipment primitives
- Navbar styled as a 3D road with a car indicator that moves on hover/click
- Services section with Air/Ocean/Truck small 3D scenes
- Shipment Tracking canvas with globe and live-tracking markers
- Dark neon styling via Tailwind CSS

Quick start
1. Install dependencies

```powershell
cd "c:\Users\Dhvanish.07\Desktop\vscode\logi final"
npm install
```

2. Run dev server

```powershell
npm run dev
```

Notes and next steps
- Models are represented by simple primitives to keep the project self-contained. Replace primitives with real GLTF/GLB models using `@react-three/drei`'s `useGLTF` for production.
- Consider adding a backend or WebSocket feed for true live-tracking data.
- Add texture assets for the globe and particle effects for a more cinematic look.
