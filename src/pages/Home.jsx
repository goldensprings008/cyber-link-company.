// Home.jsx
// ---------------------------------------------------------
// Main homepage for Cyber Link Company.
//
// Sections (in order):
//   1. Hero                — brand introduction + typing effect
//   2. Brand marquee       — identity ribbon
//   3. About preview       — who we are
//   4. Departments marquee — Digital · Media · Events ribbon
//   5. Departments preview — three business areas
//   6. Projects preview    — selected featured work
//   7. Capabilities marquee — services ribbon
//   8. Members preview     — the people behind the work
//   9. Vision & Mission    — direction + values
//  10. Platforms preview   — official company platforms
//  11. Quote CTA           — final call to action
// ---------------------------------------------------------

import Hero from '../components/home/Hero'
import GoldenMarquee from '../components/home/GoldenMarquee'
import AboutPreview from '../components/home/AboutPreview'
import DepartmentsPreview from '../components/home/DepartmentsPreview'
import ProjectsPreview from '../components/home/ProjectsPreview'
import StatsSection from '../components/home/StatsSection'
import ImageMarquee from '../components/home/ImageMarquee'
import MembersPreview from '../components/home/MembersPreview'
import VisionMission from '../components/home/VisionMission'
import PlatformsPreview from '../components/home/PlatformsPreview'
import QuoteCTA from '../components/home/QuoteCTA'

import {
  brandMarquee,
  departmentsMarquee,
  capabilitiesMarquee,
} from '../data/marquee'

function Home() {
  return (
    <main className="bg-black">
      <Hero />

      <GoldenMarquee
        items={brandMarquee}
        direction="left"
        variant="brand"
      />

      <AboutPreview />

      {/* 2. Departments Word Marquee (Digital · Media · Events) */}
      <GoldenMarquee
        items={departmentsMarquee}
        direction="right"
        variant="departments"
      />

      {/* Upper Image Marquee — paired with 2nd word marquee */}
      <ImageMarquee
        row="upper"
        direction="left"
        speed={95}
        ariaLabel="Cyber Link Technology & Digital showcase"
      />

      <DepartmentsPreview />

      <ProjectsPreview />

      {/* Stats — after projects, before lower image marquee */}
      <StatsSection />

      {/* Lower Image Marquee */}
      <ImageMarquee
        row="lower"
        direction="right"
        speed={105}
        ariaLabel="Cyber Link Media & Production showcase"
      />

      {/* 3. Capabilities Word Marquee */}
      <GoldenMarquee
        items={capabilitiesMarquee}
        direction="left"
        variant="capabilities"
      />

      <MembersPreview />

      <VisionMission />

      <PlatformsPreview />

      <QuoteCTA />
    </main>
  )
}

export default Home