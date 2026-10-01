// ScrollProgress.jsx
// ---------------------------------------------------------
// Reusable scroll progress indicator for Cyber Link Company.
//
// The useScrollProgress hook calculates how far the user
// has travelled through the page.
//
// This component turns that value into a thin progress
// bar at the top of the screen.
// ---------------------------------------------------------

import { motion } from 'framer-motion'

import useScrollProgress from '../../hooks/useScrollProgress'

function ScrollProgress() {
  const scrollProgress = useScrollProgress()

  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-[2px] bg-[#009090]"
      style={{
        width: `${scrollProgress * 100}%`,
      }}
    />
  )
}

export default ScrollProgress