// SectionTitle.jsx
// ---------------------------------------------------------
// Reusable section heading for Cyber Link Company.
//
// This keeps headings across the website consistent while
// still allowing each section to have its own title,
// description, and small label.
// ---------------------------------------------------------

import { motion } from 'framer-motion'

function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  const alignmentClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
      }}
      className={`flex max-w-3xl flex-col gap-4 ${alignmentClasses[align]}`}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#009090]">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SectionTitle