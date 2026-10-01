// StatsSection.jsx
// ---------------------------------------------------------
// Animated statistics section for Cyber Link Company.
// Shows key numbers that build credibility with visitors.
//
// Colors follow the Cyber Link theme:
//   Teal   — #009090
//   Orange — #f07000
// ---------------------------------------------------------

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FolderOpen, Users, Layers, Infinity } from 'lucide-react'

// ---------------------------------------------------------
// Animated counter hook
// Counts from 0 up to the target value when in view.
// ---------------------------------------------------------

function useCounter(target, duration = 1800, inView = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const step = target / (duration / 16)

    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [inView, target, duration])

  return count
}

// ---------------------------------------------------------
// Individual stat card
// ---------------------------------------------------------

function StatCard({ icon: Icon, value, suffix, label, color, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const count = useCounter(value, 1800, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]"
    >
      {/* Background glow on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}18, transparent 70%)`,
        }}
      />

      {/* Top accent line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px transition-all duration-700 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}80, transparent)`,
          opacity: 0.4,
        }}
      />

      {/* Icon */}
      <div
        className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:scale-110"
        style={{
          borderColor: `${color}30`,
          backgroundColor: `${color}12`,
          color,
        }}
      >
        <Icon size={24} strokeWidth={1.6} />
      </div>

      {/* Number */}
      <div className="flex items-end justify-center gap-1">
        <span
          className="text-5xl font-bold leading-none tracking-tight sm:text-6xl"
          style={{ color }}
        >
          {suffix === '∞' ? '∞' : count}
        </span>

        {suffix && suffix !== '∞' && (
          <span
            className="mb-1 text-3xl font-bold"
            style={{ color }}
          >
            {suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 group-hover:text-white/70">
        {label}
      </p>
    </motion.div>
  )
}

// ---------------------------------------------------------
// Stats Section
// ---------------------------------------------------------

const stats = [
  {
    icon: FolderOpen,
    value: 80,
    suffix: '+',
    label: 'Projects Delivered',
    color: '#009090',
  },
  {
    icon: Users,
    value: 14,
    suffix: '+',
    label: 'Team Members',
    color: '#f07000',
  },
  {
    icon: Layers,
    value: 5,
    suffix: '+',
    label: 'Departments',
    color: '#009090',
  },
  {
    icon: Infinity,
    value: 0,
    suffix: '∞',
    label: 'Service Categories',
    color: '#f07000',
  },
]

function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 sm:py-24 lg:px-10">

      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(0,144,144,0.06), rgba(240,112,0,0.04), transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mx-auto inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#009090]/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#009090]">
              Cyber Link in Numbers
            </span>
            <span className="h-px w-8 bg-[#009090]/60" />
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              {...stat}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center text-xs uppercase tracking-[0.25em] text-white/20"
        >
          Technology is a necessity.
        </motion.p>

      </div>
    </section>
  )
}

export default StatsSection
