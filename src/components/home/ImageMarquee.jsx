// ImageMarquee.jsx
// ---------------------------------------------------------
// Premium continuous image marquee for Cyber Link Company.
//
// Features:
// - Two distinct rows (upper: digital & tech, lower: media & events)
//   that can be placed in separate sections of the page.
// - Clean, seamless background with NO dark/black gradient vignettes.
// - Smooth continuous horizontal scroll with seamless pause on hover.
// - World-class interactive crossover template transition on hover:
//   * Card pops out & lifts upward (-translate-y-2.5, scale 1.05)
//   * Radiant elevated shadow & teal glowing border ring
//   * Internal smooth image crossover zoom
//   * Sleek frosted glass crossover bottom banner with category & title
//   * Branded Cyber Link accent ribbon & live indicator
//   * Diagonal crossover light shimmer sweep
// ---------------------------------------------------------

import { useEffect, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import useReducedMotion from '../../hooks/useReducedMotion'
import showcaseImages, {
  showcaseRowA,
  showcaseRowB,
} from '../../data/showcaseImages'

// ---------------------------------------------------------
// Individual Interactive Marquee Tile with Crossover Transition
// ---------------------------------------------------------

function MarqueeTile({ image }) {
  const [imageError, setImageError] = useState(false)

  // Reliable fallback image if any external URL fails
  const fallbackSrc =
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=75'

  return (
    <div
      className="group relative h-[180px] w-[270px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-[var(--gs-border)] bg-[var(--gs-surface)] shadow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-30 hover:-translate-y-2.5 hover:scale-[1.06] hover:border-[#009090] hover:shadow-[0_22px_45px_-12px_rgba(0,144,144,0.4),0_0_20px_rgba(0,144,144,0.2)] hover:ring-2 hover:ring-[#009090]/80 sm:h-[200px] sm:w-[310px] md:h-[210px] md:w-[330px]"
      title={`${image.category} — ${image.alt}`}
    >
      {/* Photo with crossover zoom */}
      <img
        src={imageError ? fallbackSrc : image.image}
        alt={image.alt}
        loading="lazy"
        draggable="false"
        onError={() => setImageError(true)}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Crossover diagonal sheen sweep */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-full group-hover:opacity-100"
      />

      {/* Top crossover dual-brand ribbon (Teal + Orange) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-1 -translate-y-full bg-gradient-to-r from-[#009090] via-[#2bb7b7] to-[#f07000] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      />

      {/* Top-right floating Cyber Link template badge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-2.5 top-2.5 z-20 flex -translate-y-2 items-center gap-1.5 rounded-full border border-white/20 bg-black/65 px-2.5 py-0.5 text-[9px] font-bold tracking-widest text-white/90 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#f07000] animate-pulse" />
        <span>CYBER LINK</span>
      </div>

      {/* Bottom crossover template card (slides up with glassmorphism) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 translate-y-3 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-3.5 pt-8 opacity-0 backdrop-blur-[2px] transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:p-4"
      >
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-md border border-[#009090]/50 bg-[#009090]/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#2bb7b7]">
            ✦ {image.category}
          </span>
        </div>
        <p className="mt-1 line-clamp-1 text-xs font-medium text-white/95 drop-shadow-sm">
          {image.alt}
        </p>
      </div>
    </div>
  )
}

// ---------------------------------------------------------
// Single Infinite Marquee Strip
// ---------------------------------------------------------

function SingleMarqueeRow({
  images,
  direction = 'left',
  speed = 50,
  paused = false,
}) {
  // Triple the items for a silky, seamless infinite loop
  const content = [...images, ...images, ...images]
  const trackClass =
    direction === 'left' ? 'marquee-track-left' : 'marquee-track-right'

  return (
    <div className="relative overflow-hidden py-4 sm:py-6">
      <div
        className={`${trackClass} gap-4 sm:gap-6 px-3`}
        style={{
          '--marquee-speed': `${speed}s`,
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {content.map((img, index) => (
          <MarqueeTile
            key={`${img.id}-${index}`}
            image={img}
          />
        ))}
      </div>
    </div>
  )
}

// ---------------------------------------------------------
// ImageMarquee Component
// ---------------------------------------------------------

function ImageMarquee({
  row = 'upper',
  direction,
  speed,
  images,
  className = '',
  ariaLabel = 'Cyber Link showcase gallery',
}) {
  const prefersReducedMotion = useReducedMotion()
  const [isPaused, setIsPaused] = useState(prefersReducedMotion)

  useEffect(() => {
    setIsPaused(prefersReducedMotion)
  }, [prefersReducedMotion])

  const motionControl = (
    <button
      type="button"
      onClick={() => setIsPaused((paused) => !paused)}
      aria-label={isPaused ? 'Play image marquee' : 'Pause image marquee'}
      aria-pressed={isPaused}
      title={isPaused ? 'Play image marquee' : 'Pause image marquee'}
      className="absolute right-3 top-1/2 z-30 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#007f83]/20 bg-white/95 text-[#006b70] shadow-md backdrop-blur-sm transition-colors hover:bg-[#e1f1ef] focus-visible:outline-offset-2"
    >
      {isPaused ? <Play size={16} fill="currentColor" /> : <Pause size={16} />}
    </button>
  )

  // Determine which images to display
  let selectedImages = images
  let resolvedDirection = direction
  let resolvedSpeed = speed

  if (!selectedImages) {
    if (row === 'upper') {
      selectedImages = showcaseRowA
      resolvedDirection = direction || 'left'
      resolvedSpeed = speed || 95
    } else if (row === 'lower') {
      selectedImages = showcaseRowB
      resolvedDirection = direction || 'right'
      resolvedSpeed = speed || 105
    } else {
      // Both rows stacked if explicitly requested
      selectedImages = showcaseImages
    }
  }

  // If row is "both", render two opposite-flowing rows
  if (row === 'both' && !images) {
    return (
      <section
        aria-label={ariaLabel}
        className={`marquee-wrapper relative overflow-hidden bg-transparent py-3 sm:py-6 ${className}`}
      >
        {/* Clean side edge fades that match page background — NO black boxes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[var(--gs-black)] to-transparent sm:w-28 md:w-36"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[var(--gs-black)] to-transparent sm:w-28 md:w-36"
        />

        <div className="flex flex-col gap-2">
          <SingleMarqueeRow
            images={showcaseRowA}
            direction="left"
            speed={95}
            paused={isPaused}
          />
          <SingleMarqueeRow
            images={showcaseRowB}
            direction="right"
            speed={105}
            paused={isPaused}
          />
        </div>
        {motionControl}
      </section>
    )
  }

  // Default: Single row marquee (placed separately across page sections)
  return (
    <section
      aria-label={ariaLabel}
      className={`marquee-wrapper relative overflow-hidden bg-transparent py-2 sm:py-4 ${className}`}
    >
      {/* Clean side edge fades that match page background — NO black boxes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[var(--gs-black)] to-transparent sm:w-28 md:w-36"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[var(--gs-black)] to-transparent sm:w-28 md:w-36"
      />

      <SingleMarqueeRow
        images={selectedImages}
        direction={resolvedDirection || 'left'}
        speed={resolvedSpeed || 50}
        paused={isPaused}
      />
      {motionControl}
    </section>
  )
}

export default ImageMarquee
