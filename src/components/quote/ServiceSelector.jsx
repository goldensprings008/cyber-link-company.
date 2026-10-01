// ServiceSelector.jsx
// ---------------------------------------------------------
// Service selector for the Cyber Link Company quote system.
//
// The customer first chooses which Cyber Link Company area
// they need:
//
// - Digital
// - Media
// - Events
//
// The selected service area is controlled by the parent
// QuoteForm through:
//
// activeService
// onServiceChange
// ---------------------------------------------------------

import { motion } from 'framer-motion'

import {
  Code2,
  Camera,
  CalendarDays,
} from 'lucide-react'

// ---------------------------------------------------------
// Available Cyber Link Company service areas.
// ---------------------------------------------------------

const serviceAreas = [
  {
    id: 'digital',
    name: 'Cyber Link Digital',
    shortName: 'Digital',
    description:
      'Websites, applications, software, IT solutions, networking, electronics, mechanics, and gadgets.',
    icon: Code2,
  },
  {
    id: 'media',
    name: 'Cyber Link Media',
    shortName: 'Media',
    description:
      'Photography, videography, TV production, streaming, graphics, branding, and creative media.',
    icon: Camera,
  },
  {
    id: 'events',
    name: 'Cyber Link Events',
    shortName: 'Events',
    description:
      'Event planning, live production, sound, lighting, staging, streaming, and promotion.',
    icon: CalendarDays,
  },
]

// ---------------------------------------------------------
// Service selector component.
// ---------------------------------------------------------

function ServiceSelector({
  activeService = '',
  onServiceChange,
}) {
  return (
    <div>

      {/* Section heading */}

      <div className="mb-6">

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009090]">
          Step 1
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-white">
          What do you need?
        </h2>

        <p className="mt-2 text-sm leading-6 text-white/45">
          Choose the area that best matches your project.
        </p>

      </div>

      {/* Service options */}

      <div className="grid gap-4 md:grid-cols-3">

        {serviceAreas.map((service) => {

          const Icon = service.icon

          const isActive =
            activeService === service.id

          const isOrangeTheme = service.id === 'media' || service.id === 'events'

          return (
            <motion.button
              key={service.id}
              type="button"
              onClick={() =>
                onServiceChange(service.id)
              }
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className={`group relative overflow-hidden rounded-3xl border p-6 text-left transition-all ${
                isActive
                  ? isOrangeTheme
                    ? 'border-[#f07000] bg-[#f07000]/12 shadow-[0_0_30px_rgba(240,112,0,0.15)]'
                    : 'border-[#007f83] bg-[#007f83]/12 shadow-[0_0_30px_rgba(0,127,131,0.15)]'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >

              {/* Selected glow */}

              {isActive && (
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl ${
                    isOrangeTheme ? 'bg-[#f07000]/25' : 'bg-[#007f83]/25'
                  }`}
                />
              )}

              {/* Icon */}

              <div
                className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border transition-colors ${
                  isActive
                    ? isOrangeTheme
                      ? 'border-[#f07000] bg-[#f07000] text-white shadow-[0_0_15px_rgba(240,112,0,0.4)]'
                      : 'border-[#007f83] bg-[#007f83] text-white shadow-[0_0_15px_rgba(0,127,131,0.4)]'
                    : 'border-white/10 bg-white/[0.03] text-white/50 group-hover:border-white/20 group-hover:text-white'
                }`}
              >

                <Icon size={20} />

              </div>

              {/* Service name */}

              <h3 className="relative mt-6 text-lg font-semibold text-white">
                {service.name}
              </h3>

              {/* Description */}

              <p className="relative mt-3 text-sm leading-6 text-white/45">
                {service.description}
              </p>

              {/* Selection status */}

              <div className="relative mt-6">

                <span
                  className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                    isActive
                      ? isOrangeTheme
                        ? 'text-[#f07000]'
                        : 'text-[#007f83]'
                      : 'text-white/30'
                  }`}
                >
                  {isActive
                    ? 'Selected'
                    : `Choose ${service.shortName}`}
                </span>

              </div>

            </motion.button>
          )
        })}

      </div>

    </div>
  )
}

export default ServiceSelector