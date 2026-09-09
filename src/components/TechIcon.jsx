import { FiAward, FiCheckCircle, FiCode, FiGitBranch, FiLink, FiShield, FiCpu } from 'react-icons/fi'
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiJavascript,
  SiTypescript, SiTailwindcss, SiPython, SiSqlite, SiGit, SiGithub,
  SiDocker, SiVercel, SiRailway, SiFirebase, SiVisualstudiocode
} from 'react-icons/si'

const icons = {
  'React.js': SiReact,
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'MongoDB': SiMongodb,
  'MongoDB Atlas': SiMongodb,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'Tailwind CSS': SiTailwindcss,
  'Python': SiPython,
  'SQLite': SiSqlite,
  'Git': SiGit,
  'GitHub': SiGithub,
  'Docker': SiDocker,
  'Vercel': SiVercel,
  'Railway': SiRailway,
  'Firebase Authentication': SiFirebase,
  'Firebase': SiFirebase,
  'VS Code': SiVisualstudiocode,
  'React 18': SiReact,
  'REST API Design': FiLink,
  'REST APIs': FiLink,
  'AI/ML API': FiCpu,
  'Open-Meteo API': FiLink,
  'Custom Hooks': FiCode,
  'CSS Modules': FiCode,
  'Context API': FiCode,
  'JWT Authentication': FiShield,
  'bcrypt': FiShield,
  'Input Validation': FiCheckCircle,
  'Input Validation (express-validator)': FiCheckCircle,
  'Axios / API Integration': FiLink,
  'Third-party API Integration (Axios)': FiLink,
  'Anthropic Claude API': FiCpu,
  'Prompt Engineering': FiCpu,
  'LLM API Integration': FiCpu,
  'CI/CD Fundamentals': FiGitBranch,
  'CI/CD': FiGitBranch,
}

export default function TechIcon({ name, size = 20, className = '' }) {
  const Icon = icons[name] || FiCode
  return <Icon size={size} className={className} aria-hidden="true" />
}
