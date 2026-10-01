// MemberGrid.jsx
// ---------------------------------------------------------
// Member grid for Cyber Link Company.
//
// This component loads all members from our central
// members.js data file and displays them using MemberCard.
//
// Members are individuals within Cyber Link Company and are
// not permanently assigned to one specific department.
// ---------------------------------------------------------

import { motion } from 'framer-motion'

import members from '../../data/members'

import MemberCard from './MemberCard'

// ---------------------------------------------------------
// MemberGrid component
// ---------------------------------------------------------

function MemberGrid() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.05,
      }}
      transition={{
        duration: 0.7,
      }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >

      {members.map((member) => (
        <MemberCard
          key={member.id}
          member={member}
        />
      ))}

    </motion.div>
  )
}

export default MemberGrid