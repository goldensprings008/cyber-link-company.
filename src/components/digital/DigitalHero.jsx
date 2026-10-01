// DigitalHero.jsx
// ---------------------------------------------------------
// Hero section for Cyber Link Digital.
//
// This component introduces the Digital department.
// It focuses on technology, software, IT, and digital
// solutions.
//
// The larger 3D Digital experience will be connected later.
// ---------------------------------------------------------

import { motion } from 'framer-motion'

import {
  ArrowRight,
  Code2,
  Monitor,
  Sparkles,
} from 'lucide-react'

import Button from '../common/Button'
import digitalHeroImage from '../../assets/Images/digital-hero.jpg'

function DigitalHero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-[#f5f7f4] px-6 pb-24 pt-32 sm:pb-32 lg:px-10">

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <img
          src={digitalHeroImage}
          alt=""
          className="h-full w-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f7f4]/95 via-[#f5f7f4]/90 to-[#f5f7f4]/82" />
      </div>

      {/* ---------------------------------------------------
          Background glow
      --------------------------------------------------- */}

      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#009090]/10 blur-[140px]" />

      {/* Additional: top-left counter-glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-[#009090]/[0.04] blur-[120px]"
      />
      {/* Crown ellipse */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,144,144,0.06),transparent_45%)]"
      />
      {/* Horizontal circuit line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[30%] h-px w-full bg-gradient-to-r from-transparent via-[#009090]/[0.10] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[70%] h-px w-full bg-gradient-to-r from-transparent via-[#009090]/[0.06] to-transparent"
      />
      {/* Vertical tech lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-gradient-to-b from-[#009090]/[0.05] via-transparent to-transparent lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[25%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#009090]/[0.04] to-transparent lg:block"
      />
      {/* Bottom vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#f5f7f4] to-transparent"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* -------------------------------------------------
            LEFT SIDE
        ------------------------------------------------- */}

        <div>

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
            className="inline-flex items-center gap-2 rounded-full border border-[#007f83]/20 bg-[#007f83]/8 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#006b70]"
          >

            <Code2
              size={14}
              className="text-[#009090]"
            />

            Cyber Link Digital

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
            className="mt-7 text-5xl font-semibold leading-[0.95] tracking-tight text-[#202828] sm:text-6xl lg:text-7xl 2xl:text-8xl"
          >

            Technology that

            <span className="block text-[#006b70]">
              moves ideas forward.
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
            className="mt-7 max-w-xl text-base leading-7 text-[#202828]/65 sm:text-lg"
          >

            We create websites, applications, software,
            computer solutions, IT services, and digital
            systems designed around real-world needs.

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
              Start a Digital Project
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
          Technology visual
        ------------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >

          <div className="relative mx-auto aspect-square max-w-lg 2xl:max-w-xl">
            <div className="absolute inset-8 rotate-6 rounded-[3rem] border border-[#007f83]/10" />
            <div className="absolute inset-8 -rotate-6 rounded-[3rem] border border-[#009090]/20" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-sm rounded-3xl border border-[#007f83]/15 bg-white p-6 shadow-2xl shadow-[#202821]/10">
                <div className="flex items-center justify-between border-b border-[#007f83]/15 pb-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#007f83]/40" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#007f83]/40" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#007f83]/40" />
                  </div>
                  <Monitor size={16} className="text-[#007f83]/75" />
                </div>

                <div className="mt-6 space-y-3 font-mono text-sm text-[#202821]">
                  <p>
                    <span className="text-[#006b70]">const</span>{' '}
                    idea = CyberLink
                  </p>
                  <p className="pl-5">{'{'}</p>
                  <p className="pl-10">
                    technology: <span className="text-[#007f83]">'digital'</span>
                  </p>
                  <p className="pl-10">
                    creativity: <span className="text-[#007f83]">'unlimited'</span>
                  </p>
                  <p className="pl-5">{'}'}</p>

                  <div className="mt-5 h-1 overflow-hidden rounded-full bg-[#007f83]/10">
                    <motion.div
                      className="h-full w-2/3 bg-[#009090]"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-8 left-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#009090]/20 bg-white/80 text-[#006b70] shadow-lg shadow-[#202821]/10 backdrop-blur-md"
            >
              <Sparkles size={25} />
            </motion.div>
          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default DigitalHero