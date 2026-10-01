// Footer.jsx
// ---------------------------------------------------------
// Global footer for Cyber Link Company.
//
// This component appears at the bottom of every page.
// ---------------------------------------------------------

import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'
import cyberLinkLogo from '../../assets/Images/cyber-link-logo.png'

// ---------------------------------------------------------
// Social media brand icons
// ---------------------------------------------------------
// These come from Simple Icons rather than Lucide.
// Simple Icons is designed specifically for brand logos.
// ---------------------------------------------------------

import {
  SiInstagram,
  SiFacebook,
  SiYoutube,
  SiTiktok,
  SiWhatsapp,
  SiGithub,
} from '@icons-pack/react-simple-icons'

// ---------------------------------------------------------
// Footer navigation data
// ---------------------------------------------------------

const businessLinks = [
  {
    name: 'Cyber Link Digital',
    href: '/digital',
  },
  {
    name: 'Cyber Link Media',
    href: '/media',
  },
  {
    name: 'Cyber Link Events',
    href: '/events',
  },
]

const companyLinks = [
  {
    name: 'About Us',
    href: '/about',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Members',
    href: '/members',
  },
  {
    name: 'Platforms',
    href: '/platforms',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

// ---------------------------------------------------------
// Social platforms — sourced from platforms.js so URLs
// stay in sync with the Platforms page.
// ---------------------------------------------------------

import platforms from '../../data/platforms'

const socialIconMap = {
  instagram: SiInstagram,
  facebook: SiFacebook,
  youtube: SiYoutube,
  tiktok: SiTiktok,
  whatsapp: SiWhatsapp,
  github: SiGithub,
}

// Only the platforms that have a social icon
const socialPlatformIds = ['instagram', 'facebook', 'youtube', 'tiktok', 'whatsapp', 'github']

// ---------------------------------------------------------
// Footer component
// ---------------------------------------------------------

function Footer() {
  // Automatically gets the current year.
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black text-white">

      {/* =================================================
          MAIN FOOTER
          ================================================= */}

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          {/* =================================================
              COMPANY INTRODUCTION
              ================================================= */}

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
            }}
            transition={{
              duration: 0.6,
            }}
          >

            {/* Logo */}

            <a
              href="/"
              className="inline-flex items-center gap-3"
            >

              <img
                src={cyberLinkLogo}
                alt=""
                className="h-12 w-12 object-contain"
              />

              <div>
                <p className="text-sm font-bold tracking-wide">
                  <span className="text-[#f07000]">CYBER</span>{' '}
                  <span className="text-[#009090]">LINK</span>{' '}
                  COMPANY
                </p>

                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
                  Technology · Media · Events
                </p>
              </div>

            </a>

            {/* Motto */}

            <p className="mt-6 max-w-sm text-lg font-medium leading-7">
              Technology is
              <br />
              <span className="text-[#f07000]">
                a necessity.
              </span>
            </p>

            {/* Description */}

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-500">
              Technology, media, creativity, and event solutions
              brought together under one creative vision.
            </p>

          </motion.div>

          {/* =================================================
              BUSINESS AREAS
              ================================================= */}

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
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >

            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#009090]">
              Our Businesses
            </h3>

            <ul className="mt-6 space-y-4">

              {businessLinks.map((link) => (

                <li key={link.name}>

                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                  >

                    {link.name}

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />

                  </a>

                </li>

              ))}

            </ul>

          </motion.div>

          {/* =================================================
              COMPANY LINKS
              ================================================= */}

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
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >

            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#009090]">
              Company
            </h3>

            <ul className="mt-6 space-y-4">

              {companyLinks.map((link) => (

                <li key={link.name}>

                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                  >

                    {link.name}

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />

                  </a>

                </li>

              ))}

            </ul>

          </motion.div>

          {/* =================================================
              CONTACT
              ================================================= */}

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
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >

            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#009090]">
              Let's Connect
            </h3>

            <div className="mt-6 space-y-4">

              {/* Email */}

              <a
                href="mailto:hello@goldensprings.com"
                className="flex items-start gap-3 text-sm text-gray-400 transition hover:text-white"
              >

                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-[#009090]"
                />

                <span>
                  hello@goldensprings.com
                </span>

              </a>

              {/* Phone */}

              <a
                href="tel:+256000000000"
                className="flex items-start gap-3 text-sm text-gray-400 transition hover:text-white"
              >

                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-[#009090]"
                />

                <span>
                  +256 000 000 000
                </span>

              </a>

              {/* Location */}

              <div className="flex items-start gap-3 text-sm text-gray-400">

                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#009090]"
                />

                <span>
                  Uganda
                </span>

              </div>

            </div>

            {/* =================================================
                SOCIAL MEDIA
                ================================================= */}

            <div className="mt-7 flex flex-wrap items-center gap-3">

              {socialPlatformIds.map((id) => {

                const platform = platforms.find((p) => p.id === id)
                if (!platform) return null

                const Icon = socialIconMap[id]

                return (

                  <a
                    key={id}
                    href={platform.url || '#'}
                    aria-label={platform.name}
                    title={platform.name}
                    target={platform.url ? '_blank' : undefined}
                    rel={platform.url ? 'noopener noreferrer' : undefined}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition duration-300 hover:border-[#009090] hover:bg-[#009090] hover:text-white"
                  >

                    <Icon size={18} />

                  </a>

                )

              })}

            </div>

          </motion.div>

        </div>

        {/* =================================================
            FOOTER CTA
            ================================================= */}

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
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-xl font-semibold">
                Have an idea worth building?
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Let's turn it into something meaningful.
              </p>

            </div>

            <a
              href="/quote"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f07000] px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-[#d96400] hover:!text-white"
            >

              <span>
                Get a Quote
              </span>

              <ArrowUpRight size={17} />

            </a>

          </div>

        </motion.div>

      </div>

      {/* =================================================
          COPYRIGHT BAR
          ================================================= */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-gray-600 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-16">

          <p>
            © {currentYear} Cyber Link Company.
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer