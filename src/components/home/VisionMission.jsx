import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Eye,
  Target,
  Sparkles,
} from 'lucide-react'

import SectionTitle from '../common/SectionTitle'
import Button from '../common/Button'

function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-10 lg:py-40">
      {/* Existing centre glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/[0.035] blur-[140px]"
      />
      {/* Additional top-left glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-5%] top-[10%] h-[350px] w-[350px] rounded-full bg-yellow-400/[0.025] blur-[110px]"
      />
      {/* Additional bottom-right glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-5%] bottom-[10%] h-[350px] w-[350px] rounded-full bg-yellow-400/[0.025] blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
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
            duration: 0.8,
          }}
        >
          <SectionTitle
            eyebrow="Our Direction"
            title="Built around a vision. Driven by purpose."
            description="Cyber Link Company exists to transform ideas into useful solutions, creative experiences, and meaningful work."
          />
        </motion.div>

        {/* Vision and Mission */}
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">

          {/* Vision */}
          <motion.article
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            whileHover={{
              y: -8,
            }}
            className="group relative min-h-[390px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition-all duration-500 hover:border-yellow-400/30 hover:bg-white/[0.04] sm:p-10"
          >
            {/* Large number */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-8 select-none text-[150px] font-bold leading-none text-white/[0.025] transition-colors duration-700 group-hover:text-yellow-400/[0.05]"
            >
              01
            </span>

            {/* Atmospheric glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-yellow-400/[0.07] blur-3xl opacity-50 transition-all duration-700 group-hover:scale-125 group-hover:opacity-100"
            />

            <div className="relative flex h-full flex-col">

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10 text-yellow-400 transition-all duration-500 group-hover:border-yellow-400/40 group-hover:bg-yellow-400/15 group-hover:rotate-3">
                <Eye
                  size={25}
                  strokeWidth={1.6}
                />
              </div>

              {/* Content */}
              <div className="mt-auto pt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
                  Our Vision
                </p>

                <h3 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-yellow-400 sm:text-4xl">
                  Creating possibilities through ideas.
                </h3>

                <p className="mt-6 max-w-xl text-base leading-7 text-white/50">
                  To build a creative and technology-driven
                  organization that creates opportunities,
                  develops meaningful solutions, and delivers
                  experiences that make an impact.
                </p>
              </div>
            </div>

            {/* Bottom accent */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-px w-0 bg-yellow-400 transition-all duration-700 group-hover:w-full"
            />
          </motion.article>

          {/* Mission */}
          <motion.article
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            whileHover={{
              y: -8,
            }}
            className="group relative min-h-[390px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition-all duration-500 hover:border-yellow-400/30 hover:bg-white/[0.04] sm:p-10"
          >
            {/* Large number */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-8 select-none text-[150px] font-bold leading-none text-white/[0.025] transition-colors duration-700 group-hover:text-yellow-400/[0.05]"
            >
              02
            </span>

            {/* Atmospheric glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-yellow-400/[0.07] blur-3xl opacity-50 transition-all duration-700 group-hover:scale-125 group-hover:opacity-100"
            />

            <div className="relative flex h-full flex-col">

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10 text-yellow-400 transition-all duration-500 group-hover:border-yellow-400/40 group-hover:bg-yellow-400/15 group-hover:rotate-3">
                <Target
                  size={25}
                  strokeWidth={1.6}
                />
              </div>

              {/* Content */}
              <div className="mt-auto pt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
                  Our Mission
                </p>

                <h3 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-yellow-400 sm:text-4xl">
                  Turning ideas into experiences.
                </h3>

                <p className="mt-6 max-w-xl text-base leading-7 text-white/50">
                  To combine technology, creativity, media,
                  and event production to provide practical
                  solutions and memorable experiences for the
                  people and organizations we serve.
                </p>
              </div>
            </div>

            {/* Bottom accent */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-px w-0 bg-yellow-400 transition-all duration-700 group-hover:w-full"
            />
          </motion.article>
        </div>

        {/* Values */}
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="group relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 p-8 transition-all duration-500 hover:border-yellow-400/20 sm:p-10"
        >
          {/* Gold accent */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 h-full w-px bg-yellow-400/20 transition-colors duration-500 group-hover:bg-yellow-400"
          />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-3xl">

              {/* Label */}
              <div className="flex items-center gap-3">
                <Sparkles
                  size={18}
                  strokeWidth={1.6}
                  className="text-yellow-400"
                />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                  Our Values
                </span>
              </div>

              {/* Values statement */}
              <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                Creativity. Integrity. Excellence. Collaboration.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                We believe good work comes from combining
                strong ideas, responsible execution, continuous
                learning, and people working together.
              </p>
            </div>

            {/* CTA */}
            <Button
              href="/about"
              variant="outline"
            >
              Learn More About Us
              <ArrowUpRight size={16} />
            </Button>

          </div>

          {/* Bottom hover line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-px w-0 bg-yellow-400 transition-all duration-700 group-hover:w-full"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default VisionMission