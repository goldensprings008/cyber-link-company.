// DigitalProjects.jsx
// ---------------------------------------------------------
// Projects section for Cyber Link Digital.
//
// This component reads our shared project data from:
// src/data/projects.js
//
// We show customer-focused project information here.
// Technical development tools such as React, JavaScript,
// Tailwind, and Three.js are intentionally NOT displayed.
//
// The customer should see what we created, not how we
// technically built it.
// ---------------------------------------------------------

import { motion } from 'framer-motion'

import {
  ArrowUpRight,
  FolderOpen,
} from 'lucide-react'

import projects from '../../data/projects'

import SectionTitle from '../common/SectionTitle'
import Button from '../common/Button'

// ---------------------------------------------------------
// DigitalProjects component
// ---------------------------------------------------------

function DigitalProjects() {

  // -------------------------------------------------------
  // Only show projects belonging to Cyber Link Digital.
  // -------------------------------------------------------

  const digitalProjects = projects.filter(
    (project) => project.area === 'Digital',
  )

  return (
    <section className="bg-black px-6 py-24 sm:py-32 lg:px-10">

      <div className="mx-auto max-w-7xl">

        {/* -------------------------------------------------
            Section heading
        ------------------------------------------------- */}

        <SectionTitle
          eyebrow="Our Digital Work"
          title="Ideas turned into working digital experiences."
          description="Explore some of the digital projects we are building and developing through Cyber Link Digital."
        />

        {/* -------------------------------------------------
            Project grid
        ------------------------------------------------- */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {digitalProjects.map((project, index) => (

            <motion.a
              key={project.id}
              href={`/projects/${project.id}`}
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
              whileHover={{
                y: -6,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 transition-colors hover:border-[#009090]/30"
            >

              {/* -------------------------------------------------
                  Project image
              ------------------------------------------------- */}

              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark overlay */}

                <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/10" />

                {/* Project icon */}

                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/50 text-white backdrop-blur-md">

                  <FolderOpen
                    size={18}
                    strokeWidth={1.7}
                  />

                </div>

                {/* Open project arrow */}

                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition-colors group-hover:bg-[#009090] group-hover:text-black">

                  <ArrowUpRight
                    size={18}
                  />

                </div>

              </div>

              {/* -------------------------------------------------
                  Project information
              ------------------------------------------------- */}

              <div className="p-6">

                {/* Project category */}

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009090]">
                  {project.category}
                </p>

                {/* Project title */}

                <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>

                {/* Project description */}

                <p className="mt-3 text-sm leading-6 text-white/45">
                  {project.description}
                </p>

                {/* -------------------------------------------------
                    Customer-focused project type
                ------------------------------------------------- */}

                <div className="mt-5">

                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/45">
                    {project.category}
                  </span>

                </div>

              </div>

            </motion.a>

          ))}

        </div>

        {/* -------------------------------------------------
            View all projects
        ------------------------------------------------- */}

        <div className="mt-10">

          <Button
            href="/projects"
            variant="outline"
          >
            View All Projects
          </Button>

        </div>

      </div>

    </section>
  )
}

export default DigitalProjects