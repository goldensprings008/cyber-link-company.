// animations.js
// ---------------------------------------------------------
// Central animation settings for Cyber Link Company.
//
// Keeping animation settings here makes it easier to maintain
// a consistent animation language across the entire website.
//
// Components can import these presets instead of creating
// completely different animation values everywhere.
// ---------------------------------------------------------

// ---------------------------------------------------------
// Fade in
// ---------------------------------------------------------

export const fadeIn = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// ---------------------------------------------------------
// Fade in from below
// ---------------------------------------------------------

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

// ---------------------------------------------------------
// Fade in from the left
// ---------------------------------------------------------

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

// ---------------------------------------------------------
// Fade in from the right
// ---------------------------------------------------------

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

// ---------------------------------------------------------
// Scale in
// ---------------------------------------------------------

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// ---------------------------------------------------------
// Stagger container
// ---------------------------------------------------------

export const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// ---------------------------------------------------------
// Stagger container - slower
// ---------------------------------------------------------

export const slowStaggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
}

// ---------------------------------------------------------
// Mobile-friendly fade up
//
// Smaller movement makes animations feel smoother on phones.
// ---------------------------------------------------------

export const mobileFadeUp = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
}

// ---------------------------------------------------------
// Reduced-motion version
//
// This can be used when the visitor has requested reduced
// motion through their device accessibility settings.
// ---------------------------------------------------------

export const reducedMotion = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
}

// ---------------------------------------------------------
// Hover animation
// ---------------------------------------------------------

export const hoverLift = {
  y: -6,
}

// ---------------------------------------------------------
// Small hover animation
// ---------------------------------------------------------

export const hoverLiftSmall = {
  y: -3,
}

// ---------------------------------------------------------
// Tap animation
// ---------------------------------------------------------

export const tapScale = {
  scale: 0.97,
}