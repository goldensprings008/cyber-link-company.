// useScrollProgress.js
// ---------------------------------------------------------
// Reusable hook for tracking page scroll progress.
//
// The hook converts the user's page scroll into a value
// between:
//
// 0 → top of the page
// 1 → bottom of the page
//
// This value will eventually control our 3D animations.
//
// Example:
//
// User at top:
// scrollProgress = 0
//
// User halfway down:
// scrollProgress = 0.5
//
// User at bottom:
// scrollProgress = 1
// ---------------------------------------------------------

import { useEffect, useState } from 'react'

// ---------------------------------------------------------
// Custom Hook
// ---------------------------------------------------------

function useScrollProgress() {
  // Store the current scroll progress.
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {

    // -----------------------------------------------------
    // Calculate scroll progress
    // -----------------------------------------------------

    const updateScrollProgress = () => {

      // Current vertical scroll position.
      const scrollTop = window.scrollY

      // Total height that can be scrolled.
      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight

      // Prevent division by zero on very short pages.
      if (documentHeight <= 0) {
        setScrollProgress(0)
        return
      }

      // Convert the scroll position into a value between 0
      // and 1.
      const progress =
        scrollTop / documentHeight

      // Keep the value safely between 0 and 1.
      const clampedProgress =
        Math.min(Math.max(progress, 0), 1)

      setScrollProgress(clampedProgress)
    }

    // -----------------------------------------------------
    // Listen for scrolling
    // -----------------------------------------------------

    window.addEventListener(
      'scroll',
      updateScrollProgress,
      { passive: true },
    )

    // Run once immediately so the value is correct when
    // the page first loads.
    updateScrollProgress()

    // -----------------------------------------------------
    // Cleanup
    //
    // React removes the event listener when the component
    // using this hook is removed.
    // -----------------------------------------------------

    return () => {
      window.removeEventListener(
        'scroll',
        updateScrollProgress,
      )
    }

  }, [])

  return scrollProgress
}

export default useScrollProgress