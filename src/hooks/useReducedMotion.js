// useReducedMotion.js
// ---------------------------------------------------------
// Detects whether the visitor has enabled "Reduce Motion"
// in their operating system or browser accessibility settings.
//
// We will use this to make animations calmer or disable
// unnecessary movement for users who prefer reduced motion.
// ---------------------------------------------------------

import { useSyncExternalStore } from 'react'

function useReducedMotion() {
  return useSyncExternalStore(
    (callback) => {
      if (typeof window === 'undefined') return () => {}
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      mediaQuery.addEventListener('change', callback)
      return () => mediaQuery.removeEventListener('change', callback)
    },
    () => (typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false),
    () => false
  )
}

export default useReducedMotion