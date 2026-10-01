// Loader.jsx
// ---------------------------------------------------------
// Branded page-load animation for Cyber Link Company.
//
// Shows once per browser session using sessionStorage.
// Displays the Cyber Link logo, brand name, and a
// progress bar before fading out.
//
// Colors:
//   Teal   — #009090
//   Orange — #f07000
// ---------------------------------------------------------

import { motion, AnimatePresence } from 'framer-motion'
import cyberLinkLogo from '../../assets/Images/cyber-link-logo.png'

function Loader({ onComplete }) {
  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white"
      >
        {/* Decorative teal glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(0,144,144,0.10), transparent 70%)' }}
        />

        <div className="relative flex flex-col items-center gap-8">

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex h-24 w-24 items-center justify-center rounded-3xl border border-[#009090]/20 bg-white p-3 shadow-[0_8px_40px_rgba(0,144,144,0.12)]"
          >
            <img
              src={cyberLinkLogo}
              alt="Cyber Link Company"
              className="h-full w-full object-contain"
            />
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-xl font-bold tracking-[0.15em]">
              <span style={{ color: '#f07000' }}>CYBER</span>{' '}
              <span style={{ color: '#009090' }}>LINK</span>
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-gray-400">
              Technology is a necessity
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-48 overflow-hidden rounded-full bg-gray-100"
            style={{ height: '3px' }}
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.0, delay: 0.4, ease: 'easeInOut' }}
              onAnimationComplete={onComplete}
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #009090, #f07000)' }}
            />
          </motion.div>

        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Loader
