// NotFound.jsx
// ---------------------------------------------------------
// 404 page for Cyber Link Company.
// Shown when a visitor navigates to a route that doesn't exist.
// ---------------------------------------------------------

import { motion } from 'framer-motion'
import { ArrowLeft, Home } from 'lucide-react'
import cyberLinkLogo from '../assets/Images/cyber-link-logo.png'

function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 text-center">

      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
        style={{ background: 'radial-gradient(circle, rgba(0,144,144,0.08), rgba(240,112,0,0.05), transparent 70%)' }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#009090]/20 bg-white p-2.5 shadow-[0_0_40px_rgba(0,144,144,0.12)]"
        >
          <img src={cyberLinkLogo} alt="Cyber Link Company" className="h-full w-full object-contain" />
        </motion.div>

        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-[120px] font-black leading-none tracking-tighter sm:text-[160px]">
            <span style={{ color: '#009090' }}>4</span>
            <span className="text-white/10">0</span>
            <span style={{ color: '#f07000' }}>4</span>
          </p>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md"
        >
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Page not found
          </h1>
          <p className="mt-3 text-sm leading-7 text-white/45">
            The page you are looking for doesn't exist or may have been moved.
            Let's get you back on track.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#009090] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(0,144,144,0.3)] transition-colors hover:bg-[#007f83]"
          >
            <Home size={16} />
            Back to Home
          </a>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </motion.div>

        {/* Brand tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xs uppercase tracking-[0.25em] text-white/20"
        >
          <span style={{ color: '#f07000' }}>Cyber</span>{' '}
          <span style={{ color: '#009090' }}>Link</span>
          {' '}— Technology is a necessity.
        </motion.p>

      </div>
    </main>
  )
}

export default NotFound
