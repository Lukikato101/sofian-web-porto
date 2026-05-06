import './index.css' // ✅ HARUS PALING ATAS

<<<<<<< HEAD
import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
>>>>>>> 40f7d0c939f6b996ca453a275b52d8fab5849c41
import Footer from './components/Footer.jsx'
import PreLoader from './components/PreLoader.jsx'

// CSS library setelah Tailwind
import 'animate.css'
import 'remixicon/fonts/remixicon.css'
import 'flowbite'

<<<<<<< HEAD
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
=======
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-zinc-900 text-white min-h-screen">
      <div className="container mx-auto px-4">
        <PreLoader />
        <Navbar />
>>>>>>> 40f7d0c939f6b996ca453a275b52d8fab5849c41
        <App />
        <Footer />
      </div>
    </div>
<<<<<<< HEAD
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
=======
>>>>>>> 40f7d0c939f6b996ca453a275b52d8fab5849c41
  </StrictMode>
)