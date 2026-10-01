// digitalServices.js
// ---------------------------------------------------------
// Services offered by Cyber Link Digital.
//
// Cyber Link Digital focuses on technology,
// software development, computers, IT, digital
// business solutions, networking, electronic
// engineering, mechanical services, and
// electronic gadgets & accessories.
// ---------------------------------------------------------

const digitalServices = [
  // -------------------------------------------------------
  // Software & Development
  // -------------------------------------------------------

  {
    id: 'website-development',
    category: 'Software & Development',
    name: 'Website Development',
    description:
      'Modern, responsive websites designed for businesses, organizations, brands, and individuals.',
  },

  {
    id: 'web-applications',
    category: 'Software & Development',
    name: 'Web Applications',
    description:
      'Interactive web applications built to solve business and organizational problems.',
  },

  {
    id: 'mobile-applications',
    category: 'Software & Development',
    name: 'Mobile Applications',
    description:
      'Mobile application solutions designed for modern digital experiences.',
  },

  {
    id: 'software-development',
    category: 'Software & Development',
    name: 'Software Development',
    description:
      'Custom software solutions built around specific business and organizational requirements.',
  },

  {
    id: 'custom-business-systems',
    category: 'Software & Development',
    name: 'Custom Business Systems',
    description:
      'Digital systems designed to help businesses manage their operations more efficiently.',
  },

  {
    id: 'database-systems',
    category: 'Software & Development',
    name: 'Database Systems',
    description:
      'Structured database solutions for storing, managing, and accessing business information.',
  },

  {
    id: 'api-system-integration',
    category: 'Software & Development',
    name: 'API & System Integration',
    description:
      'Connecting applications and services so they can exchange information and work together.',
  },

  {
    id: 'business-automation',
    category: 'Software & Development',
    name: 'Business Automation',
    description:
      'Digital solutions that automate repetitive business processes and improve productivity.',
  },

  {
    id: 'ui-ux-design',
    category: 'Software & Development',
    name: 'UI/UX Design',
    description:
      'User interfaces and experiences designed to make digital products clear, modern, and easy to use.',
  },

  // -------------------------------------------------------
  // Computer & IT
  // -------------------------------------------------------

  {
    id: 'computer-setup',
    category: 'Computer & IT',
    name: 'Computer Setup & Configuration',
    description:
      'Computer setup and configuration for personal, professional, and business environments.',
  },

  {
    id: 'windows-installation',
    category: 'Computer & IT',
    name: 'Windows Installation & Configuration',
    description:
      'Windows installation, configuration, updates, and system setup.',
  },

  {
    id: 'microsoft-office',
    category: 'Computer & IT',
    name: 'Microsoft Office Installation & Support',
    description:
      'Installation and support for Microsoft Office applications and productivity tools.',
  },

  {
    id: 'microsoft-365',
    category: 'Computer & IT',
    name: 'Microsoft 365 Services',
    description:
      'Microsoft 365 setup, configuration, and support for individuals and organizations.',
  },

  {
    id: 'computer-maintenance',
    category: 'Computer & IT',
    name: 'Computer Maintenance & Repair',
    description:
      'Computer maintenance, troubleshooting, optimization, and repair services.',
  },

  {
    id: 'software-installation',
    category: 'Computer & IT',
    name: 'Software Installation',
    description:
      'Installation and configuration of required computer software and applications.',
  },

  {
    id: 'hardware-peripheral-setup',
    category: 'Computer & IT',
    name: 'Hardware & Peripheral Setup',
    description:
      'Setup and configuration of computers, printers, monitors, accessories, and other peripherals.',
  },

  {
    id: 'data-backup-recovery',
    category: 'Computer & IT',
    name: 'Data Backup & Recovery',
    description:
      'Solutions for protecting important information and recovering lost or damaged data.',
  },

  {
    id: 'network-setup',
    category: 'Computer & IT',
    name: 'Network Setup & Configuration',
    description:
      'Network installation, configuration, and troubleshooting for homes, offices, and organizations.',
  },

  {
    id: 'it-support',
    category: 'Computer & IT',
    name: 'IT Support & Troubleshooting',
    description:
      'Technical assistance for computer systems, software, networks, and digital environments.',
  },

  {
    id: 'system-upgrades',
    category: 'Computer & IT',
    name: 'System Upgrades',
    description:
      'Hardware and software upgrades designed to improve computer performance and capability.',
  },

  {
    id: 'technical-consultancy',
    category: 'Computer & IT',
    name: 'Technical Consultancy',
    description:
      'Technology guidance and technical advice for individuals, businesses, and organizations.',
  },

  // -------------------------------------------------------
  // Digital Business
  // -------------------------------------------------------

  {
    id: 'digital-transformation',
    category: 'Digital Business',
    name: 'Digital Transformation',
    description:
      'Helping businesses adopt digital tools and processes to improve the way they operate.',
  },

  {
    id: 'business-productivity',
    category: 'Digital Business',
    name: 'Business Productivity Solutions',
    description:
      'Digital tools and solutions designed to improve collaboration, organization, and productivity.',
  },

  {
    id: 'cloud-services',
    category: 'Digital Business',
    name: 'Cloud Services',
    description:
      'Cloud-based solutions for storing, accessing, and managing digital resources.',
  },

  {
    id: 'email-setup',
    category: 'Digital Business',
    name: 'Email Setup',
    description:
      'Professional email setup and configuration for businesses and organizations.',
  },

  {
    id: 'domain-hosting',
    category: 'Digital Business',
    name: 'Domain & Hosting Services',
    description:
      'Domain registration guidance and hosting solutions for websites and digital platforms.',
  },

  {
    id: 'website-maintenance',
    category: 'Digital Business',
    name: 'Website Maintenance',
    description:
      'Ongoing website updates, improvements, security checks, and technical maintenance.',
  },

  {
    id: 'software-maintenance',
    category: 'Digital Business',
    name: 'Software Maintenance & Support',
    description:
      'Ongoing maintenance, troubleshooting, updates, and support for software systems.',
  },

  {
    id: 'it-consultancy',
    category: 'Digital Business',
    name: 'IT Consultancy',
    description:
      'Professional guidance for organizations planning, improving, or expanding their technology systems.',
  },

  // -------------------------------------------------------
  // Networking
  // -------------------------------------------------------

  {
    id: 'network-design',
    category: 'Networking',
    name: 'Network Design & Installation',
    description:
      'Planning and installation of wired and wireless networks for homes, offices, and organizations.',
  },

  {
    id: 'internet-setup',
    category: 'Networking',
    name: 'Internet Setup & Configuration',
    description:
      'Internet connection setup, router configuration, and Wi-Fi deployment for residential and business environments.',
  },

  {
    id: 'network-troubleshooting',
    category: 'Networking',
    name: 'Network Troubleshooting',
    description:
      'Diagnosing and resolving connectivity issues, slow networks, and network hardware problems.',
  },

  {
    id: 'structured-cabling',
    category: 'Networking',
    name: 'Structured Cabling',
    description:
      'Cable management and structured cabling solutions for buildings, offices, and professional environments.',
  },

  // -------------------------------------------------------
  // Electronic Engineering
  // -------------------------------------------------------

  {
    id: 'electronic-repair',
    category: 'Electronic Engineering',
    name: 'Electronic Repair & Servicing',
    description:
      'Diagnosis and repair of electronic devices, circuits, and equipment.',
  },

  {
    id: 'electronic-installation',
    category: 'Electronic Engineering',
    name: 'Electronic Installation',
    description:
      'Installation and commissioning of electronic systems and devices for homes and businesses.',
  },

  {
    id: 'electrical-wiring',
    category: 'Electronic Engineering',
    name: 'Electrical Wiring & Connections',
    description:
      'Safe installation and management of electrical connections and wiring for electronic systems.',
  },

  // -------------------------------------------------------
  // Mechanical Services
  // -------------------------------------------------------

  {
    id: 'mechanical-servicing',
    category: 'Mechanical Services',
    name: 'Mechanical Servicing',
    description:
      'General mechanical servicing, maintenance, and repair for equipment and machinery.',
  },

  {
    id: 'equipment-maintenance',
    category: 'Mechanical Services',
    name: 'Equipment Maintenance',
    description:
      'Scheduled maintenance and upkeep for mechanical and technical equipment.',
  },

  // -------------------------------------------------------
  // Electronic Gadgets & Accessories
  // -------------------------------------------------------

  {
    id: 'gadget-sales',
    category: 'Electronic Gadgets & Accessories',
    name: 'Electronic Gadgets',
    description:
      'Supply and sourcing of electronic gadgets including phones, tablets, cameras, and smart devices.',
  },

  {
    id: 'computer-accessories',
    category: 'Electronic Gadgets & Accessories',
    name: 'Computer Accessories',
    description:
      'Keyboards, mice, monitors, headsets, and other computer peripherals and accessories.',
  },

  {
    id: 'tech-accessories',
    category: 'Electronic Gadgets & Accessories',
    name: 'Tech Accessories & Cables',
    description:
      'Cables, adapters, chargers, and accessories for computers, phones, and electronic devices.',
  },
]

export default digitalServices