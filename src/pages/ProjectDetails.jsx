// ProjectDetails.jsx
// ---------------------------------------------------------
// Individual project details page for Cyber Link Company.
//
// This page reads the project ID from the URL and finds the
// matching project inside:
//
// src/data/projects.js
//
// Example:
//
// /projects/golden-springs-group-website
//
// The page then displays the project's:
//
// - Image
// - Area
// - Category
// - Title
// - Description
// - Project information
//
// Technical development tools are intentionally not shown.
// The focus is on the project and the experience created.
// ---------------------------------------------------------

import { motion } from 'framer-motion'

import {
  ArrowLeft,
  FolderOpen,
} from 'lucide-react'

import Button from '../components/common/Button'

function ProjectDetails({ project }) {
  // -------------------------------------------------------
  // If the project does not exist, show a friendly message.
  // -------------------------------------------------------

  if (!project) {
    return (
      <section className="min-h-[70vh] bg-black px-6 py-32 lg:px-10">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#009090]">
              Golden Springs Projects
            </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Project Not Found
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/45">
            We could not find the project you are looking for.
          </p>

          <div className="mt-8 flex justify-center">

            <Button
              href="/projects"
              variant="outline"
              showIcon={false}
            >
              <span className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Projects
              </span>
            </Button>

          </div>

        </div>

      </section>
    )
  }

  return (
    <main className="bg-black">

      {/* -------------------------------------------------
          Back navigation
      ------------------------------------------------- */}

      <section className="px-6 pt-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <motion.a
            href="/projects"
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

            Back to Projects

          </motion.a>

        </div>

      </section>

      {/* -------------------------------------------------
          Project content
      ------------------------------------------------- */}

      <section className="px-6 py-16 sm:py-20 lg:px-10 lg:py-24">

        <div className="mx-auto max-w-7xl">

          {/* Project image */}

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
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950"
          >

            <div className="aspect-[16/8] overflow-hidden bg-neutral-900">

              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />

            </div>

            {/* Image overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Project icon */}

            <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/50 text-white backdrop-blur-md">

              <FolderOpen
                size={19}
                strokeWidth={1.7}
              />

            </div>

          </motion.div>

          {/* Project video — only shown when a video URL is provided */}

          {project.video && (
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
                duration: 0.7,
                delay: 0.15,
              }}
              className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-neutral-950"
            >
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                src={project.video}
                controls
                playsInline
                preload="metadata"
                poster={project.image}
                className="w-full rounded-3xl"
              />
            </motion.div>
          )}

          {/* Project information */}

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">

            {/* Main information */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
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

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#009090]">
                {project.area}
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/50">
                {project.description}
              </p>

              {/* About project */}

              <div className="mt-10 border-t border-white/10 pt-8">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009090]">
                  About This Project
                </p>

                <p className="mt-5 max-w-3xl text-base leading-8 text-white/50">
                  This project represents the kind of work we create
                   through Golden Springs Group. We combine ideas,
                  creativity, technology, production, and practical
                  solutions to create experiences that serve a real
                  purpose.
                </p>

              </div>

            </motion.div>

            {/* Project information panel */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="rounded-3xl border border-white/10 bg-neutral-950 p-7"
            >

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009090]">
                Project Information
              </p>

              <div className="mt-6 space-y-6">

                {/* Area */}

                <div>

                  <p className="text-xs uppercase tracking-[0.15em] text-white/30">
                    Area
                  </p>

                  <p className="mt-2 text-sm text-white/70">
                    {project.area}
                  </p>

                </div>

                {/* Category */}

                <div>

                  <p className="text-xs uppercase tracking-[0.15em] text-white/30">
                    Category
                  </p>

                  <p className="mt-2 text-sm text-white/70">
                    {project.category}
                  </p>

                </div>

                {/* Year */}

                <div>

                  <p className="text-xs uppercase tracking-[0.15em] text-white/30">
                    Year
                  </p>

                  <p className="mt-2 text-sm text-white/70">
                    {project.year || '2026'}
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* -------------------------------------------------
          Project CTA
      ------------------------------------------------- */}

      <section className="border-t border-white/10 bg-neutral-950 px-6 py-24 sm:py-32 lg:px-10">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#009090]">
            Have An Idea?
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let's create your next project.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/45">
            Tell us what you want to build, produce, or create,
            and let's explore the possibilities together.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Button
              href="/quote"
              variant="gold"
            >
              Get a Quote
            </Button>

            <Button
              href="/projects"
              variant="outline"
              showIcon={false}
            >
              <span className="flex items-center gap-2">

                <ArrowLeft size={16} />

                More Projects

              </span>
            </Button>

          </div>

        </div>

      </section>

    </main>
  )
}

export default ProjectDetails