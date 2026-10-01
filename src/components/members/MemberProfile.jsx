// MemberProfile.jsx
// ---------------------------------------------------------
// Individual member profile for Cyber Link Company.
//
// This profile displays:
//
// - Member photo
// - Name and role
// - About the member
// - Skills
// - Phone
// - Email
// - WhatsApp
// - Personal social platforms
// - Personal website
// - Portfolio
//
// Company platforms are NOT displayed here.
// These are the individual member's own platforms.
// ---------------------------------------------------------

import { motion } from 'framer-motion'

import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  Phone,
  MessageCircle,
  Globe,
} from 'lucide-react'

import {
  SiInstagram,
  SiFacebook,
  SiTiktok,
  SiYoutube,
  SiGithub,
} from '@icons-pack/react-simple-icons'

import Button from '../common/Button'

// ---------------------------------------------------------
// Member Profile
// ---------------------------------------------------------

function MemberProfile({ member }) {

  // -------------------------------------------------------
  // Safety check
  // -------------------------------------------------------

  if (!member) {
    return (
      <section className="min-h-[70vh] bg-black px-6 py-32 lg:px-10">

        <div className="mx-auto max-w-4xl text-center">

          <h1 className="text-4xl font-semibold text-white">
            Member Not Found
          </h1>

          <p className="mt-4 text-white/45">
            We could not find the member profile you are looking for.
          </p>

          <div className="mt-8 flex justify-center">

            <Button
              href="/members"
              variant="outline"
              showIcon={false}
            >
              <span className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Members
              </span>
            </Button>

          </div>

        </div>

      </section>
    )
  }

  // -------------------------------------------------------
  // Personal platforms
  //
  // Only platforms that have a URL are displayed.
  //
  // LinkedIn is currently represented with the generic
  // Globe icon because SiLinkedin is not available in
  // our installed Simple Icons package version.
  // -------------------------------------------------------

  const platformLinks = [
    {
      name: 'Instagram',
      url: member.platforms?.instagram,
      icon: SiInstagram,
    },
    {
      name: 'Facebook',
      url: member.platforms?.facebook,
      icon: SiFacebook,
    },
    {
      name: 'TikTok',
      url: member.platforms?.tiktok,
      icon: SiTiktok,
    },
    {
      name: 'YouTube',
      url: member.platforms?.youtube,
      icon: SiYoutube,
    },
    {
      name: 'GitHub',
      url: member.platforms?.github,
      icon: SiGithub,
    },
    {
      name: 'LinkedIn',
      url: member.platforms?.linkedin,
      icon: Globe,
    },
    {
      name: 'Website',
      url: member.platforms?.website,
      icon: Globe,
    },
  ].filter((platform) => platform.url)

  // -------------------------------------------------------
  // Render profile
  // -------------------------------------------------------

  return (
    <main className="bg-black">

      {/* -------------------------------------------------
          Back navigation
      ------------------------------------------------- */}

      <section className="px-6 pt-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <motion.a
            href="/members"
            initial={{
              opacity: 0,
              x: -15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="inline-flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white"
          >

            <ArrowLeft size={16} />

            Back to Members

          </motion.a>

        </div>

      </section>

      {/* -------------------------------------------------
          Main profile
      ------------------------------------------------- */}

      <section className="px-6 py-16 sm:py-20 lg:px-10 lg:py-24">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          {/* -------------------------------------------------
              Member photo
          ------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-950"
          >

            <div className="aspect-[4/5] overflow-hidden bg-neutral-900">

              <img
                src={member.photo}
                alt={member.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />

            </div>

          </motion.div>

          {/* -------------------------------------------------
              Member information
          ------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >

            {/* Member heading */}

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#009090]">
              Golden Springs Group Member
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {member.name}
            </h1>

            <p className="mt-4 text-lg text-white/50">
              {member.role}
            </p>

            {/* -------------------------------------------------
                About
            ------------------------------------------------- */}

            <div className="mt-10 border-t border-white/10 pt-8">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009090]">
                About the Member
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/50">
                {member.about}
              </p>

            </div>

            {/* -------------------------------------------------
                Skills
            ------------------------------------------------- */}

            {member.skills?.length > 0 && (

              <div className="mt-10 border-t border-white/10 pt-8">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009090]">
                  Skills & Expertise
                </p>

                <div className="mt-5 flex flex-wrap gap-3">

                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/55"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            )}

            {/* -------------------------------------------------
                Contact
            ------------------------------------------------- */}

            {(member.contact?.email ||
              member.contact?.phone ||
              member.contact?.whatsapp) && (

              <div className="mt-10 border-t border-white/10 pt-8">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009090]">
                  Contact
                </p>

                <div className="mt-5 flex flex-col gap-4">

                  {/* Email */}

                  {member.contact?.email && (
                    <a
                      href={`mailto:${member.contact.email}`}
                      className="inline-flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-[#009090]"
                    >
                      <Mail size={18} />
                      <span>{member.contact.email}</span>
                    </a>
                  )}

                  {/* Phone */}

                  {member.contact?.phone && (
                    <a
                      href={`tel:${member.contact.phone}`}
                      className="inline-flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-[#009090]"
                    >
                      <Phone size={18} />
                      <span>{member.contact.phone}</span>
                    </a>
                  )}

                  {/* WhatsApp */}

                  {member.contact?.whatsapp && (
                    <a
                      href={`https://wa.me/${member.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-[#009090]"
                    >
                      <MessageCircle size={18} />
                      <span>WhatsApp</span>
                      <ArrowUpRight size={15} />
                    </a>
                  )}

                </div>

              </div>
            )}

            {/* -------------------------------------------------
                Personal platforms
            ------------------------------------------------- */}

            {platformLinks.length > 0 && (

              <div className="mt-10 border-t border-white/10 pt-8">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009090]">
                  Personal Platforms
                </p>

                <div className="mt-5 flex flex-wrap gap-3">

                  {platformLinks.map((platform) => {

                    const Icon = platform.icon

                    return (
                      <a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={platform.name}
                        title={platform.name}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-all hover:border-[#009090]/40 hover:bg-[#009090] hover:text-black"
                      >
                        <Icon size={17} />
                      </a>
                    )
                  })}

                </div>

              </div>
            )}

            {/* -------------------------------------------------
                Portfolio
            ------------------------------------------------- */}

            {member.portfolio && (

              <div className="mt-10">

                <Button
                  href={member.portfolio}
                  variant="gold"
                  showIcon={false}
                >
                  <span className="flex items-center gap-2">

                    <Globe size={16} />

                    Visit Portfolio

                    <ArrowUpRight size={16} />

                  </span>
                </Button>

              </div>
            )}

          </motion.div>

        </div>

      </section>

      {/* -------------------------------------------------
          Contact member CTA
      ------------------------------------------------- */}

      <section className="border-t border-white/10 bg-neutral-950 px-6 py-20 sm:py-24 lg:px-10">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#009090]">
            Work With Golden Springs Group
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Have an idea you want to bring to life?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/45">
            Tell us about your project and let's explore how
              Golden Springs Group can help turn your idea into reality.
          </p>

          <div className="mt-8 flex justify-center">

            <Button
              href="/quote"
              variant="gold"
            >
              Get a Quote
            </Button>

          </div>

        </div>

      </section>

    </main>
  )
}

export default MemberProfile