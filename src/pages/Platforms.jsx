// Platforms.jsx
// ---------------------------------------------------------
// Cyber Link Company Platforms page.
//
// This page displays the official platforms belonging to
// Cyber Link Company.
//
// These are COMPANY platforms, not individual member
// platforms.
//
// Member platforms are handled separately inside:
// MemberProfile.jsx
// ---------------------------------------------------------

import { motion } from 'framer-motion'

import {
  Globe,
  MessageCircle,
  ExternalLink,
} from 'lucide-react'

import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiYoutube,
  SiWhatsapp,
  SiGithub,
} from '@icons-pack/react-simple-icons'

import SectionTitle from '../components/common/SectionTitle'
import platforms from '../data/platforms'

// ---------------------------------------------------------
// Platform icons
//
// We keep the icons here so the data file only contains
// platform information and URLs.
// ---------------------------------------------------------

const platformIcons = {
  Website: Globe,
  Facebook: SiFacebook,
  Instagram: SiInstagram,
  TikTok: SiTiktok,
  YouTube: SiYoutube,
  WhatsApp: SiWhatsapp,
  GitHub: SiGithub,
}

// ---------------------------------------------------------
// Platforms page
// ---------------------------------------------------------

function Platforms() {
  return (
    <main className="bg-black">

      {/* -------------------------------------------------
          Page introduction
      ------------------------------------------------- */}

      <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:pb-24 lg:px-10">

        {/* Background glow */}

        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#009090]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">

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
              duration: 0.6,
            }}
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60"
          >

            <Globe
              size={14}
              className="text-[#009090]"
            />

            Connect With Cyber Link Company

          </motion.div>

          <SectionTitle
            eyebrow="Our Platforms"
            title="Follow, discover, and connect with Cyber Link Company."
            description="Find Cyber Link Company across our official digital platforms and stay connected with the work, ideas, projects, media, and experiences we create."
          />

        </div>

      </section>

      {/* -------------------------------------------------
          Platform cards
      ------------------------------------------------- */}

      <section className="bg-neutral-950 px-6 py-24 sm:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {platforms.map((platform, index) => {

              const Icon =
                platformIcons[platform.name] || Globe

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
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black p-7 transition-colors hover:border-[#009090]/30"
                >

                  {/* Decorative glow */}

                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#009090]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Icon */}

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 group-hover:border-[#009090]/40 group-hover:bg-[#009090] group-hover:text-black">

                    <Icon size={22} />

                  </div>

                  {/* Platform information */}

                  <div className="relative mt-7">

                    <div className="flex items-center justify-between gap-4">

                      <h2 className="text-xl font-semibold text-white">
                        {platform.name}
                      </h2>

                      <ExternalLink
                        size={17}
                        className="text-white/25 transition-colors group-hover:text-[#009090]"
                      />

                    </div>

                    <p className="mt-3 text-sm leading-6 text-white/45">
                      {platform.description}
                    </p>

                  </div>

                  {/* Bottom action */}

                  <div className="relative mt-7 border-t border-white/10 pt-5">

                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/35 transition-colors group-hover:text-[#009090]">
                      Visit Platform
                    </span>

                  </div>

                </motion.a>
              )
            })}

          </div>

        </div>

      </section>

      {/* -------------------------------------------------
          Connection CTA
      ------------------------------------------------- */}

      <section className="bg-black px-6 py-24 sm:py-32 lg:px-10">

        <div className="mx-auto max-w-4xl text-center">

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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
            }}
          >

            <MessageCircle
              size={30}
              className="mx-auto text-[#009090]"
            />

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#009090]">
              Stay Connected
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Be part of the Cyber Link Company journey.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/45">
              Follow our platforms to discover new projects,
              creative work, digital experiences, events, and
              everything happening across Cyber Link Company.
            </p>

          </motion.div>

        </div>

      </section>

    </main>
  )
}

export default Platforms