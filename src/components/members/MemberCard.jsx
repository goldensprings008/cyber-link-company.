// MemberCard.jsx
// ---------------------------------------------------------
// Reusable member card for Cyber Link Company.
//
// Members are presented as individuals rather than being
// permanently attached to Digital, Media, or Events.
//
// Each card can lead to the member's full profile.
// ---------------------------------------------------------

import { motion } from 'framer-motion'

import {
  ArrowUpRight,
  Mail,
  Phone,
} from 'lucide-react'

// ---------------------------------------------------------
// MemberCard component
// ---------------------------------------------------------

function MemberCard({ member }) {
  return (
    <motion.a
      href={`/members/${member.id}`}
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
      }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 transition-colors hover:border-[#009090]/30"
    >

      {/* -------------------------------------------------
          Member photo
      ------------------------------------------------- */}

      <div className="gs-dark-overlay relative aspect-[4/5] overflow-hidden bg-neutral-900">

        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />

        {/* Dark overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Profile arrow */}

        <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition-colors group-hover:bg-[#009090] group-hover:text-black">

          <ArrowUpRight size={18} />

        </div>

        {/* Member role */}

        <div className="absolute bottom-5 left-5 right-5">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009090]">
            {member.role}
          </p>

          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            {member.name}
          </h3>

        </div>

      </div>

      {/* -------------------------------------------------
          Member information
      ------------------------------------------------- */}

      <div className="p-6">

        <p className="text-sm leading-6 text-white/45">
          {member.bio}
        </p>

        {/* Contact information */}

        <div className="mt-5 flex flex-wrap gap-3">

          {member.contact?.email && (
            <div className="flex items-center gap-2 text-xs text-white/35">

              <Mail size={14} />

              <span>
                Contact
              </span>

            </div>
          )}

          {member.contact?.phone && (
            <div className="flex items-center gap-2 text-xs text-white/35">

              <Phone size={14} />

              <span>
                Phone
              </span>

            </div>
          )}

        </div>

        {/* View profile */}

        <div className="mt-6 border-t border-white/10 pt-5">

          <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/40 transition-colors group-hover:text-[#009090]">
            View Profile
          </span>

        </div>

      </div>

    </motion.a>
  )
}

export default MemberCard