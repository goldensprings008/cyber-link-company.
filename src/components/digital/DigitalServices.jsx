// DigitalServices.jsx
// ---------------------------------------------------------
// Services section for Cyber Link Digital.
//
// Our digitalServices.js file contains a FLAT array of
// individual services.
//
// Each service has:
// id
// category
// name
// description
//
// This component groups those services by category before
// displaying them.
// ---------------------------------------------------------

import { motion } from 'framer-motion'

import {
  Code2,
  Monitor,
  BriefcaseBusiness,
  Network,
  Cpu,
  Wrench,
  Smartphone,
  ArrowUpRight,
} from 'lucide-react'

import digitalServices from '../../data/digitalServices'

import SectionTitle from '../common/SectionTitle'

// ---------------------------------------------------------
// Icons for our digital service categories.
// Keys match the exact category strings in digitalServices.js
// ---------------------------------------------------------

const categoryIcons = {
  'Software & Development': Code2,
  'Computer & IT': Monitor,
  'Digital Business': BriefcaseBusiness,
  'Networking': Network,
  'Electronic Engineering': Cpu,
  'Mechanical Services': Wrench,
  'Electronic Gadgets & Accessories': Smartphone,
}

// ---------------------------------------------------------
// DigitalServices component
// ---------------------------------------------------------

