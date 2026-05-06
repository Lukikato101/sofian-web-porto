import './index.css' // ✅ HARUS PALING ATAS

import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Footer from './components/Footer.jsx'
import PreLoader from './components/PreLoader.jsx'

// CSS library setelah Tailwind
import 'animate.css'
import 'remixicon/fonts/remixicon.css'
import 'flowbite'

function Root() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <PreLoader />
  }

  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <div className="container mx-auto px-4">
        <App />
        <Footer />
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
)