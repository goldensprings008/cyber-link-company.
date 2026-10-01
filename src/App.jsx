// App.jsx
// ---------------------------------------------------------
// Main application component for Cyber Link Company.
//
// Shows a branded loader animation on first visit per
// browser session (sessionStorage), then renders the site.
// ---------------------------------------------------------

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import AppRoutes from './routes/AppRoutes'
import Loader from './components/common/Loader'

function App() {
  // Check if loader has already been shown this session
  const [loading, setLoading] = useState(
    () => !sessionStorage.getItem('cl_loaded')
  )

  function handleLoaderComplete() {
    // Small delay so the progress bar completes visually
    setTimeout(() => {
      sessionStorage.setItem('cl_loaded', 'true')
      setLoading(false)
    }, 300)
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <Loader
            key="loader"
            onComplete={handleLoaderComplete}
          />
        )}
      </AnimatePresence>

      {/* Render site immediately — loader overlays on top */}
      {!loading && <AppRoutes />}
    </>
  )
}

export default App
