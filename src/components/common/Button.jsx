// Button.jsx
// ---------------------------------------------------------
// Reusable button component for Cyber Link Company.
//
// Instead of creating different button styles throughout
// the website, we can use this component whenever we need
// a consistent Cyber Link Company button.
// ---------------------------------------------------------

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  showIcon = true,
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors'

  const variants = {
    primary:
      'bg-[#007f83] text-[#ffffff] hover:bg-[#006b70]',

    dark:
      'bg-[#007f83] text-[#ffffff] hover:bg-[#006b70]',

    outline:
      'border border-[#007f83]/25 bg-transparent text-[#007f83] hover:bg-[#007f83]/5',

    gold:
      'bg-[#f07000] text-white font-semibold hover:bg-[#d96400] shadow-[0_4px_16px_rgba(240,112,0,0.25)]',

    orange:
      'bg-[#f07000] text-white font-semibold hover:bg-[#d96400] shadow-[0_4px_16px_rgba(240,112,0,0.25)]',
  }

  const className = `${baseClasses} ${variants[variant]}`

  const content = (
    <>
      <span>{children}</span>

      {showIcon && (
        <ArrowUpRight
          size={16}
          strokeWidth={2}
        />
      )}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={className}
        whileHover={{
          y: -2,
        }}
        whileTap={{
          scale: 0.97,
        }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={className}
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
    >
      {content}
    </motion.button>
  )
}

export default Button