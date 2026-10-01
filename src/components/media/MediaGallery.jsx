// MediaGallery.jsx
// ---------------------------------------------------------
// Gallery section for Cyber Link Media.
//
// This component displays projects from our shared
// projects.js data file.
//
// Only projects belonging to Cyber Link Media are
// displayed here.
//
// Technical languages and development tools are NOT shown.
// The focus is on the actual creative work.
// ---------------------------------------------------------

import { motion } from 'framer-motion'

import {
  ArrowUpRight,
  Play,
  Camera,
} from 'lucide-react'

import projects from '../../data/projects'

import SectionTitle from '../common/SectionTitle'
import Button from '../common/Button'

// ---------------------------------------------------------
// MediaGallery component
// ---------------------------------------------------------

function MediaGallery() {

  // -------------------------------------------------------
  // Get only Media projects.
  // -------------------------------------------------------

  const mediaProjects = projects.filter(
    (project) => project.area === 'Media',
  )

  return (
    <section className="bg-black px-6 py-24 sm:py-32 lg:px-10">

      <div className="mx-auto max-w-7xl">

        {/* -------------------------------------------------
            Section heading
        ------------------------------------------------- */}

        <SectionTitle
          eyebrow="Our Media Work"
          title="Visual stories made to leave an impression."
          description="Explore selected photography, video, broadcast, and creative media projects from Cyber Link Media."
        />

        {/* -------------------------------------------------
            Media project grid
        ------------------------------------------------- */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {mediaProjects.map((project, index) => (

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

                <div className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/10" />

                {/* -------------------------------------------------
                    Media type icon
                ------------------------------------------------- */}

                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/50 text-white backdrop-blur-md">

                  {project.category === 'Video Production' ||
                  project.category === 'Live Broadcast' ? (
                    <Play
                      size={18}
                      fill="currentColor"
                    />
                  ) : (
                    <Camera
                      size={18}
                    />
                  )}

                </div>

                {/* -------------------------------------------------
                    Open project button
                ------------------------------------------------- */}

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
                    Customer-facing footer
                ------------------------------------------------- */}

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

                  <span className="text-xs uppercase tracking-[0.18em] text-white/30">
                    Golden Springs Media
                  </span>

                  <span className="text-xs font-medium text-white/50 transition-colors group-hover:text-[#009090]">
                    View Project
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

export default MediaGallery