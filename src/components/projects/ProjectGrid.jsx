// ProjectGrid.jsx
// ---------------------------------------------------------
// Project grid for Cyber Link Company.
//
// This component loads all projects from:
// src/data/projects.js
//
// Each project is displayed using the reusable:
// ProjectCard.jsx
//
// Keeping the project data separate from the UI makes the
// website easier to maintain and expand later.
// ---------------------------------------------------------

import { motion } from 'framer-motion'

import projects from '../../data/projects'

import ProjectCard from './ProjectCard'

function ProjectGrid({ activeFilter = 'All' }) {

  // -------------------------------------------------------
  // Filter projects according to the selected area.
  //
  // "All" displays every project.
  // Otherwise we display only projects belonging to:
  //
  // Digital
  // Media
  // Events
  // -------------------------------------------------------

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(
          (project) => project.area === activeFilter,
        )

  return (
    <motion.div
      layout
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >

      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}

    </motion.div>
  )
}

export default ProjectGrid