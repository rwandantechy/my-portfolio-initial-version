const defaultProjects = [
  {
    id: 'ibyapa',
    title: 'Ibyapa.com — Driving Exam Platform',
    description:
      'Created to support high exam-prep demand without service instability, this platform serves 72,000+ learners with backend flows designed for reliable sessions, payments, and continuous access.',
    featured: true,
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    metrics: ['72K+ users', 'Production reliability ownership'],
    challenges: [],
    solutions: [],
    results: [],
    links: { live: 'https://ibyapa.com' },
  },
  {
    id: 'ai-server',
    title: 'Containerized AI Server',
    description:
      'Designed for repeatable model deployment on constrained hardware, with containerized services, secure remote access, and predictable runtime behavior under limited resources.',
    featured: true,
    tech: ['Docker', 'Raspberry Pi', 'Python', 'AI/ML'],
    metrics: ['Research deployment'],
    challenges: [],
    solutions: [],
    results: [],
    links: {},
  },
  {
    id: 'budget-planner',
    title: 'Personal Budget Planner',
    description:
      'Built to reduce manual tracking errors by enforcing consistent transaction rules and dependable data handling in everyday financial workflows.',
    featured: false,
    tech: ['C#', '.NET Core', 'SQL Server'],
    metrics: ['Production-ready'],
    challenges: [],
    solutions: [],
    results: [],
    links: {},
  },
];

const defaultBlogs = [
  {
    id: 'blog-automata-theory',
    title: 'Understanding Automata Theory: From DFA to Turing Machines',
    excerpt:
      'A comprehensive guide to automata theory, exploring deterministic and non-deterministic finite automata, pushdown automata, and the foundations of computability.',
    content:
      'A comprehensive guide to automata theory, exploring deterministic and non-deterministic finite automata, pushdown automata, and the foundations of computability.',
    readTime: '8 min read',
    tags: ['Theory of Computation', 'Automata', 'Computer Science'],
    featured: true,
  },
  {
    id: 'blog-reliable-node-apis',
    title: 'Operating Reliable Node.js APIs in Production',
    excerpt:
      'Practical patterns for API resilience, incident debugging, and safer deployment workflows in live backend systems.',
    content:
      'Practical patterns for API resilience, incident debugging, and safer deployment workflows in live backend systems.',
    readTime: '12 min read',
    tags: ['Backend', 'Node.js', 'Reliability'],
    featured: true,
  },
  {
    id: 'blog-p-vs-np',
    title: 'Computational Complexity: P vs NP Problem',
    excerpt:
      "Diving deep into one of computer science's greatest unsolved mysteries and its implications for algorithm design.",
    content:
      "Diving deep into one of computer science's greatest unsolved mysteries and its implications for algorithm design.",
    readTime: '10 min read',
    tags: ['Algorithms', 'Complexity Theory', 'Research'],
    featured: false,
  },
];

const defaultSkills = [
  {
    id: 'skills-languages',
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
  },
  {
    id: 'skills-backend',
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'Laravel'],
  },
  {
    id: 'skills-databases',
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'skills-devops',
    title: 'DevOps & Infra',
    skills: ['Docker', 'Linux', 'NGINX', 'CI/CD', 'VPS'],
  },
];

module.exports = {
  defaultProjects,
  defaultBlogs,
  defaultSkills,
};
