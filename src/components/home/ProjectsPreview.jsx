import { motion } from 'framer-motion'
import { ArrowUpRight, FolderOpen } from 'lucide-react'

import projects from '../../data/projects'

import Button from '../common/Button'

function ProjectsPreview() {
  const featuredProjects = projects.filter(
    (project) => project.featured,
  )

  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-10 lg:py-40">
      {/* Gold glow — top right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[5%] h-[500px] w-[500px] rounded-full bg-yellow-400/[0.04] blur-[130px]"
      />
      {/* Gold glow — bottom left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-8%] bottom-[5%] h-[400px] w-[400px] rounded-full bg-yellow-400/[0.03] blur-[120px]"
      />
      {/* Warm centre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(0,144,144,0.04),transparent_55%)]"
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
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-yellow-400" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-yellow-400">
              Selected Work
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            Ideas become
            <br />

            <span className="text-white/30">
              real projects.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
            A selection of work and experiences created
            across Cyber Link Digital, Media, and Events.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
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
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition-all duration-500 hover:border-yellow-400/30 hover:bg-white/[0.04]"
            >

              {/* Project image */}
              <div className="gs-dark-overlay relative aspect-[16/10] overflow-hidden bg-neutral-900">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />

                {/* Hover wash */}
                <div className="absolute inset-0 bg-yellow-400/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Project area */}
                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md">
                    {project.area}
                  </span>
                </div>

                {/* Project icon */}
                <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/70 backdrop-blur-md transition-all duration-500 group-hover:border-yellow-400/50 group-hover:bg-yellow-400/10 group-hover:text-yellow-400">
                  <FolderOpen size={17} />
                </div>

                {/* Image bottom line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-yellow-400 transition-all duration-700 group-hover:w-full" />
              </div>

              {/* Project information */}
              <div className="p-6 sm:p-7">

                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-400">
                    {project.category}
                  </p>

                  <span className="text-xs text-white/20">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-yellow-400">
                  {project.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/45">
                  {project.description}
                </p>

                {/* Project link */}
                <a
                  href={`/projects/${project.id}`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-yellow-400"
                >
                  View Project

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
            From digital solutions to visual production
            and live experiences.
          </p>

          <Button
            href="/projects"
            variant="outline"
          >
            View All Projects
            <ArrowUpRight size={16} />
          </Button>
        </motion.div>

      </div>
    </section>
  )
}

export default ProjectsPreview