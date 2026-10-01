// services.js
// ---------------------------------------------------------
// Main service categories for Cyber Link Company.
//
// This file contains the three major areas of the company:
//
// 1. Cyber Link Digital
// 2. Cyber Link Media
// 3. Cyber Link Events
//
// More detailed services for each area will be stored in
// their own data files.
// ---------------------------------------------------------

const services = [
  {
    id: 'digital',
    name: 'Cyber Link Digital',
    shortName: 'Digital',
    description:
      'Technology, software, websites, applications, computers, IT support, and digital business solutions.',
    path: '/digital',
  },

  {
    id: 'media',
    name: 'Cyber Link Media',
    shortName: 'Media',
    description:
      'Photography, videography, TV production, live streaming, graphics, branding, and creative media.',
    path: '/media',
  },

  {
    id: 'events',
    name: 'Cyber Link Events',
    shortName: 'Events',
    description:
      'Event planning, management, live production, sound, lighting, staging, streaming, and promotion.',
    path: '/events',
  },
]

export default services