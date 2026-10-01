// AppRoutes.jsx
// ---------------------------------------------------------
// Main routing configuration for Cyber Link Company.
// ---------------------------------------------------------

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useParams,
} from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SiWhatsapp } from '@icons-pack/react-simple-icons'
import { ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PageTransition from '../components/layout/PageTransition'
import ScrollProgress from '../components/common/ScrollProgress'

import Home from '../pages/Home'
import About from '../pages/About'
import Digital from '../pages/Digital'
import Media from '../pages/Media'
import Events from '../pages/Events'
import Members from '../pages/Members'
import Projects from '../pages/Projects'
import ProjectDetails from '../pages/ProjectDetails'
import Platforms from '../pages/Platforms'
import Quote from '../pages/Quote'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

import MemberProfile from '../components/members/MemberProfile'

import members from '../data/members'
import projects from '../data/projects'

// ---------------------------------------------------------
// Member details route
// ---------------------------------------------------------

function MemberDetailsPage() {
  const { id } = useParams()

  const member = members.find((item) => item.id === id)

  return <MemberProfile member={member} />
}

// ---------------------------------------------------------
// Project details route
// ---------------------------------------------------------

function ProjectDetailsPage() {
  const { id } = useParams()

  const project = projects.find((item) => item.id === id)

  return <ProjectDetails project={project} />
}

// ---------------------------------------------------------
// Floating WhatsApp button — visible on every page
// ---------------------------------------------------------

function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, ease: 'easeOut' }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="group relative">

        {/* Tooltip */}
        <motion.span
          initial={{ opacity: 0, x: 8 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl border border-white/10 bg-[#0a0a0a] px-3 py-1.5 text-xs font-medium text-white/80 shadow-xl opacity-0 transition-all duration-200 group-hover:opacity-100"
        >
          Chat with us
        </motion.span>

        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25d366]/30"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Button */}
        <motion.a
          href="https://wa.me/256744131492"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Cyber Link Company on WhatsApp"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_4px_24px_rgba(37,211,102,0.4)] transition-shadow duration-300 hover:shadow-[0_4px_32px_rgba(37,211,102,0.6)]"
        >
          <SiWhatsapp size={26} />
        </motion.a>

      </div>
    </motion.div>
  )
}

// ---------------------------------------------------------
// Back to Top button — appears after scrolling 400px
// ---------------------------------------------------------

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-24 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#009090]/40 bg-[#009090]/10 text-[#009090] shadow-lg backdrop-blur-sm transition-colors hover:bg-[#009090] hover:text-white"
        >
          <ArrowUp size={18} strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

// ---------------------------------------------------------
// Main website layout
// ---------------------------------------------------------

function SiteLayout() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Scroll progress bar — thin teal line at top */}
      <ScrollProgress />

      <Navbar />

      <main className="relative">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      <Footer />

      {/* Floating WhatsApp button — present on every page */}
      <WhatsAppButton />

      {/* Back to top — appears after scrolling */}
      <BackToTop />
    </div>
  )
}

// ---------------------------------------------------------
// Application routes
// ---------------------------------------------------------

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Departments */}
          <Route path="/digital" element={<Digital />} />
          <Route path="/media" element={<Media />} />
          <Route path="/events" element={<Events />} />

          {/* Members */}
          <Route path="/members" element={<Members />} />
          <Route
            path="/members/:id"
            element={<MemberDetailsPage />}
          />

          {/* Projects */}
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/projects/:id"
            element={<ProjectDetailsPage />}
          />

          {/* Company platforms */}
          <Route path="/platforms" element={<Platforms />} />

          {/* Customer quote request */}
          <Route path="/quote" element={<Quote />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* 404 — catch all unknown routes */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes