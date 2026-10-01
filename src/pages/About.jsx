import { motion } from 'framer-motion'
import {
  ArrowRight,
  Eye,
  Target,
  Sparkles,
} from 'lucide-react'

import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'
import aboutHeroImage from '../assets/Images/about-hero.jpg'
import aboutTeamImage from '../assets/Images/about-team.jpg'

const values = [
  {
    title: 'Creativity',
    description:
      'We look for thoughtful and original ways to turn ideas into meaningful work.',
  },
  {
    title: 'Integrity',
    description:
      'We value honesty, responsibility, and transparency in the way we work.',
  },
  {
    title: 'Excellence',
    description:
      'We continuously improve our skills, processes, and the quality of what we deliver.',
  },
  {
    title: 'Collaboration',
    description:
      'We believe strong ideas become stronger when people work together.',
  },
]

function About() {
  return (
    <main className="bg-black text-white">
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-black px-6 pb-28 pt-32 sm:pb-36 sm:pt-40 lg:px-10 lg:pb-44 lg:pt-48">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <img
            src={aboutHeroImage}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f7f4] via-[#f5f7f4]/90 to-[#f5f7f4]/20" />
        </div>

        {/* Existing right glow — deepened */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-10%] top-[5%] h-[520px] w-[520px] rounded-full bg-yellow-400/[0.07] blur-[140px]"
        />
        {/* Existing bottom-left ambient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-15%] bottom-[-20%] h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[120px]"
        />
        {/* Existing horizontal line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-[48%] h-px w-full bg-gradient-to-r from-transparent via-yellow-400/15 to-transparent"
        />
        {/* Additional: top crown ellipse */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,144,144,0.07),transparent_50%)]"
        />
        {/* Additional: geometric vertical accent lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[20%] top-0 hidden h-full w-px bg-gradient-to-b from-yellow-400/[0.06] via-transparent to-transparent lg:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[22%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-yellow-400/[0.05] to-transparent lg:block"
        />
        {/* Bottom fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#f5f7f4] to-transparent"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-yellow-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
                About Cyber Link Company
              </span>
            </div>

            <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl">
              Ideas become
              <span className="block text-yellow-400">
                experiences.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
              Cyber Link Company brings technology, media,
              creativity, and events together to help people
              and organizations turn ideas into meaningful work
              and experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="mt-20 origin-left border-t border-white/10 sm:mt-28"
          />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 flex flex-col gap-3 text-xs uppercase tracking-[0.22em] text-white/25 sm:flex-row sm:items-center sm:justify-between"
          >
            <span>Technology · Media · Events</span>

            <span className="text-yellow-400/50">
              Technology is a necessity.
            </span>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 sm:py-32 lg:px-10 lg:py-40">
        {/* Existing right glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-12%] top-[20%] h-[500px] w-[500px] rounded-full bg-yellow-400/[0.025] blur-[130px]"
        />
        {/* Additional: left ambient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-8%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-yellow-400/[0.02] blur-[120px]"
        />
        {/* Additional: horizontal mid-line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/[0.08] to-transparent"
        />

        <div className="relative mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Who We Are"
            title="One group. Multiple capabilities."
            description="Cyber Link Company is built around the idea that different creative and technical disciplines can work together to produce stronger results."
          />

          <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <p className="max-w-3xl text-3xl font-medium leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Technology can solve problems.
                <br />
                <span className="text-white/35">
                  Creativity can communicate ideas.
                </span>
                <br />
                Media can tell stories.
                <br />
                <span className="text-yellow-400">
                  Events can bring people together.
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative border-l border-yellow-400/30 pl-7 sm:pl-8"
            >
              <p className="text-base leading-8 text-white/55 sm:text-lg">
                At Cyber Link Company, these capabilities can
                work independently or come together around
                a single project. This allows us to approach
                digital products, creative productions,
                events, and experiences from different
                perspectives.
              </p>

              <p className="mt-7 text-base leading-8 text-white/55 sm:text-lg">
                Our goal is not simply to provide a service.
                We want to understand the idea behind the
                project and help turn that idea into something
                useful, creative, and memorable.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-yellow-400/60">
                <span className="h-px w-8 bg-yellow-400/40" />
                One connected group
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-[#007f83]/15 shadow-lg shadow-[#202821]/10">
                <img
                  src={aboutTeamImage}
                  alt="Cyber Link Company team and creative work"
                  loading="lazy"
                  className="aspect-[16/8] w-full object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Our Direction"
            title="What guides Cyber Link Company."
            description="Our vision and mission provide the direction behind the work we create."
          />

          <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -8 }}
              className="group relative min-h-[400px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition-all duration-500 hover:border-yellow-400/30 hover:bg-white/[0.04] sm:p-10"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-8 select-none text-[150px] font-bold leading-none text-white/[0.025] transition-colors duration-700 group-hover:text-yellow-400/[0.05]"
              >
                01
              </span>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-yellow-400/[0.07] blur-3xl opacity-50 transition-all duration-700 group-hover:scale-125 group-hover:opacity-100"
              />

              <div className="relative flex h-full flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10 text-yellow-400 transition-all duration-500 group-hover:rotate-3 group-hover:border-yellow-400/40">
                  <Eye size={25} strokeWidth={1.6} />
                </div>

                <div className="mt-auto pt-16">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
                    Our Vision
                  </p>

                  <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-yellow-400 sm:text-4xl">
                    Creating possibilities through ideas.
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-7 text-white/50">
                    To build a creative and technology-driven
                    organization that creates opportunities,
                    develops meaningful solutions, and delivers
                    experiences that make an impact.
                  </p>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-0 bg-yellow-400 transition-all duration-700 group-hover:w-full"
              />
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative min-h-[400px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition-all duration-500 hover:border-yellow-400/30 hover:bg-white/[0.04] sm:p-10"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-8 select-none text-[150px] font-bold leading-none text-white/[0.025] transition-colors duration-700 group-hover:text-yellow-400/[0.05]"
              >
                02
              </span>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-yellow-400/[0.07] blur-3xl opacity-50 transition-all duration-700 group-hover:scale-125 group-hover:opacity-100"
              />

              <div className="relative flex h-full flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10 text-yellow-400 transition-all duration-500 group-hover:rotate-3 group-hover:border-yellow-400/40">
                  <Target size={25} strokeWidth={1.6} />
                </div>

                <div className="mt-auto pt-16">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
                    Our Mission
                  </p>

                  <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-yellow-400 sm:text-4xl">
                    Turning ideas into experiences.
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-7 text-white/50">
                    To combine technology, creativity, media,
                    and event production to provide practical
                    solutions and memorable experiences for the
                    people and organizations we serve.
                  </p>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-0 bg-yellow-400 transition-all duration-700 group-hover:w-full"
              />
            </motion.article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 sm:py-32 lg:px-10 lg:py-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-yellow-400/[0.02] blur-[130px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Our Values"
            title="The principles behind our work."
            description="Our values influence how we approach projects, relationships, creativity, and continuous improvement."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className="group relative min-h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-black p-7 transition-all duration-500 hover:border-yellow-400/30"
              >
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-4 text-5xl font-bold text-white/[0.025] transition-colors duration-500 group-hover:text-yellow-400/[0.06]"
                >
                  0{index + 1}
                </span>

                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/10 text-yellow-400 transition-all duration-500 group-hover:rotate-3 group-hover:border-yellow-400/40">
                    <Sparkles size={18} strokeWidth={1.6} />
                  </div>

                  <h3 className="mt-8 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-yellow-400">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {value.description}
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-0 bg-yellow-400 transition-all duration-700 group-hover:w-full"
                />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-10 lg:py-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/[0.055] blur-[140px]"
        />

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] px-6 py-16 text-center transition-colors duration-700 hover:border-yellow-400/20 sm:px-12 sm:py-20 lg:px-20 lg:py-24"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 border-b border-l border-yellow-400/10"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-24 w-24 border-r border-t border-yellow-400/10"
            />

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mx-auto inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400"
              >
                <Sparkles size={14} strokeWidth={1.7} />
                Let's Create
              </motion.div>

              <h2 className="mx-auto mt-7 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
                Have an idea worth building?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
                Tell us what you are working on and let's
                explore how Cyber Link Company can help bring
                it to life.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Button href="/quote" variant="gold">
                  Get a Quote
                  <ArrowRight size={16} />
                </Button>

                <Button href="/contact" variant="outline">
                  Contact Us
                  <ArrowRight size={16} />
                </Button>
              </div>

              <div className="mt-10 flex items-center justify-center gap-4">
                <span className="h-px w-8 bg-yellow-400/30" />

                <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                  Technology is a necessity.
                </p>

                <span className="h-px w-8 bg-yellow-400/30" />
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-yellow-400 transition-all duration-1000 group-hover:w-1/2"
            />
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default About