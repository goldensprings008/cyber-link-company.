// showcaseImages.js
// ---------------------------------------------------------
// Visual showcase images for the Golden Springs Group
// homepage image marquee.
//
// These images represent the full range of what Golden
// Springs Group does — from software and networking to
// photography, media production, events, and engineering.
//
// Images are temporary Unsplash test images.
// Replace with real Golden Springs photos before going live.
// ---------------------------------------------------------

const showcaseImages = [

  // Software & Development
  {
    id: 'showcase-web-dev',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=75',
    category: 'Web Development',
    alt: 'Website development — computer screen showing web code',
  },
  {
    id: 'showcase-web-app',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=75',
    category: 'Web Applications',
    alt: 'Web application interface on a modern laptop',
  },
  {
    id: 'showcase-mobile-app',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=75',
    category: 'Mobile Applications',
    alt: 'Mobile application development on smartphone',
  },
  {
    id: 'showcase-software',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=75',
    category: 'Software Development',
    alt: 'Software development workspace with multiple screens',
  },
  {
    id: 'showcase-ui-ux',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=75',
    category: 'UI/UX Design',
    alt: 'User interface design wireframes and mockups',
  },
  {
    id: 'showcase-database',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=75',
    category: 'Database Systems',
    alt: 'Server rack in a professional data centre',
  },
  {
    id: 'showcase-automation',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=75',
    category: 'Business Automation',
    alt: 'Automation systems and digital workflows',
  },

  // Computer & IT
  {
    id: 'showcase-computer',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&q=75',
    category: 'Computer & IT',
    alt: 'Computer setup and hardware configuration',
  },
  {
    id: 'showcase-it-support',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=75',
    category: 'IT Support',
    alt: 'IT professional working at a technical support desk',
  },

  // Networking
  {
    id: 'showcase-network',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=75',
    category: 'Networking',
    alt: 'Network cables and patch panel infrastructure',
  },
  {
    id: 'showcase-servers',
    image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800&q=75',
    category: 'Networking',
    alt: 'Server room with enterprise network infrastructure',
  },

  // Electronic Engineering
  {
    id: 'showcase-electronics',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=75',
    category: 'Electronic Engineering',
    alt: 'Circuit board close-up showing electronic components',
  },
  {
    id: 'showcase-electronics-repair',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=75',
    category: 'Electronic Repair',
    alt: 'Electronics repair and soldering work on circuit board',
  },
  {
    id: 'showcase-electrical',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=75',
    category: 'Electrical Work',
    alt: 'Electrical wiring installation and connections',
  },

  // Gadgets & Devices
  {
    id: 'showcase-gadgets',
    image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=800&q=75',
    category: 'Electronic Gadgets',
    alt: 'Modern smartphones and electronic gadgets on a desk',
  },
  {
    id: 'showcase-hardware',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=75',
    category: 'Computer Hardware',
    alt: 'Computer hardware components and accessories',
  },

  // Mechanical Services
  {
    id: 'showcase-mechanical',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&q=75',
    category: 'Mechanical Services',
    alt: 'Mechanical equipment servicing and maintenance',
  },

  // Photography
  {
    id: 'showcase-photography',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=75',
    category: 'Photography',
    alt: 'Professional camera photography setup',
  },
  {
    id: 'showcase-camera',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=75',
    category: 'Photography',
    alt: 'Professional DSLR camera for photography production',
  },

  // Videography & Production
  {
    id: 'showcase-videography',
    image: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=800&q=75',
    category: 'Videography',
    alt: 'Video production camera rig on professional set',
  },
  {
    id: 'showcase-film',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=75',
    category: 'Video Production',
    alt: 'Film production crew working on video shoot',
  },
  {
    id: 'showcase-documentary',
    image: 'https://images.unsplash.com/photo-1585647347384-2593bc35786b?w=800&q=75',
    category: 'Documentary',
    alt: 'Documentary filmmaker filming outdoor scene',
  },

  // TV & Broadcasting
  {
    id: 'showcase-tv-studio',
    image: 'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=800&q=75',
    category: 'TV Production',
    alt: 'Television studio production setup',
  },
  {
    id: 'showcase-broadcast',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=75',
    category: 'Live Broadcast',
    alt: 'Live broadcast control room with multiple monitors',
  },

  // Graphic Design & Creative
  {
    id: 'showcase-graphic-design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=75',
    category: 'Graphic Design',
    alt: 'Graphic designer working at a creative design workstation',
  },
  {
    id: 'showcase-branding',
    image: 'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=800&q=75',
    category: 'Branding',
    alt: 'Brand identity design materials and colour systems',
  },
  {
    id: 'showcase-motion',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=75',
    category: 'Motion Graphics',
    alt: 'Motion graphics animation design on a digital display',
  },

  // Social Media & Content
  {
    id: 'showcase-social',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=75',
    category: 'Social Media Content',
    alt: 'Content creator producing social media videos',
  },

  // Events
  {
    id: 'showcase-event',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=75',
    category: 'Events',
    alt: 'Professional corporate event with audience and stage',
  },
  {
    id: 'showcase-conference',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=75',
    category: 'Conferences',
    alt: 'Business conference setup with speaker and audience',
  },
  {
    id: 'showcase-concert',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=75',
    category: 'Concerts',
    alt: 'Live concert performance with stage lighting',
  },
  {
    id: 'showcase-wedding',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=75',
    category: 'Weddings',
    alt: 'Wedding event venue with elegant decoration',
  },

  // Sound & Lighting
  {
    id: 'showcase-sound',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=75',
    category: 'Sound Services',
    alt: 'Professional sound mixing desk at a live event',
  },
  {
    id: 'showcase-lighting',
    image: 'https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?w=800&q=75',
    category: 'Lighting',
    alt: 'Stage lighting design for a live performance',
  },

  // Live Streaming
  {
    id: 'showcase-streaming',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=75',
    category: 'Live Streaming',
    alt: 'Live streaming setup with camera and broadcast equipment',
  },

]

const half = Math.ceil(showcaseImages.length / 2)
export const showcaseRowA = showcaseImages.slice(0, half)
export const showcaseRowB = showcaseImages.slice(half)

export default showcaseImages

