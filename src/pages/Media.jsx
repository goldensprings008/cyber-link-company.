// Media.jsx
// ---------------------------------------------------------
// Cyber Link Media page.
// ---------------------------------------------------------

import MediaHero from '../components/media/MediaHero'
import MediaServices from '../components/media/MediaServices'
import MediaGallery from '../components/media/MediaGallery'

function Media() {
  return (
    <div className="relative bg-black">
      {/* ---------------------------------------------------
          Media introduction
      --------------------------------------------------- */}

      <MediaHero />

      {/* ---------------------------------------------------
          Media services
      --------------------------------------------------- */}

      <MediaServices />

      {/* ---------------------------------------------------
          Media gallery
      --------------------------------------------------- */}

      <MediaGallery />
    </div>
  )
}

export default Media