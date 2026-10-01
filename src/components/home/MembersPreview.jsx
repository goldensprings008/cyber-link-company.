import { motion } from 'framer-motion'
import { ArrowUpRight, Users } from 'lucide-react'

import members from '../../data/members'

import SectionTitle from '../common/SectionTitle'
import Button from '../common/Button'

function MembersPreview() {
  const previewMembers = members.slice(0, 3)

  return (
    <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 sm:py-32 lg:px-10 lg:py-36">
      {/* Existing left glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-yellow-400/[0.025] blur-[130px]"
      />
      {/* Additional right glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] bottom-[15%] h-[400px] w-[400px] rounded-full bg-yellow-400/[0.03] blur-[120px]"
      />
      {/* Warm centre lift */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,144,144,0.035),transparent_60%)]"
      />

      <div className="mx-auto max-w-7xl">

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
            eyebrow="The People"
            title="People behind the ideas."
            description="Cyber Link Company is built around people who bring different skills, perspectives, and creative abilities to every project."
          />
        </motion.div>

        {/* Members grid — single col mobile, 2 col tablet, 3 col desktop */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {previewMembers.map((member, index) => (
            <motion.article
              key={member.id}
              initial={{
                opacity: 0,
                y: 40,
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
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black transition-all duration-500 hover:border-yellow-400/30"
            >

              {/* Member photo */}
              <div className="gs-dark-overlay relative aspect-[4/5] overflow-hidden bg-neutral-900">

                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Cinematic image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90" />

                {/* Subtle hover wash */}
                <div className="absolute inset-0 bg-yellow-400/[0.035] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Member number */}
                <span
                  aria-hidden="true"
                  className="absolute left-5 top-5 text-xs font-medium tracking-[0.25em] text-white/40"
                >
                  0{index + 1}
                </span>

                {/* Member icon */}
                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/70 backdrop-blur-md transition-all duration-500 group-hover:border-yellow-400/40 group-hover:bg-yellow-400/10 group-hover:text-yellow-400">
                  <Users
                    size={17}
                    strokeWidth={1.6}
                  />
                </div>

                {/* Image bottom line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-yellow-400 transition-all duration-700 group-hover:w-full" />
              </div>

              {/* Member information */}
              <div className="p-6 sm:p-7">

                {/* Role */}
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-400">
                  {member.role}
                </p>

                {/* Name */}
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-yellow-400 sm:text-2xl">
                  {member.name}
                </h3>

                {/* Bio */}
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/45">
                  {member.bio}
                </p>

                {/* Profile link */}
                <a
                  href={`/members/${member.id}`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-yellow-400"
                >
                  View Profile

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </motion.article>
          ))}
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
            Meet the people bringing ideas, creativity,
            technology, and experiences together.
          </p>

          <Button
            href="/members"
            variant="outline"
          >
            Meet the Team
            <ArrowUpRight size={16} />
          </Button>
        </motion.div>

      </div>
    </section>
  )
}

export default MembersPreview