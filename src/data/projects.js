// projects.js
// ---------------------------------------------------------
// Projects and work completed by Golden Springs Group.
//
// Projects can belong to Digital, Media, Events, or more
// than one area.
//
// Images use Unsplash test images matched to project type.
// Replace with real project images before going live.
// ---------------------------------------------------------

const projects = [

  // -------------------------------------------------------
  // Digital – Software & Development
  // -------------------------------------------------------

  {
    id: 'golden-springs-website',
    title: 'Golden Springs Group Website',
    area: 'Digital',
    category: 'Web Development',
    description:
      'A modern, interactive website that brings Golden Springs Digital, Media, and Events together in one unified digital platform.',
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80',
    year: '2026',
    featured: true,
  },

  {
    id: 'digital-business-system',
    title: 'Digital Business Management System',
    area: 'Digital',
    category: 'Software Development',
    description:
      'A custom digital system designed to help an organization manage information, operations, and workflows from a single platform.',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
    year: '2026',
    featured: true,
  },

  {
    id: 'web-application-project',
    title: 'Custom Web Application',
    area: 'Digital',
    category: 'Web Applications',
    description:
      'An interactive web application built to solve a specific business problem, streamlining processes and improving productivity.',
    image:
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  {
    id: 'mobile-application-project',
    title: 'Mobile Application Development',
    area: 'Digital',
    category: 'Mobile Applications',
    description:
      'A mobile application designed to deliver a seamless digital experience for users on Android and iOS platforms.',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  {
    id: 'ui-ux-design-project',
    title: 'UI/UX Design Project',
    area: 'Digital',
    category: 'UI/UX Design',
    description:
      'A complete user interface and experience design for a digital product, focused on clarity, usability, and modern aesthetics.',
    image:
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  {
    id: 'database-system-project',
    title: 'Database System Implementation',
    area: 'Digital',
    category: 'Database Systems',
    description:
      'Structured database architecture designed to store, manage, and provide fast, reliable access to organizational data.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  {
    id: 'business-automation-project',
    title: 'Business Process Automation',
    area: 'Digital',
    category: 'Business Automation',
    description:
      'Automated digital workflows that eliminate manual tasks, reduce errors, and help an organization operate more efficiently.',
    image:
      'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&q=80',
    year: '2026',
    featured: true,
  },

  // -------------------------------------------------------
  // Digital – Computer & IT
  // -------------------------------------------------------

  {
    id: 'computer-setup-project',
    title: 'Office Computer Setup & Configuration',
    area: 'Digital',
    category: 'Computer & IT',
    description:
      'Full setup and configuration of office computers, peripherals, and software for a professional working environment.',
    image:
      'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  {
    id: 'it-support-project',
    title: 'IT Support & Systems Management',
    area: 'Digital',
    category: 'IT Support',
    description:
      'Ongoing technical support and systems management for an organization, keeping computers, software, and networks running smoothly.',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  {
    id: 'data-backup-project',
    title: 'Data Backup & Recovery System',
    area: 'Digital',
    category: 'Data Backup & Recovery',
    description:
      'A reliable data backup and recovery solution protecting critical business information from loss or corruption.',
    image:
      'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7d3?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  // -------------------------------------------------------
  // Digital – Networking
  // -------------------------------------------------------

  {
    id: 'office-network-project',
    title: 'Office Network Design & Installation',
    area: 'Digital',
    category: 'Networking',
    description:
      'Complete network design and installation for a professional office environment, including wired and wireless infrastructure.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
    year: '2026',
    featured: true,
  },

  {
    id: 'structured-cabling-project',
    title: 'Structured Cabling Installation',
    area: 'Digital',
    category: 'Networking',
    description:
      'Professional structured cabling and cable management solution for a multi-floor commercial building.',
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  {
    id: 'wifi-deployment-project',
    title: 'Enterprise Wi-Fi Deployment',
    area: 'Digital',
    category: 'Networking',
    description:
      'High-performance Wi-Fi deployment for a large commercial space, ensuring reliable wireless connectivity throughout the premises.',
    image:
      'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  // -------------------------------------------------------
  // Digital – Electronic Engineering
  // -------------------------------------------------------

  {
    id: 'electronic-installation-project',
    title: 'Electronic Systems Installation',
    area: 'Digital',
    category: 'Electronic Engineering',
    description:
      'Installation and commissioning of electronic systems and devices for a residential and commercial environment.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  {
    id: 'electronic-repair-project',
    title: 'Electronic Repair & Servicing',
    area: 'Digital',
    category: 'Electronic Engineering',
    description:
      'Diagnosis and professional repair of electronic devices, circuit boards, and equipment for homes and businesses.',
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  {
    id: 'electrical-wiring-project',
    title: 'Electrical Wiring & Connections',
    area: 'Digital',
    category: 'Electronic Engineering',
    description:
      'Safe and professional electrical wiring and connection installation for electronic systems in a commercial property.',
    image:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  // -------------------------------------------------------
  // Digital – Mechanical Services
  // -------------------------------------------------------

  {
    id: 'mechanical-servicing-project',
    title: 'Equipment Mechanical Servicing',
    area: 'Digital',
    category: 'Mechanical Services',
    description:
      'Scheduled mechanical servicing and maintenance for technical equipment, ensuring reliable long-term performance.',
    image:
      'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  // -------------------------------------------------------
  // Media – Production
  // -------------------------------------------------------

  {
    id: 'media-production-project',
    title: 'Professional Media Production',
    area: 'Media',
    category: 'Video Production',
    description:
      'A creative media production combining video, photography, graphics, and professional post-production to deliver a compelling visual story.',
    image:
      'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200&q=80',
    video:
      'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    year: '2026',
    featured: true,
  },

  {
    id: 'commercial-video-project',
    title: 'Commercial Video Production',
    area: 'Media',
    category: 'Commercial Production',
    description:
      'A high-quality commercial video for a brand, designed to communicate the product clearly and creatively to a wide audience.',
    image:
      'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=1200&q=80',
    video:
      'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    year: '2026',
    featured: false,
  },

  {
    id: 'photography-project',
    title: 'Professional Photography Session',
    area: 'Media',
    category: 'Photography',
    description:
      'A professional photography session capturing high-quality portraits, product images, and brand visuals for a client.',
    image:
      'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  {
    id: 'documentary-project',
    title: 'Documentary Production',
    area: 'Media',
    category: 'Documentary Production',
    description:
      'A documentary-style production telling a real and meaningful story through professional footage, interviews, and careful editing.',
    image:
      'https://images.unsplash.com/photo-1585647347384-2593bc35786b?w=1200&q=80',
    video:
      'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    year: '2026',
    featured: false,
  },

  {
    id: 'live-streaming-project',
    title: 'Live Streaming Production',
    area: 'Media',
    category: 'Live Streaming',
    description:
      'Professional live streaming setup for a major event, connecting the physical experience with thousands of online viewers.',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
    video:
      'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    year: '2026',
    featured: true,
  },

  {
    id: 'tv-production-project',
    title: 'TV Program Production',
    area: 'Media',
    category: 'TV Production',
    description:
      'A full television program production from concept to broadcast, including studio setup, multi-camera filming, and post-production.',
    image:
      'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=1200&q=80',
    video:
      'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    year: '2026',
    featured: false,
  },

  // -------------------------------------------------------
  // Media – Creative
  // -------------------------------------------------------

  {
    id: 'graphic-design-project',
    title: 'Graphic Design & Visual Identity',
    area: 'Media',
    category: 'Graphic Design',
    description:
      'A complete visual identity and graphic design system for an organization, including logos, colors, typography, and brand materials.',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
    year: '2026',
    featured: true,
  },

  {
    id: 'logo-branding-project',
    title: 'Logo & Branding Project',
    area: 'Media',
    category: 'Branding',
    description:
      'A distinctive logo and complete branding package designed to give a business a clear and memorable visual presence.',
    image:
      'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  {
    id: 'motion-graphics-project',
    title: 'Motion Graphics Production',
    area: 'Media',
    category: 'Motion Graphics',
    description:
      'Animated motion graphics and visual elements created for television, social media platforms, and digital advertising.',
    image:
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  {
    id: 'social-media-content-project',
    title: 'Social Media Content Creation',
    area: 'Media',
    category: 'Social Media Content',
    description:
      'A series of creative visual content pieces designed for social media platforms to engage audiences and build brand awareness.',
    image:
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  // -------------------------------------------------------
  // Events – Event Management
  // -------------------------------------------------------

  {
    id: 'corporate-event-project',
    title: 'Corporate Event Production',
    area: 'Events',
    category: 'Event Production',
    description:
      'A complete event production combining stage design, sound, lighting, visuals, and live technical support for a major corporate function.',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
    year: '2026',
    featured: true,
  },

  {
    id: 'conference-production-project',
    title: 'Conference Production',
    area: 'Events',
    category: 'Conferences',
    description:
      'End-to-end technical production and management for a large professional conference, including AV systems and live streaming.',
    image:
      'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  {
    id: 'concert-production-project',
    title: 'Concert & Live Performance',
    area: 'Events',
    category: 'Concerts',
    description:
      'Full technical and creative production for a live concert, including sound engineering, stage lighting, and live media coverage.',
    image:
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&q=80',
    year: '2026',
    featured: true,
  },

  {
    id: 'wedding-production-project',
    title: 'Wedding Event Production',
    area: 'Events',
    category: 'Weddings',
    description:
      'A beautifully managed wedding event with full production support, photography, videography, sound, and visual decoration.',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  {
    id: 'celebration-event-project',
    title: 'Celebration Event Management',
    area: 'Events',
    category: 'Parties & Celebrations',
    description:
      'Full planning and production support for a private celebration, creating a memorable experience for guests and hosts.',
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  // -------------------------------------------------------
  // Events – Event Production
  // -------------------------------------------------------

  {
    id: 'sound-services-project',
    title: 'Professional Sound Services',
    area: 'Events',
    category: 'Sound Services',
    description:
      'High-quality sound system setup, audio engineering, and live sound management for a large-scale event and performance.',
    image:
      'https://images.unsplash.com/photo-1571266028243-d220c6a6f347?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  {
    id: 'stage-lighting-project',
    title: 'Stage Lighting Design',
    area: 'Events',
    category: 'Lighting',
    description:
      'Creative stage and venue lighting design that enhances the atmosphere and visual impact of a live event or performance.',
    image:
      'https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  {
    id: 'event-media-coverage-project',
    title: 'Event Media Coverage',
    area: 'Events',
    category: 'Media Coverage',
    description:
      'Professional photography and videography coverage capturing the full scope of an event experience from start to finish.',
    image:
      'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=1200&q=80',
    year: '2026',
    featured: false,
  },

  {
    id: 'live-broadcast-project',
    title: 'Live Broadcast Production',
    area: 'Events',
    category: 'Live Broadcast',
    description:
      'A multi-camera live broadcast production for a high-profile event, designed for professional television and online streaming.',
    image:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80',
    video:
      'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    year: '2026',
    featured: true,
  },

  {
    id: 'event-branding-project',
    title: 'Event Branding & Promotion',
    area: 'Events',
    category: 'Event Promotion',
    description:
      'A comprehensive event branding campaign including visual identity, posters, digital promotion, and social media content.',
    image:
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80',
    year: '2026',
    featured: false,
  },

]

export default projects
