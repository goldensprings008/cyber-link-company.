// Quote.jsx
// ---------------------------------------------------------
// Get a Quote page for Cyber Link Company.
// ---------------------------------------------------------

import { motion } from 'framer-motion'
import { ArrowLeft, Sparkles } from 'lucide-react'

import QuoteForm from '../components/quote/QuoteForm'

function Quote() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#009090]/10 blur-[140px]" />

      {/* Page introduction */}
      <section className="relative px-6 pb-16 pt-28 sm:px-10 lg:px-16 lg:pb-20 lg:pt-36">
        <div className="mx-auto max-w-6xl">
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-[#009090]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-10 max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#009090]/20 bg-[#009090]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#009090]">
              <Sparkles size={14} />
              Start Something Great
            </div>

            <h1 className="mt-7 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Tell us what you&apos;re
              <span className="block text-[#009090]">
                ready to create.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
              Whether you need a digital solution, media production,
              or a complete event experience, tell us about your idea
              and let&apos;s explore what we can build together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote form */}
      <section className="relative px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/10 bg-neutral-950/80 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10 lg:p-14"
          >
            <QuoteForm />
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative border-t border-white/10 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009090]">
            Cyber Link Company
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Technology is
            <span className="text-[#009090]">
              {' '}
              a necessity.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/40">
            From the first idea to the final experience, we bring
            digital, media, and events together under one creative
            vision.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Quote