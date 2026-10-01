import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import Button from '../common/Button'

function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 sm:py-36 lg:px-10 lg:py-44">
      {/* Existing right glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-15%] top-[15%] h-[550px] w-[550px] rounded-full bg-yellow-400/[0.035] blur-[130px]"
      />
      {/* Additional left glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-yellow-400/[0.025] blur-[120px]"
      />
      {/* Centre warm lift */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,144,144,0.04),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Section introduction */}
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
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-yellow-400" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-yellow-400">
              Who We Are
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            One group.
            <br />

            <span className="text-white/30">
              Multiple ways to create.
            </span>
          </h2>
        </motion.div>

        {/* Main story */}
        <div className="mt-20 grid gap-14 lg:mt-28 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">

          {/* Large statement */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
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
              duration: 0.9,
              delay: 0.1,
            }}
          >
            <p className="max-w-5xl text-3xl font-medium leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              We turn ideas into{' '}
              <span className="text-yellow-400">
                digital products,
              </span>{' '}
              visual stories, memorable events, and experiences
              people can connect with.
            </p>
          </motion.div>

          {/* Supporting story */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="flex flex-col justify-end"
          >
            <div className="border-l border-yellow-400/30 pl-6">
              <p className="text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                Cyber Link Company brings technology, media,
                creativity, and events together under one
                vision — helping individuals, businesses,
                organizations, and brands bring their ideas
                to life.
              </p>

              <div className="mt-8">
                <Button
                  href="/about"
                  variant="outline"
                >
                  Discover Cyber Link Company
                  <ArrowUpRight size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual divider */}
        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="mt-24 origin-left border-t border-white/10 sm:mt-32"
        />

        {/* Bottom identity statement */}
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
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-white/25">
            Technology · Media · Events
          </span>

          <span className="text-xs uppercase tracking-[0.25em] text-yellow-400/50">
            Technology is a necessity.
          </span>
        </motion.div>

      </div>
    </section>
  )
}

export default AboutPreview