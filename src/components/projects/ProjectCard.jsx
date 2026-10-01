// ProjectCard.jsx
// ---------------------------------------------------------
// Reusable project card for Cyber Link Company.
//
// This component displays one project from:
// src/data/projects.js
//
// The card is designed to work across:
// - Digital projects
// - Media projects
// - Events projects
//
// It focuses on what the project is and what was created,
// rather than showing technical development tools.
// ---------------------------------------------------------

import { motion } from 'framer-motion'

import {
  ArrowUpRight,
  FolderOpen,
} from 'lucide-react'

function ProjectCard({ project }) {
  return (
    <motion.a
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
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.6,
      }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 transition-colors hover:border-[#009090]/30"
    >

      {/* ---------------------------------------------------
          Project image
      --------------------------------------------------- */}

      <div className="gs-dark-overlay relative aspect-[16/10] overflow-hidden bg-neutral-900">

        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark image overlay */}

        <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/10" />

        {/* Project icon */}

        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/50 text-white backdrop-blur-md">
          <FolderOpen
            size={18}
            strokeWidth={1.7}
          />
        </div>

        {/* Open project button */}

        <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition-colors group-hover:bg-[#009090] group-hover:text-black">

          <ArrowUpRight size={18} />

        </div>

      </div>

      {/* ---------------------------------------------------
          Project information
      --------------------------------------------------- */}

      <div className="p-6">

        {/* Project area */}

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009090]">
          {project.area}
        </p>

        {/* Project title */}

        <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
          {project.title}
        </h3>

        {/* Project description */}

        <p className="mt-3 text-sm leading-6 text-white/45">
          {project.description}
        </p>

        {/* Project category */}

        <div className="mt-5 flex items-center justify-between">

          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/45">
            {project.category}
          </span>

          <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/30 transition-colors group-hover:text-[#009090]">
            View Project
          </span>

        </div>

      </div>

    </motion.a>
  )
}

export default ProjectCard