function DigitalServices() {

  // -------------------------------------------------------
  // Group the flat service list by category.
  //
  // Example:
  //
  // software
  //   ├── Website Development
  //   ├── Application Development
  //   └── Software Development
  //
  // computer
  //   ├── Computer Support
  //   └── IT Support
  //
  // -------------------------------------------------------

  const groupedServices = digitalServices.reduce(
    (groups, service) => {

      const category = service.category

      if (!groups[category]) {
        groups[category] = []
      }

      groups[category].push(service)

      return groups

    },
    {},
  )

  return (
    <section className="bg-neutral-950 px-6 py-24 sm:py-32 lg:px-10">

      <div className="mx-auto max-w-7xl">

        {/* -------------------------------------------------
            Section heading
        ------------------------------------------------- */}

        <SectionTitle
          eyebrow="What We Do"
          title="Digital solutions built around your needs."
          description="From software development and websites to computer support and digital business systems, Cyber Link Digital brings technology and practical problem-solving together."
        />

        {/* -------------------------------------------------
            Service categories
        ------------------------------------------------- */}

        <div className="mt-16 space-y-6">

          {Object.entries(groupedServices).map(
            ([category, services], index) => {

              const Icon =
                categoryIcons[category] || Code2

              const categoryName = category

              const isOrangeCategory = [
                'Networking',
                'Electronic Engineering',
                'Mechanical Services',
                'Electronic Gadgets & Accessories',
              ].includes(categoryName)

              return (
                <motion.div
                  key={category}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className={`group relative overflow-hidden rounded-3xl border p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 ${
                    isOrangeCategory
                      ? 'border-[#f07000]/20 bg-white/80 shadow-[0_8px_30px_rgba(240,112,0,0.04)] hover:border-[#f07000]/40 hover:shadow-[0_12px_40px_rgba(240,112,0,0.09)]'
                      : 'border-[#007f83]/20 bg-white/80 shadow-[0_8px_30px_rgba(0,127,131,0.04)] hover:border-[#007f83]/40 hover:shadow-[0_12px_40px_rgba(0,127,131,0.09)]'
                  }`}
                >

                  {/* -------------------------------------------------
                      Category header
                  ------------------------------------------------- */}

                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                    <div className="flex items-start gap-5">

                      {/* Category icon */}

                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${
                          isOrangeCategory
                            ? 'border-[#f07000]/30 bg-[#f07000]/10 text-[#f07000]'
                            : 'border-[#009090]/20 bg-[#009090]/10 text-[#009090]'
                        }`}
                      >

                        <Icon
                          size={24}
                          strokeWidth={1.7}
                        />

                      </div>

                      {/* Category title */}

                      <div>

                        <h3 className="text-2xl font-bold tracking-tight text-[#202828]">
                          {categoryName}
                        </h3>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#202828]/65">
                          Technology and digital solutions designed to help ideas, businesses, and organizations move forward.
                        </p>

                      </div>

                    </div>

                    {/* Explore indicator */}

                    <div
                      className={`hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-200 lg:flex ${
                        isOrangeCategory
                          ? 'text-[#f07000] group-hover:text-[#d96400]'
                          : 'text-[#007f83] group-hover:text-[#006b70]'
                      }`}
                    >

                      Explore

                      <ArrowUpRight size={15} />

                    </div>

                  </div>

                  {/* -------------------------------------------------
                      Individual services
                  ------------------------------------------------- */}

                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                    {services.map((service) => (

                      <motion.div
                        key={service.id}
                        whileHover={{
                          y: -4,
                          scale: 1.015,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 25,
                        }}
                        className={`group/item relative flex flex-col justify-between overflow-hidden rounded-2xl border p-4 sm:p-5 transition-all duration-300 ${
                          isOrangeCategory
                            ? 'border-[#f07000]/15 bg-white/95 shadow-[0_4px_16px_rgba(240,112,0,0.04)] hover:border-[#f07000]/45 hover:bg-white hover:shadow-[0_12px_28px_rgba(240,112,0,0.12)]'
                            : 'border-[#007f83]/15 bg-white/95 shadow-[0_4px_16px_rgba(0,127,131,0.04)] hover:border-[#007f83]/45 hover:bg-white hover:shadow-[0_12px_28px_rgba(0,127,131,0.12)]'
                        }`}
                      >

                        {/* Top glowing accent line on hover */}
                        <div
                          className={`absolute inset-x-0 top-0 h-[2.5px] opacity-0 transition-opacity duration-300 group-hover/item:opacity-100 ${
                            isOrangeCategory
                              ? 'bg-gradient-to-r from-transparent via-[#f07000] to-transparent'
                              : 'bg-gradient-to-r from-transparent via-[#009090] to-transparent'
                          }`}
                        />

                        {/* Top corner ambient blur on hover */}
                        <div
                          className={`pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover/item:opacity-100 ${
                            isOrangeCategory ? 'bg-[#f07000]/20' : 'bg-[#009090]/20'
                          }`}
                        />

                        <div className="relative">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-2.5">
                              {/* Brand indicator dot with glow */}
                              <span
                                className={`mt-1.5 h-2 w-2 shrink-0 rounded-full transition-transform duration-300 group-hover/item:scale-125 ${
                                  isOrangeCategory
                                    ? 'bg-[#f07000] shadow-[0_0_8px_rgba(240,112,0,0.7)]'
                                    : 'bg-[#009090] shadow-[0_0_8px_rgba(0,144,144,0.7)]'
                                }`}
                              />

                              <h4
                                className={`text-sm font-semibold leading-5 text-[#202828] transition-colors duration-200 ${
                                  isOrangeCategory
                                    ? 'group-hover/item:text-[#ea580c]'
                                    : 'group-hover/item:text-[#007f83]'
                                }`}
                              >
                                {service.name}
                              </h4>
                            </div>

                            {/* Micro hover arrow */}
                            <ArrowUpRight
                              size={14}
                              className={`shrink-0 opacity-0 -translate-x-1 translate-y-1 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 ${
                                isOrangeCategory ? 'text-[#f07000]' : 'text-[#007f83]'
                              }`}
                            />
                          </div>

                          {service.description && (
                            <p className="mt-2.5 pl-4 text-xs leading-5 text-[#202828]/65 transition-colors duration-200 group-hover/item:text-[#202828]/85">
                              {service.description}
                            </p>
                          )}
                        </div>

                      </motion.div>

                    ))}

                  </div>

                </motion.div>
              )
            },
          )}

        </div>

      </div>

    </section>
  )
}

export default DigitalServices