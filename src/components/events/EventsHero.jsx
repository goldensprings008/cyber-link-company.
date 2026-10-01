// EventsHero.jsx
// ---------------------------------------------------------
// Hero section for Cyber Link Events.
// ---------------------------------------------------------

import { motion } from 'framer-motion'

import {
  ArrowRight,
  CalendarDays,
  Mic2,
  Sparkles,
} from 'lucide-react'

import Button from '../common/Button'
import eventsBg from '../../assets/Images/members-hero.jpg'

// ---------------------------------------------------------
// EventsHero component
// ---------------------------------------------------------

function EventsHero() {
  return (
    <section className="gs-photo-hero relative min-h-[85vh] overflow-hidden px-6 pb-24 pt-32 sm:pb-32 lg:px-10">

      {/* ---------------------------------------------------
          Full-bleed background photo with overlay
      --------------------------------------------------- */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <img
          src={eventsBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Gradient overlay — left heavy so left-side text stays crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        {/* Top dark — keeps navbar separation clean */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />
        {/* Bottom vignette — blends into next section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#f5f7f4] to-transparent" />
      </div>

      {/* ---------------------------------------------------
          Atmospheric glow layers (on top of photo)
      --------------------------------------------------- */}

      <div className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#009090]/10 blur-[160px]" />
      <div className="pointer-events-none absolute left-0 top-1/3 h-[300px] w-[300px] rounded-full bg-[#007f83]/[0.04] blur-[120px]" />

      {/* Floor spotlight sweep */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[#009090]/[0.06] blur-[80px]"
      />
      {/* Crown spot — top centre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,144,144,0.08),transparent_40%)]"
      />
      {/* Left stage light beam */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[15%] top-0 hidden h-[65%] w-6 origin-top bg-gradient-to-b from-[#009090]/[0.12] to-transparent blur-2xl lg:block"
      />
      {/* Right stage light beam */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] top-0 hidden h-[60%] w-6 origin-top bg-gradient-to-b from-[#009090]/[0.10] to-transparent blur-2xl lg:block"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* -------------------------------------------------
            LEFT SIDE — full width on mobile
        ------------------------------------------------- */}

        <div className="w-full">

          {/* Department label */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60"
          >

            <CalendarDays
              size={14}
              className="text-[#009090]"
            />

            Cyber Link Events

          </motion.div>

          {/* Main heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="mt-7 text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl 2xl:text-8xl"
          >

            Experiences that

            <span className="block text-[#2bb7b7]">
              bring people together.
            </span>

          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg"
          >

            From event planning and production to sound,
            lighting, staging, live streaming, and promotion,
            we help turn important moments into memorable
            experiences.

          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="mt-9 flex flex-wrap gap-4"
          >

            <Button
              href="/quote"
              variant="gold"
            >
              Plan Your Event
            </Button>

            <Button
              href="/projects"
              variant="outline"
              showIcon={false}
            >
              Explore Our Work
              <ArrowRight size={16} />
            </Button>

          </motion.div>

        </div>

        {/* -------------------------------------------------
            RIGHT SIDE — hidden on mobile
        ------------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >

          <div className="relative mx-auto aspect-square max-w-lg 2xl:max-w-xl">

            {/* -------------------------------------------------
                Stage frame
            ------------------------------------------------- */}

            <div className="absolute inset-8 rounded-[3rem] border border-white/10 bg-white/[0.02]" />

            <motion.div
              animate={{
                rotate: [0, 1.5, 0, -1.5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-14 rounded-[2.5rem] border border-[#009090]/20"
            />

            {/* -------------------------------------------------
                Main stage
            ------------------------------------------------- */}

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 shadow-2xl">

                {/* Stage background */}

                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-[#009090]/5" />

                {/* -------------------------------------------------
                    Stage lights
                ------------------------------------------------- */}

                <motion.div
                  animate={{
                    rotate: [-8, 8, -8],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute left-1/2 top-0 h-72 w-24 -translate-x-1/2 origin-top bg-gradient-to-b from-[#009090]/20 to-transparent blur-xl"
                />

                <motion.div
                  animate={{
                    rotate: [8, -8, 8],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute left-1/3 top-0 h-64 w-20 origin-top bg-gradient-to-b from-white/10 to-transparent blur-xl"
                />

                <motion.div
                  animate={{
                    rotate: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute right-1/3 top-0 h-64 w-20 origin-top bg-gradient-to-b from-white/10 to-transparent blur-xl"
                />

                {/* -------------------------------------------------
                    LED screen
                ------------------------------------------------- */}

                <div className="absolute left-1/2 top-20 h-36 w-64 -translate-x-1/2 rounded-xl border border-white/10 bg-neutral-900 shadow-2xl">

                  <div className="flex h-full items-center justify-center">

                    <div className="text-center">

                      <Sparkles
                        size={28}
                        className="mx-auto text-[#009090]"
                      />

                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                        Cyber Link Company
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-white/25">
                        Live Experiences
                      </p>

                    </div>

                  </div>

                </div>

                {/* -------------------------------------------------
                    Stage platform
                ------------------------------------------------- */}

                <div className="absolute bottom-20 left-1/2 h-5 w-64 -translate-x-1/2 rounded-full bg-neutral-800 shadow-[0_0_50px_rgba(0,144,144,0.12)]" />

                {/* -------------------------------------------------
                    Microphone
                ------------------------------------------------- */}

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute bottom-28 left-1/2 -translate-x-1/2"
                >

                  <div className="relative">

                    <div className="h-16 w-6 rounded-full border border-white/20 bg-neutral-800" />

                    <div className="absolute left-1/2 top-14 h-14 w-1 -translate-x-1/2 bg-neutral-700" />

                    <div className="absolute left-1/2 top-[6.3rem] h-1 w-14 -translate-x-1/2 rounded-full bg-neutral-700" />

                  </div>

                </motion.div>

                {/* -------------------------------------------------
                    Bottom information bar
                ------------------------------------------------- */}

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-md">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#009090] text-black">

                      <Mic2 size={16} />

                    </div>

                    <div>

                      <p className="text-xs font-medium text-white">
                        Cyber Link Events
                      </p>

                      <p className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-white/30">
                        Event Production
                      </p>

                    </div>

                  </div>

                  <CalendarDays
                    size={18}
                    className="text-white/30"
                  />

                </div>

              </div>

            </div>

            {/* -------------------------------------------------
                Floating event icon
            ------------------------------------------------- */}

            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute bottom-6 left-2 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#009090]/20 bg-[#009090]/10 text-[#009090] backdrop-blur-md"
            >

              <CalendarDays size={25} />

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default EventsHero