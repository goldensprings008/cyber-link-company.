// MediaHero.jsx
// ---------------------------------------------------------
// Hero section for Cyber Link Media.
//
// This section introduces the Media department and gives
// visitors a quick understanding of the creative services
// we provide.
//
// The larger 3D Media experience will be connected later.
// ---------------------------------------------------------

import { motion } from 'framer-motion'

import {
  ArrowRight,
  Camera,
  Clapperboard,
  Play,
} from 'lucide-react'

import Button from '../common/Button'

// ---------------------------------------------------------
// MediaHero component
// ---------------------------------------------------------

function MediaHero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden px-6 pb-24 pt-32 sm:pb-32 lg:px-10">

      {/* ---------------------------------------------------
          Cinematic background glow
      --------------------------------------------------- */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#009090]/10 blur-[160px]" />

      {/* Additional: top cinematic light beam — left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[10%] top-0 h-[70%] w-[2px] origin-top bg-gradient-to-b from-[#009090]/20 via-[#009090]/05 to-transparent blur-sm"
      />
      {/* Top beam — right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-0 h-[60%] w-[2px] origin-top bg-gradient-to-b from-[#009090]/15 via-[#009090]/04 to-transparent blur-sm"
      />
      {/* Wide soft beam centre-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[30%] top-0 hidden h-[55%] w-24 origin-top bg-gradient-to-b from-[#009090]/[0.04] to-transparent blur-2xl lg:block"
      />
      {/* Bottom fade into the next light section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-[#f5f7f4] to-transparent"
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

            <Camera
              size={14}
              className="text-[#009090]"
            />

            Cyber Link Media

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

            Stories that

            <span className="block text-[#006b70]">
              deserve to be seen.
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

            We create photography, videography, television
            productions, live broadcasts, graphics, branding,
            and visual experiences that bring ideas to life.

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
              Start a Media Project
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
            RIGHT SIDE
            Cinematic media visual — hidden on mobile
        ------------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >

          <div className="relative mx-auto aspect-square max-w-lg 2xl:max-w-xl">

            {/* -------------------------------------------------
                Cinematic frame
            ------------------------------------------------- */}

            <motion.div
              animate={{
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-8 rounded-[3rem] border border-white/10 bg-white/[0.02]"
            />

            {/* Golden frame */}

            <div className="absolute inset-14 rounded-[2.5rem] border border-[#009090]/20" />

            {/* -------------------------------------------------
                Main media panel
            ------------------------------------------------- */}

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 shadow-2xl">

                {/* Cinematic light */}

                <motion.div
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: 'easeInOut',
                  }}
                  className="pointer-events-none absolute inset-y-0 left-0 w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-[#009090]/10 to-transparent"
                />

                {/* Camera body */}

                <div className="absolute left-1/2 top-1/2 h-40 w-56 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-neutral-900 shadow-2xl">

                  {/* Camera lens */}

                  <motion.div
                    animate={{
                      scale: [1, 1.04, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-neutral-700 bg-black"
                  >

                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#009090]/40 bg-[#009090]/5">

                      <div className="h-10 w-10 rounded-full bg-[#009090]/20 shadow-[0_0_40px_rgba(0,144,144,0.25)]" />

                    </div>

                  </motion.div>

                  {/* Camera top detail */}

                  <div className="absolute left-7 top-[-10px] h-5 w-16 rounded-t-lg border border-white/10 bg-neutral-800" />

                  {/* Camera recording light */}

                  <motion.span
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                    className="absolute right-6 top-6 h-2.5 w-2.5 rounded-full bg-[#009090]"
                  />

                </div>

                {/* -------------------------------------------------
                    Media controls
                ------------------------------------------------- */}

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-md">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#009090] text-black">

                      <Play
                        size={15}
                        fill="currentColor"
                      />

                    </div>

                    <div>

                      <p className="text-xs font-medium text-white">
                        Cyber Link Media
                      </p>

                      <p className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-white/30">
                        Creative Production
                      </p>

                    </div>

                  </div>

                  <Clapperboard
                    size={18}
                    className="text-white/30"
                  />

                </div>

              </div>

            </div>

            {/* -------------------------------------------------
                Floating camera icon
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

              <Camera size={25} />

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default MediaHero