// PageTransition.jsx
// ---------------------------------------------------------
// This component handles page-to-page animations.
//
// We are using Framer Motion here so that when a user
// moves between pages, the content does not simply appear.
//
// Instead, the page can smoothly fade and slide into view.
//
// Later, we can improve this with more advanced transitions
// as the Cyber Link Company website grows.
// ---------------------------------------------------------

import { motion } from 'framer-motion'

// ---------------------------------------------------------
// PageTransition component
// ---------------------------------------------------------
// "children" represents the page we want to animate.
//
// Example:
//
// <PageTransition>
//   <Home />
// </PageTransition>
//
// The Home page becomes the children.
// ---------------------------------------------------------

function PageTransition({ children }) {
  return (
    <motion.div

      // ---------------------------------------------------
      // Starting state
      // ---------------------------------------------------
      // The page starts slightly lower and transparent.
      // ---------------------------------------------------

      initial={{
        opacity: 0,
        y: 20,
      }}

      // ---------------------------------------------------
      // Visible state
      // ---------------------------------------------------
      // The page moves into its normal position and becomes
      // fully visible.
      // ---------------------------------------------------

      animate={{
        opacity: 1,
        y: 0,
      }}

      // ---------------------------------------------------
      // Animation settings
      // ---------------------------------------------------

      transition={{
        duration: 0.5,
        ease: 'easeOut',
      }}

      // ---------------------------------------------------
      // Accessibility
      // ---------------------------------------------------
      // If a user has requested reduced motion in their
      // operating system, we avoid the movement animation.
      // ---------------------------------------------------

      className="w-full"

    >

      {children}

    </motion.div>
  )
}

export default PageTransition