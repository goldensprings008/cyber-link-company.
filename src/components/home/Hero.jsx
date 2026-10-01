import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

import Button from '../common/Button'
import HeroTyping from './HeroTyping'
import heroBg from '../../assets/Images/home-hero-background.jpg.jpg'

function Hero() {
  return (
    <section className="gs-photo-hero relative min-h-screen overflow-hidden bg-black">

      {/* Full-bleed background image — lowest layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
        />
        {/* Left side: protect text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-transparent" />
        {/* Bottom fade — solid black edge prevents any gap strip */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Background atmosphere — base layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(0,144,144,0.14),transparent_36%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(255,255,255,0.025),transparent_28%)]"
      />
      {/* Deep secondary gold glow — bottom right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(0,144,144,0.07),transparent_40%)]"
      />
      {/* Top centre crown glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,144,144,0.09),transparent_45%)]"
      />

      {/* Horizontal cinematic light lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[38%] h-px w-full bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[62%] h-px w-full bg-gradient-to-r from-transparent via-yellow-400/[0.07] to-transparent"
      />

      {/* Vertical light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[14%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-yellow-400/[0.08] to-transparent lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent lg:block"
      />

      {/* Slow-drifting ambient orb */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[60%] top-[20%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,144,144,0.06),transparent_70%)] blur-3xl"
        animate={{ x: [0, 30, -20, 0], y: [0, -25, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-10 lg:pb-24 lg:pt-36">

        <div className="w-full max-w-6xl">

          {/* Company identity */}
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
              ease: 'easeOut',
            }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/55 backdrop-blur-sm"
          >
            <Sparkles
              size={14}
              strokeWidth={1.6}
              className="text-yellow-400"
            />

            Cyber Link Company
          </motion.div>

          {/* Typing identity */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: 'easeOut',
            }}
          >
            <HeroTyping />
          </motion.div>

          {/* Main statement */}
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
              delay: 0.2,
              ease: 'easeOut',
            }}
            className="mt-8 max-w-5xl break-words text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            Technology is

            <span className="block text-yellow-400">
              a necessity.
            </span>
          </motion.h1>

          {/* Supporting statement */}
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
              delay: 0.35,
              ease: 'easeOut',
            }}
            className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8"
          >
            Cyber Link Company brings technology, media,
            creativity, and events together to turn
            ideas into meaningful experiences.
          </motion.p>

          {/* Actions */}
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
              delay: 0.5,
              ease: 'easeOut',
            }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button
              href="/quote"
              variant="gold"
            >
              Get a Quote
            </Button>

            <Button
              href="/projects"
              variant="dark"
            >
              Explore Our Work
              <ArrowRight size={16} />
            </Button>
          </motion.div>

          {/* Explore indicator */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="mt-20 flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-white/25 sm:mt-24"
          >
            <span className="h-px w-10 bg-yellow-400/40" />

            <span>
              Explore Cyber Link Company
            </span>

            <motion.span
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ArrowDown
                size={14}
                strokeWidth={1.6}
                className="text-yellow-400/70"
              />
            </motion.span>
          </motion.div>

        </div>
      </div>

    </section>
  )
}

export default Hero