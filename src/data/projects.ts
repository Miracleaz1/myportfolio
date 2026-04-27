export type Project = {
  id: number
  title: string
  description: string
  technologies: string[]
  impact: string
  image: string
  media: Array<{
    src: string
    alt: string
  }>
  link: string
  github: string
  caseStudy: {
    problem: string
    approach: string[]
    result: string
  }
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Crypto Alerts Automation System',
    description: 'A full end-to-end automation workflow that fetches live crypto market data, filters price movements, stores records in Supabase, and sends Telegram alerts.',
    technologies: ['Make.com', 'CoinGecko API', 'Supabase', 'Telegram Bot', 'Webhooks'],
    impact: 'Published on the Autonoms marketplace with live monitoring and alert delivery in real time.',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=500&h=300&fit=crop',
    media: [
      {
        src: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1200&h=700&fit=crop',
        alt: 'Crypto dashboard with market charts'
      },
      {
        src: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=1200&h=700&fit=crop',
        alt: 'Automation workflow concept for crypto alerts'
      },
      {
        src: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?w=1200&h=700&fit=crop',
        alt: 'Mobile notification feed for market movement alerts'
      }
    ],
    link: 'https://micryptoalertweb.lovable.app',
    github: '',
    caseStudy: {
      problem: 'Traders needed fast crypto movement alerts without manually watching dashboards all day.',
      approach: [
        'Designed Make.com scenarios with webhooks, routers, and HTTP modules for robust data flow.',
        'Integrated CoinGecko API and filtered movement thresholds before notifying users.',
        'Stored alert history in Supabase and exposed status in a Lovable-based dashboard.',
        'Delivered notifications through Telegram bot channels for real-time action.'
      ],
      result: 'Built and published a production-ready automation agent on Autonoms marketplace with live monitoring and alert dispatch.'
    }
  },
  {
    id: 2,
    title: 'Task Master (Capstone Project)',
    description: 'A task management web app that allows users to create, update, and delete tasks with validation and a user-friendly interface.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    impact: 'Delivered cleaner task organization with reliable CRUD flow and form validation for usability.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    media: [
      {
        src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=700&fit=crop',
        alt: 'Task board with organized workflow lists'
      },
      {
        src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&h=700&fit=crop',
        alt: 'Planning session for task management user flow'
      },
      {
        src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=700&fit=crop',
        alt: 'Developer workspace used to build task management features'
      }
    ],
    link: 'https://task-ochre-two.vercel.app/',
    github: '',
    caseStudy: {
      problem: 'Users needed a simple and reliable way to manage daily tasks without cluttered interfaces.',
      approach: [
        'Built core create, update, and delete actions with clear UI states.',
        'Added input validation and user feedback for cleaner form handling.',
        'Focused on a responsive layout to support both desktop and mobile users.'
      ],
      result: 'Delivered a capstone-ready task manager that improved organization flow and reliability for end users.'
    }
  },
  {
    id: 3,
    title: 'Country Information Web App',
    description: 'A responsive Next.js app that fetches real-time country data with search, filtering, detail views, and localStorage favorites.',
    technologies: ['Next.js', 'JavaScript', 'REST APIs', 'Vercel'],
    impact: 'Improved exploration speed with fast country search/filter and persistent favorites across sessions.',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=500&h=300&fit=crop',
    media: [
      {
        src: 'https://flagcdn.com/w1280/ng.png',
        alt: 'Nigeria flag'
      },
      {
        src: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1200&h=700&fit=crop',
        alt: 'Country profile and travel details interface concept'
      },
      {
        src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=700&fit=crop',
        alt: 'Landscape banner representing country discovery experience'
      }
    ],
    link: 'https://country-information-app-sepia.vercel.app/',
    github: '',
    caseStudy: {
      problem: 'Visitors needed quick access to country data with powerful search and persistent favorites.',
      approach: [
        'Integrated REST APIs to fetch country datasets in real time.',
        'Implemented search, filters, and details view for faster exploration.',
        'Added localStorage favorites to keep personalized country lists across sessions.'
      ],
      result: 'Shipped a responsive app on Vercel that balances speed, utility, and user-friendly discovery.'
    }
  },
  {
    id: 4,
    title: 'Property Management Web App',
    description: 'A team-built property management platform where I focused on modular, reusable frontend components and responsive layouts.',
    technologies: ['JavaScript', 'React', 'Responsive UI', 'Team Collaboration'],
    impact: 'Helped speed up delivery by building reusable frontend modules for listing and tracking properties.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    media: [
      {
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop',
        alt: 'Property operations dashboard with analytics cards'
      },
      {
        src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=700&fit=crop',
        alt: 'Modern apartment listing visual'
      },
      {
        src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=700&fit=crop',
        alt: 'Team workflow for property management platform features'
      }
    ],
    link: 'https://prop-mate-e1z9.vercel.app/',
    github: '',
    caseStudy: {
      problem: 'The team needed maintainable UI building blocks to support listing, tracking, and property workflows.',
      approach: [
        'Built modular components for property cards, list views, and detail interactions.',
        'Applied responsive layout patterns to keep parity across devices.',
        'Worked in a collaborative workflow to align features with sprint objectives.'
      ],
      result: 'Improved team delivery speed and consistency through reusable components and clearer frontend structure.'
    }
  },
  {
    id: 5,
    title: 'LearnWithPapa Web Application',
    description: 'A full-featured LMS web application for learners, instructors, and program administrators with end-to-end course delivery, collaboration, analytics, and account management.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Role-Based Access', 'Course Management', 'Analytics Dashboard'],
    impact: 'Delivered a stable, deployment-ready LMS web application with complete multi-role workflows and polished frontend user experience.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=300&fit=crop',
    media: [
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=700&fit=crop',
        alt: 'Students learning on laptops in a digital classroom'
      },
      {
        src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=700&fit=crop',
        alt: 'Team planning a product roadmap on whiteboard'
      },
      {
        src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=700&fit=crop',
        alt: 'Online learning interface and study materials'
      }
    ],
    link: 'https://team-papa-frontend-march.vercel.app',
    github: '',
    caseStudy: {
      problem: 'Online learning platforms often fail to fully support all key actors in one system. LearnWithPapa needed a unified experience for learners, instructors, and program administrators with reliable operations and measurable progress.',
      approach: [
        'Built the frontend with React and Next.js to deliver a fast, responsive, and scalable user interface.',
        'Designed complete UI/UX flows across authentication, dashboards, course catalog, profiles, settings, and analytics.',
        'Implemented core multi-role modules including course creation/management, assignments, collaboration, notifications, and progress tracking.',
        'Refined the experience through testing and bug fixes to ensure smooth navigation and reliable feature behavior.'
      ],
      result: 'Delivered LearnWithPapa as a complete LMS web application with all major frontend modules implemented and validated for deployment.'
    }
  }
]
