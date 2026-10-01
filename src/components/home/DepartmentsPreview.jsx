import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Code2,
  Camera,
  CalendarDays,
} from 'lucide-react'

import services from '../../data/services'

import Button from '../common/Button'

const icons = {
  digital: Code2,
  media: Camera,
  events: CalendarDays,
}

const cardColors = {
  digital: 'from-[#009090]/[0.15]',
  media: 'from-[#f07000]/[0.15]',
  events: 'from-[#007f83]/[0.15]',
}

function DepartmentsPreview() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 sm:py-32 lg:px-10 lg:py-36">
      {/* Gold glow — top left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-8%] top-[10%] h-[450px] w-[450px] rounded-full bg-yellow-400/[0.04] blur-[120px]"
      />
      {/* Gold glow — bottom right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-yellow-400/[0.03] blur-[120px]"
      />
      {/* Centre warm lift */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(0,144,144,0.04),transparent_55%)]"
      />
      <div className="mx-auto max-w-7xl">

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
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-yellow-400" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-yellow-400">
              What We Do
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            Different disciplines.
            <br />

            <span className="text-white/30">
              One creative force.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
            Technology, media, and events come together
            within Cyber Link Company to turn ideas into
            practical solutions and memorable experiences.
          </p>
        </motion.div>

        {/* Department cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6 lg:mt-20">
          {services.map((service, index) => {
            const Icon = icons[service.id]

            return (
              <motion.article
                key={service.id}
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
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative min-h-[390px] overflow-hidden rounded-3xl border border-[#007f83]/15 bg-white/85 p-7 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:border-[#009090]/40 hover:bg-white hover:shadow-[0_16px_45px_rgba(0,144,144,0.12)] sm:p-8"
              >
                {/* Large background number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-3 -top-10 select-none text-[150px] font-bold leading-none text-[#202828]/[0.04] transition-all duration-700 group-hover:text-[#009090]/[0.08]"
                >
                  0{index + 1}
                </span>

                {/* Atmospheric glow */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${cardColors[service.id] || 'from-[#009090]/[0.15]'} to-transparent blur-3xl opacity-60 transition-all duration-700 group-hover:scale-125 group-hover:opacity-100`}
                />

                {/* Top line */}
                <div className="relative flex items-center justify-between">
                  <span className={`text-xs font-semibold tracking-[0.25em] ${service.id === 'media' ? 'text-[#f07000]' : 'text-[#007f83]'}`}>
                    0{index + 1}
                  </span>

                  <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:rotate-6 ${
                    service.id === 'media'
                      ? 'border-[#f07000]/25 bg-[#f07000]/10 text-[#f07000] group-hover:bg-[#f07000] group-hover:text-white shadow-xs'
                      : 'border-[#007f83]/25 bg-[#007f83]/10 text-[#007f83] group-hover:bg-[#007f83] group-hover:text-white shadow-xs'
                  }`}>
                    {Icon && (
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                      />
                    )}
                  </div>
                </div>

                {/* Card content */}
                <div className="relative mt-20">
                  <h3 className={`text-2xl font-bold tracking-tight text-[#202828] transition-colors duration-300 sm:text-3xl ${
                    service.id === 'media' ? 'group-hover:text-[#ea580c]' : 'group-hover:text-[#007f83]'
                  }`}>
                    {service.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#202828]/65">
                    {service.description}
                  </p>
                </div>

                {/* Bottom action */}
                <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between sm:bottom-8 sm:left-8 sm:right-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#202828]/45 transition-colors duration-300 group-hover:text-[#202828]">
                    Explore {service.shortName}
                  </span>

                  <motion.div
                    whileHover={{
                      x: 4,
                      y: -4,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                      service.id === 'media'
                        ? 'border-[#f07000]/20 text-[#f07000] group-hover:border-[#f07000] group-hover:bg-[#f07000] group-hover:text-white'
                        : 'border-[#007f83]/20 text-[#007f83] group-hover:border-[#007f83] group-hover:bg-[#007f83] group-hover:text-white'
                    }`}
                  >
                    <ArrowUpRight size={17} />
                  </motion.div>
                </div>

                {/* Hover border sweep */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-0 bg-yellow-400 transition-all duration-700 group-hover:w-full"
                />

                {/* Full-card link */}
                <a
                  href={service.path}
                  aria-label={`Explore ${service.name}`}
                  className="absolute inset-0"
                >
                  <span className="sr-only">
                    Explore {service.name}
                  </span>
                </a>
              </motion.article>
            )
          })}
        </div>

        {/* Bottom CTA */}
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-md text-sm leading-6 text-white/30">
            One group. Three connected disciplines.
            Built to work together.
          </p>

          <Button
            href="/projects"
            variant="outline"
          >
            Explore Our Work
            <ArrowUpRight size={16} />
          </Button>
        </motion.div>

      </div>
    </section>
  )
}

export default DepartmentsPreview