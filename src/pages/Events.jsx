// Events.jsx
// ---------------------------------------------------------
// Cyber Link Events page.
// ---------------------------------------------------------

import EventsHero from '../components/events/EventsHero'
import EventsServices from '../components/events/EventsServices'
import EventsGallery from '../components/events/EventsGallery'

function Events() {
  return (
    <div className="relative bg-black">
      {/* ---------------------------------------------------
          Events introduction
      --------------------------------------------------- */}

      <EventsHero />

      {/* ---------------------------------------------------
          Events services
      --------------------------------------------------- */}

      <EventsServices />

      {/* ---------------------------------------------------
          Events gallery
      --------------------------------------------------- */}

      <EventsGallery />
    </div>
  )
}

export default Events