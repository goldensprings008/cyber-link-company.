import { motion } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
} from 'lucide-react'

import Button from '../common/Button'

function QuoteCTA() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-10 lg:py-40">

      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/[0.09] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-white/[0.025] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-yellow-400/[0.05] blur-3xl"
      />
      {/* Extra warm lift — top centre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,144,144,0.06),transparent_50%)]"
      />

      <div className="relative mx-auto max-w-6xl">

        {/* Main CTA panel */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
          className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-16 text-center backdrop-blur-sm transition-colors duration-700 hover:border-yellow-400/20 sm:px-12 sm:py-20 lg:px-20 lg:py-24"
        >

          {/* Decorative grid lines */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"
          />

          {/* Corner accents */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 h-24 w-24 border-l border-t border-yellow-400/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 border-b border-r border-yellow-400/10"
          />

          {/* Content */}
          <div className="relative">

            {/* Label */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400"
            >
              <Sparkles
                size={14}
                strokeWidth={1.7}
              />

              Start Something Great
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="mx-auto mt-7 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Have an idea?

              <span className="block text-yellow-400">
                Let's bring it to life.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8"
            >
              Whether you need a digital solution, creative
              media production, or a complete event experience,
              tell us what you have in mind and let's explore
              what we can create together.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="mt-9 flex flex-wrap items-center justify-center gap-4"
            >
              <Button
                href="/quote"
                variant="gold"
              >
                Get a Quote
                <ArrowRight size={16} />
              </Button>

              <Button
                href="/contact"
                variant="outline"
              >
                Contact Us
                <ArrowRight size={16} />
              </Button>
            </motion.div>

            {/* Bottom identity */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="mt-10 flex items-center justify-center gap-4"
            >
              <span className="h-px w-8 bg-yellow-400/30" />

              <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                Technology is a necessity.
              </p>

              <span className="h-px w-8 bg-yellow-400/30" />
            </motion.div>

          </div>

          {/* Hover accent */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-yellow-400 transition-all duration-1000 group-hover:w-1/2"
          />

        </motion.div>
      </div>
    </section>
  )
}

export default QuoteCTA