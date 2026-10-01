// ProjectFilter.jsx
// ---------------------------------------------------------
// Project filter for Cyber Link Company.
//
// This component provides buttons for filtering projects
// by their main area:
//
// All
// Digital
// Media
// Events
//
// The selected filter is controlled by the parent Projects
// page through the activeFilter and onFilterChange props.
// ---------------------------------------------------------

import { motion } from 'framer-motion'

const filters = [
  'All',
  'Digital',
  'Media',
  'Events',
]

function ProjectFilter({
  activeFilter = 'All',
  onFilterChange,
}) {
  return (
    <div className="mb-12 flex flex-wrap gap-3">

      {filters.map((filter) => {
        const isActive = activeFilter === filter

        return (
          <motion.button
            key={filter}
            type="button"
            onClick={() => onFilterChange(filter)}
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
              isActive
                ? filter === 'Media' || filter === 'Events'
                  ? 'border-[#f07000] bg-[#f07000] text-white shadow-[0_4px_16px_rgba(240,112,0,0.35)]'
                  : 'border-[#007f83] bg-[#007f83] text-white shadow-[0_4px_16px_rgba(0,127,131,0.35)]'
                : 'border-[#007f83]/15 bg-white text-[#202828]/70 hover:border-[#007f83]/35 hover:text-[#202828] shadow-xs'
            }`}
          >
            {filter}
          </motion.button>
        )
      })}

    </div>
  )
}

export default ProjectFilter