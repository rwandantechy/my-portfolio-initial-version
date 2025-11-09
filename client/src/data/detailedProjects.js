export const detailedProjects = [
  {
    id: 1,
    title: 'Ibyapa.com - Exam Preparation Platform',
    emoji: '📚',
    description: 'A comprehensive MERN stack platform for A-Level exam preparation with 40,000+ active users across Rwanda.',
    featured: true,
    metrics: [
      { icon: '👥', value: '40K+', label: 'Active Users' },
      { icon: '📈', value: '+25%', label: 'Pass Rate' },
      { icon: '⏱️', value: '200ms', label: 'Avg Response' }
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redis', 'AWS'],
    challenges: [
      'Handling concurrent access from thousands of students during exam periods',
      'Real-time progress tracking and analytics for 40K+ users',
      'Optimizing database queries for complex exam statistics',
      'Ensuring 99.9% uptime during critical exam preparation periods'
    ],
    solutions: [
      'Implemented Redis caching layer reducing database load by 70%',
      'Built microservices architecture for scalability',
      'Used MongoDB aggregation pipelines for real-time analytics',
      'Deployed on AWS with auto-scaling and load balancing',
      'Added CDN for static content delivery'
    ],
    results: [
      'Improved student pass rates by 25% through targeted practice',
      'Reduced average page load time from 2.5s to 200ms',
      'Achieved 99.97% uptime over 12 months',
      'Scaled to 40,000+ concurrent users without performance issues'
    ],
    links: {
      live: 'https://ibyapa.com',
      github: null // Private repository
    }
  },
  {
    id: 2,
    title: 'Containerized AI Inference Server',
    emoji: '🤖',
    description: 'Raspberry Pi 5-based Docker environment for deploying multimodal AI models with remote access capabilities.',
    featured: true,
    metrics: [
      { icon: '🚀', value: '3x', label: 'Faster Deploy' },
      { icon: '🔒', value: '100%', label: 'Secure VPN' },
      { icon: '⚡', value: '50ms', label: 'Inference Time' }
    ],
    tech: ['Docker', 'Python', 'FastAPI', 'TensorFlow', 'Raspberry Pi', 'WireGuard VPN'],
    challenges: [
      'Limited computational resources on Raspberry Pi hardware',
      'Secure remote access without exposing services publicly',
      'Managing multiple AI model versions efficiently',
      'Ensuring reproducible environments across deployments'
    ],
    solutions: [
      'Created optimized Docker containers with multi-stage builds',
      'Implemented WireGuard VPN for secure remote access',
      'Used Docker Compose for orchestrating multiple services',
      'Built automated CI/CD pipeline for model deployment',
      'Implemented model versioning with Docker tags'
    ],
    results: [
      'Reduced deployment time from 45 minutes to 15 minutes',
      'Achieved 50ms average inference time for common models',
      'Zero security breaches with VPN-only access',
      'Successfully deployed and tested 12+ AI models'
    ],
    links: {
      github: null // Research project
    }
  },
  {
    id: 3,
    title: 'Budget Planner Web Application',
    emoji: '💰',
    description: 'Full-stack financial management tool built with .NET Core and SQL Server for personal budget tracking.',
    featured: false,
    metrics: [
      { icon: '📊', value: '100%', label: 'Data Accuracy' },
      { icon: '🎯', value: '5+', label: 'Features' },
      { icon: '⚡', value: 'Real-time', label: 'Updates' }
    ],
    tech: ['.NET Core', 'C#', 'SQL Server', 'Entity Framework', 'Bootstrap', 'Chart.js'],
    challenges: [
      'Complex financial calculations and category management',
      'Real-time budget tracking with automatic categorization',
      'Data visualization for spending patterns',
      'Secure handling of sensitive financial data'
    ],
    solutions: [
      'Implemented Repository pattern with Entity Framework',
      'Used stored procedures for complex financial calculations',
      'Built responsive UI with Chart.js for visualizations',
      'Added JWT authentication for secure API access',
      'Implemented automated backup system'
    ],
    results: [
      'Accurate financial tracking with 100% data integrity',
      'Reduced manual categorization time by 80%',
      'Generated insights helping users save average 15% monthly',
      'Zero data loss incidents over 6 months of use'
    ]
  },
  {
    id: 4,
    title: 'Nkotanyi Driving School Platform',
    emoji: '🚗',
    description: 'Complete web platform for driving school management with 95% client satisfaction and 20% reduced downtime.',
    featured: true,
    metrics: [
      { icon: '⭐', value: '95%', label: 'Satisfaction' },
      { icon: '📉', value: '-20%', label: 'Downtime' },
      { icon: '🔧', value: '24/7', label: 'Support' }
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'Vue.js', 'NGINX', 'VPS'],
    challenges: [
      'Managing high traffic during peak registration periods',
      'Ensuring 24/7 availability for booking system',
      'Handling complex scheduling for instructors and students',
      'Providing tier-1 and tier-2 technical support'
    ],
    solutions: [
      'Optimized VPS server configuration and caching',
      'Implemented automated monitoring and alerting system',
      'Used NGINX load balancing for traffic distribution',
      'Built automated backup and disaster recovery system',
      'Added weekly security updates and firewall rules'
    ],
    results: [
      'Achieved 95% client satisfaction rating',
      'Reduced system downtime by 20% through proactive monitoring',
      'Improved booking response time by 40%',
      'Zero data breaches with enhanced security measures'
    ],
    links: {
      live: 'https://nkotanyi.rw'
    }
  },
  {
    id: 5,
    title: 'YIGSE NGO Website',
    emoji: '🌍',
    description: 'Professional website for Youth Initiative for Global Sustainability and Empowerment NGO.',
    featured: false,
    metrics: [
      { icon: '🎨', value: 'Modern', label: 'Design' },
      { icon: '📱', value: '100%', label: 'Responsive' },
      { icon: '⚡', value: '<1s', label: 'Load Time' }
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Netlify'],
    challenges: [
      'Creating engaging design for social impact organization',
      'Ensuring accessibility for all users',
      'Fast loading times on slow connections',
      'Easy content management for non-technical staff'
    ],
    solutions: [
      'Designed mobile-first responsive layout',
      'Optimized images and assets for fast loading',
      'Implemented semantic HTML for accessibility',
      'Created simple CMS integration for updates',
      'Deployed on Netlify CDN for global reach'
    ],
    results: [
      'Achieved 98% Lighthouse performance score',
      'Sub-second load times across all pages',
      'Increased volunteer applications by 60%',
      'Fully accessible (WCAG 2.1 AA compliant)'
    ]
  },
  {
    id: 6,
    title: 'Task Tracking System',
    emoji: '✅',
    description: 'Internal task management system built with Node.js and MongoDB, improving team efficiency by 70%.',
    featured: false,
    metrics: [
      { icon: '⚡', value: '70%', label: 'Faster Response' },
      { icon: '📊', value: 'Real-time', label: 'Analytics' },
      { icon: '👥', value: '15+', label: 'Team Users' }
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'React', 'Socket.io', 'JWT'],
    challenges: [
      'Real-time collaboration across departments',
      'Complex task dependencies and workflows',
      'Generating meaningful productivity reports',
      'Integration with existing tools and systems'
    ],
    solutions: [
      'Implemented Socket.io for real-time updates',
      'Built flexible task workflow engine',
      'Created automated reporting system',
      'Used JWT for secure authentication',
      'Added REST API for third-party integrations'
    ],
    results: [
      'Reduced inter-departmental response times by 70%',
      'Improved task completion rate by 45%',
      'Generated automated daily/weekly reports',
      'Successfully adopted by 15+ team members'
    ]
  }
];
