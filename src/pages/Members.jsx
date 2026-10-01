// Members.jsx
// ---------------------------------------------------------
// Cyber Link Company Members page.
//
// This page introduces the people behind Cyber Link Company
// and displays their individual profiles.
//
// Members are presented as members of the wider Golden
// Springs Group rather than being permanently assigned
// to Digital, Media, or Events.
// ---------------------------------------------------------

import { motion } from 'framer-motion'

import {
  Users,
} from 'lucide-react'

import SectionTitle from '../components/common/SectionTitle'
import MemberGrid from '../components/members/MemberGrid'
import Button from '../components/common/Button'
import membersHeroImage from '../assets/Images/members-hero.jpg'

// ---------------------------------------------------------
// Members page
// ---------------------------------------------------------

function Members() {
  return (
    <main className="bg-black">

      {/* -------------------------------------------------
          Members introduction
      ------------------------------------------------- */}

      <section className="relative overflow-hidden bg-[#f5f7f4] px-6 pb-20 pt-32 sm:pb-24 lg:px-10">

        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <img
            src={membersHeroImage}
            alt=""
            className="h-full w-full object-cover object-center opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f7f4]/95 via-[#f5f7f4]/90 to-[#f5f7f4]/70" />
        </div>

        {/* Background glow */}

        <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#009090]/10 blur-[150px]" />

        {/* Additional: left ambient counter-glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-1/4 h-[350px] w-[350px] rounded-full bg-[#009090]/[0.03] blur-[120px]"
        />
        {/* Crown ellipse */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,144,144,0.07),transparent_50%)]"
        />
        {/* Horizontal accent bottom */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#009090]/[0.09] to-transparent"
        />

        <div className="relative z-10 mx-auto max-w-7xl">

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
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60"
          >

            <Users
              size={14}
              className="text-[#009090]"
            />

            The People Behind Golden Springs Group

          </motion.div>

          <SectionTitle
            eyebrow="Our Members"
            title="People bringing ideas, creativity, and experiences to life."
            description="Golden Springs Group is built by people with different skills, perspectives, and passions. Meet the members contributing to the work we create together."
          />

        </div>

      </section>

      {/* -------------------------------------------------
          Members grid
      ------------------------------------------------- */}

      <section className="bg-neutral-950 px-6 py-24 sm:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <MemberGrid />

        </div>

      </section>

      {/* -------------------------------------------------
          Join / collaboration CTA
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

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#009090]">
              Work With Us
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Have an idea worth building?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/45">
              Whether you need technology, media production, or
              event support, let's create something meaningful
              together.
            </p>

            <div className="mt-8 flex justify-center">

              <Button
                href="/quote"
                variant="gold"
              >
                Start a Project
              </Button>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  )
}

export default Members