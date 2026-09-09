// ============================================
// JUNAID ABBAS - PORTFOLIO DATA
// ============================================

export const projects = [
  {
    id: 'tryona',
    number: '01',
    title: 'TryONa',
    label: 'FYP / FULL STACK',
    shortDesc: 'AI-powered virtual try-on platform for exploring clothing and fashion experiences digitally.',
    fullDesc: `TryONa is a final-year project focused on a modern digital fashion experience, combining a React frontend with authentication, application state management, and a MongoDB-backed data layer.`,
    features: [
      'Virtual try-on experience',
      'Modern React interface',
      'Firebase authentication',
      'Context API state management',
      'MongoDB Atlas integration',
      'Responsive user experience'
    ],
    tech: ['React', 'TypeScript', 'Context API', 'Firebase Authentication', 'MongoDB Atlas'],
    category: 'fullstack',
    githubUrl: 'https://github.com/jjbhatti700-jpg/TryONa',
    featured: true
  },
  {
    id: 'ai-health-assistant',
    number: '02',
    title: 'HealthAI',
    label: 'AI / FULL STACK',
    shortDesc: 'AI-powered healthcare platform providing intelligent health insights, symptom analysis, personalized recommendations, and secure health history management.',
    fullDesc: `An AI-powered healthcare application that combines a modern React frontend with a Node.js and Express backend. The platform provides health insights, symptom analysis, personalized recommendations, health history tracking, and user authentication backed by MongoDB Atlas.`,
    features: [
      'AI-powered health insights',
      'Symptom checker & analysis',
      'Personalized recommendations',
      'Health history tracking',
      'Secure user authentication',
      'MongoDB Atlas data storage'
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB Atlas', 'AI/ML API'],
    category: 'fullstack',
    githubUrl: 'https://github.com/jjbhatti700-jpg/healthai',
    featured: true
  },
  {
    id: 'expense-tracker',
    number: '03',
    title: 'Expense Tracker',
    label: 'FULL STACK',
    shortDesc: 'Full-stack finance manager for tracking income, expenses, budgets, and spending patterns.',
    fullDesc: `A full-stack finance management application designed to help users track income and expenses, understand spending patterns, and manage budget goals. It uses a Node.js and Express backend with MongoDB Atlas for persistent data storage.`,
    features: [
      'Income & expense tracking',
      'Category-wise breakdown',
      'Visual charts & analytics',
      'Monthly & yearly reports',
      'MongoDB Atlas storage',
      'Budget goal setting'
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB Atlas'],
    category: 'fullstack',
    githubUrl: 'https://github.com/jjbhatti700-jpg/expense-tracker',
    featured: true
  },
  {
    id: 'taskflow-app',
    number: '04',
    title: 'TaskFlow',
    label: 'FULL STACK',
    shortDesc: 'Modern task management application built with Next.js for organizing work and improving productivity.',
    fullDesc: `TaskFlow is a productivity-focused task management application built with Next.js. It provides tools for organizing tasks, setting priorities, managing due dates, and tracking progress with persistent database storage.`,
    features: [
      'Create, edit & delete tasks',
      'Priority levels & categories',
      'Due date management',
      'Progress tracking dashboard',
      'Database persistence',
      'Responsive interface'
    ],
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Database'],
    category: 'fullstack',
    githubUrl: 'https://github.com/jjbhatti700-jpg/taskflow',
    featured: true
  },
  {
    id: 'weather-app',
    number: '05',
    title: 'Weather App',
    label: 'FRONTEND / API',
    shortDesc: 'Responsive weather application providing real-time conditions and atmospheric information for cities worldwide.',
    fullDesc: `A responsive React weather application that consumes a REST API to provide current weather conditions for locations around the world, including temperature, humidity, wind speed, pressure, and dynamic weather information.`,
    features: [
      'Real-time weather data',
      'Worldwide city search',
      'Current temperature & conditions',
      'Humidity, wind speed & pressure',
      'Responsive design',
      'Dynamic weather information'
    ],
    tech: ['React 18', 'CSS Modules', 'Open-Meteo API', 'Custom Hooks'],
    category: 'frontend',
    githubUrl: 'https://github.com/jjbhatti700-jpg/New-weather-App',
    featured: true
  }
]

// TECHNOLOGY STACK
export const skills = {
  backend: [
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express.js', icon: 'express' },
    { name: 'REST API Design', icon: 'api' },
    { name: 'JWT Authentication', icon: 'jwt' },
    { name: 'bcrypt', icon: 'security' },
    { name: 'Input Validation (express-validator)', icon: 'validation' },
    { name: 'Third-party API Integration (Axios)', icon: 'api' }
  ],
  frontend: [
    { name: 'React.js', icon: 'react' },
    { name: 'Context API', icon: 'react' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'Firebase Authentication', icon: 'firebase' }
  ],
  languages: [
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Python', icon: 'python' }
  ],
  databases: [
    { name: 'MongoDB Atlas', icon: 'mongodb' },
    { name: 'SQLite', icon: 'sqlite' }
  ],
  ai: [
    { name: 'Anthropic Claude API', icon: 'ai' },
    { name: 'Prompt Engineering', icon: 'ai' },
    { name: 'LLM API Integration', icon: 'ai' }
  ],
  devops: [
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Docker', icon: 'docker' },
    { name: 'CI/CD Fundamentals', icon: 'cicd' },
    { name: 'Vercel', icon: 'vercel' },
    { name: 'Railway', icon: 'railway' },
    { name: 'VS Code', icon: 'vscode' }
  ]
}

// SERVICES
export const services = [
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    description: 'Building complete web applications across the frontend, backend, APIs, and database layers.',
    icon: 'layers'
  },
  {
    id: 'ai',
    title: 'AI / LLM Integration',
    description: 'Integrating LLM APIs and AI capabilities into practical, user-focused web applications.',
    icon: 'plug'
  },
  {
    id: 'web',
    title: 'Modern Web Experiences',
    description: 'Creating responsive interfaces with React, Tailwind CSS, API integrations, and modern interaction patterns.',
    icon: 'layout'
  }
]

// CERTIFICATIONS
export const certifications = [
  {
    id: 'aws',
    title: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    duration: '20 Hours',
    description: 'Cloud computing fundamentals covering AWS core services, security, architecture, and pricing.',
    verifyUrl: 'https://www.credly.com/go/DhxvKS8h',
    hasDigitalBadge: true
  },
  {
    id: 'sql',
    title: 'Introduction to Microsoft SQL Server Management',
    issuer: 'Microsoft',
    duration: 'Credential',
    description: 'Database management fundamentals using Microsoft SQL Server, including queries, data manipulation, and administration.',
    verifyUrl: null,
    hasDigitalBadge: false
  },
  {
    id: 'generative-ai-prompt-engineering',
    title: 'Generative AI: Prompt Engineering Basics',
    issuer: 'IBM · Coursera',
    duration: '9 Hours',
    description: 'Prompt engineering fundamentals and techniques for working effectively with generative AI and LLM applications.',
    verifyUrl: 'https://lnkd.in/d2wJNg29',
    hasDigitalBadge: false
  },
  {
    id: 'introduction-to-ai-ibm',
    title: 'Introduction to Artificial Intelligence (AI)',
    issuer: 'IBM · Coursera',
    duration: '13 Hours',
    description: 'Foundations of AI, machine learning, deep learning, generative AI, responsible AI, and practical AI applications.',
    verifyUrl: 'https://lnkd.in/gSyacyra',
    hasDigitalBadge: false
  },
  {
    id: 'maximize-productivity-ai-tools',
    title: 'Maximize Productivity With AI Tools',
    issuer: 'Google · Coursera',
    duration: '1 Hour',
    description: 'Practical use of generative AI tools for productivity, workflow optimization, and workplace applications.',
    verifyUrl: 'https://lnkd.in/d4eUFxWt',
    hasDigitalBadge: false
  },
  {
    id: 'introduction-to-ai-google',
    title: 'Introduction to AI',
    issuer: 'Google · Coursera',
    duration: '1 Hour',
    description: 'Introduction to AI concepts, capabilities and limitations, machine learning fundamentals, and responsible human oversight.',
    verifyUrl: 'https://lnkd.in/dhgZNmDh',
    hasDigitalBadge: false
  },
  {
    id: 'discover-art-of-prompting',
    title: 'Discover the Art of Prompting',
    issuer: 'Google · Coursera',
    duration: '',
    description: 'Google certificate listed in the current CV.',
    verifyUrl: null,
    hasDigitalBadge: false
  }
]

// STATS
export const stats = [
  { label: 'Selected Projects', value: 5, suffix: '' },
  { label: 'Technologies', value: 25, suffix: '+' },
  { label: 'Certifications', value: 7, suffix: '' },
  { label: 'Internships', value: 2, suffix: '' }
]

// PERSONAL INFO
export const personalInfo = {
  name: 'Junaid Abbas',
  role: 'Full Stack Developer · AI / LLM',
  tagline: 'Building full-stack and AI-powered digital experiences.',
  university: 'University of Central Punjab (UCP)',
  location: 'Lake City, Lahore',
  email: 'junaidabbas3434@gmail.com',
  github: 'https://github.com/jjbhatti700-jpg',
  linkedin: 'https://www.linkedin.com/in/junaidabbas0',
  cvPath: '/Junaid_Abbas_CV.pdf',
  resumePath: '/Junaid_Abbas_Resume.pdf'
}

// ABOUT ME
export const aboutMe = {
  intro: `I'm Junaid Abbas, a Computer Science student and Full Stack Developer focused on building modern web applications and AI-powered digital experiences.`,

  story: `My journey into programming began with curiosity and has evolved into a passion for turning ideas into useful digital products. I work across frontend interfaces, backend systems, APIs, databases, and AI/LLM integrations.

I value clean, maintainable code and intuitive user experiences. I'm particularly interested in full-stack development and practical AI applications where technology can solve real problems.

Currently pursuing my CS degree, I'm continuously expanding my skills across modern web technologies, backend architecture, cloud tooling, and AI.` ,

  passion: `What drives me is building something from an idea into a working product — whether that's a full-stack application, an API-driven experience, or an AI-powered tool that provides real value.`
}
