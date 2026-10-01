// QuoteSuccess.jsx
// ---------------------------------------------------------
// Success message displayed after a customer submits
// the quote request.
// ---------------------------------------------------------

import { motion } from 'framer-motion'
import { CheckCircle2, RotateCcw } from 'lucide-react'

function QuoteSuccess({ onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-[#009090]/30 bg-[#009090]/5 p-8 text-center sm:p-12"
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#009090] text-black"
      >
        <CheckCircle2 size={30} strokeWidth={2} />
      </motion.div>

      <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#009090]">
        Request Submitted
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Let&apos;s bring your idea to life.
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45">
        Thank you for sharing your project with Golden Springs Group.
        We have received your request and the next step is to
        review your requirements and discuss how we can help.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-[#009090] px-7 py-3.5 text-sm font-medium text-black transition-colors hover:bg-[#00a0a0]"
        >
          Back to Home
        </a>

        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
        >
          <RotateCcw size={16} />
          Submit Another Request
        </button>
      </div>
    </motion.div>
  )
}

export default QuoteSuccess