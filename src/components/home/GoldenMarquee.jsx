import { motion } from 'framer-motion'

function GoldenMarquee({
  items = [],
  direction = 'left',
  variant = 'default',
}) {
  const content = [...items, ...items, ...items, ...items]

  const variants = {
    brand: {
      container: 'py-5 sm:py-6 md:py-7',
      text: 'text-lg font-semibold tracking-[0.2em] text-white/80 sm:text-xl md:text-2xl lg:text-3xl',
      separator: 'text-yellow-400',
      padding: 'px-6 sm:px-8 md:px-10',
    },

    departments: {
      container: 'py-4 sm:py-5 md:py-6',
      text: 'text-2xl font-bold tracking-[0.15em] text-white sm:text-3xl md:text-4xl lg:text-5xl',
      separator: 'text-yellow-400',
      padding: 'px-7 sm:px-10 md:px-14',
    },

    capabilities: {
      container: 'py-4 sm:py-5',
      text: 'text-xs font-medium tracking-[0.25em] text-white/60 sm:text-sm md:text-base',
      separator: 'text-yellow-400/80',
      padding: 'px-5 sm:px-7 md:px-9',
    },

    default: {
      container: 'py-4',
      text: 'text-sm font-semibold tracking-[0.2em] text-white/70',
      separator: 'text-yellow-400',
      padding: 'px-6',
    },
  }

  const selectedVariant = variants[variant] || variants.default

  return (
    <section
      aria-label="Cyber Link Company marquee"
      className="relative overflow-hidden border-y border-yellow-400/10 bg-black"
    >
      <motion.div
        className={`flex w-max items-center whitespace-nowrap ${selectedVariant.container}`}
        animate={{
          x:
            direction === 'left'
              ? ['0%', '-25%']
              : ['-25%', '0%'],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {content.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center"
          >
            <span
              className={`${selectedVariant.padding} ${selectedVariant.text}`}
            >
              {item}
            </span>

            <span
              aria-hidden="true"
              className={selectedVariant.separator}
            >
              ✦
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default GoldenMarquee