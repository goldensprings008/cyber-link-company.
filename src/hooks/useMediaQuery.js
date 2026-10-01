// useMediaQuery.js
// ---------------------------------------------------------
// Reusable hook for detecting responsive screen sizes.
//
// We will use this for:
// - Mobile-friendly animations
// - Responsive 3D scenes
// - Performance optimization
// - Different animation behavior on smaller screens
// ---------------------------------------------------------

import { useSyncExternalStore } from 'react'

function useMediaQuery(query) {
  return useSyncExternalStore(
    (callback) => {
      if (typeof window === 'undefined') return () => {}
      const mediaQuery = window.matchMedia(query)
      mediaQuery.addEventListener('change', callback)
      return () => mediaQuery.removeEventListener('change', callback)
    },
    () => (typeof window !== 'undefined' ? window.matchMedia(query).matches : false),
    () => false
  )
}

export default useMediaQuery