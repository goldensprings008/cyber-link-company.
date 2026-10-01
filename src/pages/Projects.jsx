// Projects.jsx
// ---------------------------------------------------------
// Cyber Link Projects page.
//
// This page brings together:
//
// ProjectFilter
// ProjectGrid
// ProjectCard
//
// Visitors can browse all Cyber Link Company projects and
// filter them by:
//
// - All
// - Digital
// - Media
// - Events
//
// The page uses React state to control the selected filter.
// ---------------------------------------------------------

import { useState } from 'react'

import { motion } from 'framer-motion'

import {
  FolderOpen,
} from 'lucide-react'

import SectionTitle from '../components/common/SectionTitle'
import ProjectFilter from '../components/projects/ProjectFilter'
import ProjectGrid from '../components/projects/ProjectGrid'
import projectsHeroImage from '../assets/Images/projects-hero.jpg'

function Projects() {

  // -------------------------------------------------------
  // Current project filter.
  //
  // "All" is selected when the page first loads.
  // -------------------------------------------------------

  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <main className="bg-black">

      {/* -------------------------------------------------
          Projects introduction
      ------------------------------------------------- */}

      <section className="relative overflow-hidden bg-[#f5f7f4] px-6 pb-20 pt-32 sm:pb-24 lg:px-10">

        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <img
            src={projectsHeroImage}
            alt=""
            className="h-full w-full object-cover object-center opacity-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f7f4]/95 via-[#f5f7f4]/90 to-[#f5f7f4]/70" />
        </div>

        {/* Background glow */}

        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#009090]/10 blur-[150px]" />

        {/* Additional: secondary bottom glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-[10%] h-[300px] w-[300px] rounded-full bg-[#009090]/[0.04] blur-[120px]"
        />
        {/* Crown ellipse */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,144,144,0.07),transparent_45%)]"
        />
        {/* Horizontal accent line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-[#009090]/[0.10] to-transparent"
        />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Small page label */}

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

            <FolderOpen
              size={14}
              className="text-[#009090]"
            />

            Our Work

          </motion.div>

          {/* Page heading */}

          <SectionTitle
            eyebrow="Golden Springs Projects"
            title="Ideas turned into meaningful experiences."
            description="Explore selected work from Golden Springs Digital, Media, and Events. Browse our projects and discover the experiences we create for our clients and community."
          />

        </div>

      </section>

      {/* -------------------------------------------------
          Projects
      ------------------------------------------------- */}

      <section className="bg-neutral-950 px-6 py-24 sm:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          {/* Project filters */}

          <ProjectFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          {/* Project grid */}

          <ProjectGrid
            activeFilter={activeFilter}
          />

        </div>

      </section>

      {/* -------------------------------------------------
          Bottom CTA
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
              Start Something New
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Have an idea you want to bring to life?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/45">
              Tell us about your idea and let's explore how
              Golden Springs Group can turn it into a real experience.
            </p>

            <motion.a
              href="/quote"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#009090] px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-[#00a0a0]"
            >
              Get a Quote
            </motion.a>

          </motion.div>

        </div>

      </section>

    </main>
  )
}

export default Projects