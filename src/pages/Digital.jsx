// Digital.jsx
// ---------------------------------------------------------
// Cyber Link Digital page.
// ---------------------------------------------------------

import DigitalHero from '../components/digital/DigitalHero'
import DigitalServices from '../components/digital/DigitalServices'
import DigitalProjects from '../components/digital/DigitalProjects'

function Digital() {
  return (
    <div className="relative bg-black">
      {/* ---------------------------------------------------
          Digital introduction
      --------------------------------------------------- */}

      <DigitalHero />

      {/* ---------------------------------------------------
          Digital services
      --------------------------------------------------- */}

      <DigitalServices />

      {/* ---------------------------------------------------
          Digital projects
      --------------------------------------------------- */}

      <DigitalProjects />
    </div>
  )
}

export default Digital