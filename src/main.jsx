import './index.css' // ✅ HARUS PALING ATAS

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import PreLoader from './components/PreLoader.jsx'

// CSS library setelah Tailwind
import 'animate.css'
import 'remixicon/fonts/remixicon.css'
import 'flowbite'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-zinc-900 text-white min-h-screen">
      <div className="container mx-auto px-4">
        <PreLoader />
        <Navbar />
        <App />
        <Footer />
      </div>
    </div>
  </StrictMode>
)