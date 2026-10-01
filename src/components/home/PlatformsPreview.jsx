import { motion } from 'framer-motion'
import { ArrowUpRight, Globe } from 'lucide-react'

import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiYoutube,
  SiGithub,
  SiWhatsapp,
} from '@icons-pack/react-simple-icons'

import platforms from '../../data/platforms'

import SectionTitle from '../common/SectionTitle'
import Button from '../common/Button'

const icons = {
  website: Globe,
  facebook: SiFacebook,
  instagram: SiInstagram,
  tiktok: SiTiktok,
  youtube: SiYoutube,
  whatsapp: SiWhatsapp,
  github: SiGithub,
}

function PlatformsPreview() {
  const previewPlatforms = platforms.slice(0, 6)

  return (
    <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 sm:py-32 lg:px-10 lg:py-36">
      {/* Existing right glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12%] top-[15%] h-[500px] w-[500px] rounded-full bg-yellow-400/[0.025] blur-[130px]"
      />
      {/* Additional left glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-8%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-yellow-400/[0.03] blur-[120px]"
      />
      {/* Warm centre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,144,144,0.035),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
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
        >
          <SectionTitle
            eyebrow="Stay Connected"
            title="Find Cyber Link Company across our platforms."
            description="Follow our work, discover new projects, watch productions, and connect with Cyber Link Company through our official platforms."
          />
        </motion.div>

        {/* Platforms grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {previewPlatforms.map((platform, index) => {
            const Icon = icons[platform.id]

            return (
              <motion.a
                key={platform.id}
                href={platform.url || '#'}
                target={platform.url ? '_blank' : undefined}
                rel={platform.url ? 'noopener noreferrer' : undefined}
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
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative flex min-h-[110px] items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-black p-5 transition-all duration-500 hover:border-yellow-400/30 hover:bg-white/[0.025] sm:p-6"
              >

                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-400/[0.06] blur-3xl opacity-0 transition-all duration-700 group-hover:scale-125 group-hover:opacity-100"
                />

                <div className="relative flex min-w-0 items-center gap-4">

                  {/* Platform icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/70 transition-all duration-500 group-hover:border-yellow-400/40 group-hover:bg-yellow-400/10 group-hover:text-yellow-400 group-hover:rotate-3">
                    {Icon && (
                      <Icon
                        size={20}
                        strokeWidth={1.7}
                      />
                    )}
                  </div>

                  {/* Platform information */}
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-white transition-colors duration-300 group-hover:text-yellow-400 sm:text-base">
                      {platform.name}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/40">
                      {platform.description}
                    </p>
                  </div>

                </div>

                {/* Arrow */}
                <div className="relative ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-500 group-hover:border-yellow-400/40 group-hover:bg-yellow-400/10 group-hover:text-yellow-400">
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                {/* Bottom accent */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-0 bg-yellow-400 transition-all duration-700 group-hover:w-full"
                />
              </motion.a>
            )
          })}
        </div>

        {/* Bottom CTA */}
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
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-md text-sm leading-6 text-white/30">
            Follow the work. Discover the stories.
            Stay connected with Cyber Link Company.
          </p>

          <Button
            href="/platforms"
            variant="outline"
          >
            View All Platforms
            <ArrowUpRight size={16} />
          </Button>
        </motion.div>

      </div>
    </section>
  )
}

export default PlatformsPreview