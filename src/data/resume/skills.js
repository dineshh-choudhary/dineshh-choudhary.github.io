const skills = [
  // AI / GenAI
  {
    title: 'Generative AI',
    competency: 5,
    category: ['AI / GenAI'],
  },
  {
    title: 'LLMs & Prompt Engineering',
    competency: 5,
    category: ['AI / GenAI'],
  },
  {
    title: 'Agentic AI Systems',
    competency: 5,
    category: ['AI / GenAI'],
  },
  {
    title: 'Retrieval-Augmented Generation (RAG)',
    competency: 5,
    category: ['AI / GenAI'],
  },
  {
    title: 'Function / Tool Calling',
    competency: 5,
    category: ['AI / GenAI'],
  },
  {
    title: 'Model Context Protocol (MCP)',
    competency: 5,
    category: ['AI / GenAI'],
  },
  {
    title: 'LangChain',
    competency: 4,
    category: ['AI / GenAI'],
  },

  // Languages & Core
  {
    title: 'Java',
    competency: 5,
    category: ['Languages & Core'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages & Core'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages & Core'],
  },
  {
    title: 'JavaScript / TypeScript',
    competency: 4,
    category: ['Languages & Core'],
  },

  // Data & Streaming
  {
    title: 'Kafka',
    competency: 5,
    category: ['Data & Streaming'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Data & Streaming'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Data & Streaming'],
  },
  {
    title: 'Redis',
    competency: 4,
    category: ['Data & Streaming'],
  },
  {
    title: 'Elasticsearch',
    competency: 4,
    category: ['Data & Streaming'],
  },
  {
    title: 'Apache Spark',
    competency: 3,
    category: ['Data & Streaming'],
  },

  // Frameworks
  {
    title: 'Spring Boot',
    competency: 5,
    category: ['Frameworks'],
  },
  {
    title: 'React / Next.js',
    competency: 4,
    category: ['Frameworks'],
  },
  {
    title: 'Lightning Web Components (LWC)',
    competency: 4,
    category: ['Frameworks'],
  },

  // Cloud & Infra
  {
    title: 'AWS (EC2, S3)',
    competency: 5,
    category: ['Cloud & Infra'],
  },
  {
    title: 'Azure',
    competency: 4,
    category: ['Cloud & Infra'],
  },
  {
    title: 'Docker & Containers',
    competency: 4,
    category: ['Cloud & Infra'],
  },
  {
    title: 'Kubernetes',
    competency: 4,
    category: ['Cloud & Infra'],
  },
  {
    title: 'Terraform',
    competency: 4,
    category: ['Cloud & Infra'],
  },
  {
    title: 'Grafana & Observability',
    competency: 5,
    category: ['Cloud & Infra'],
  },
  {
    title: 'Jenkins & CI/CD',
    competency: 4,
    category: ['Cloud & Infra'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// Vibrant, cohesive modern category colors
const colors = [
  '#6366f1', // AI / GenAI - Indigo
  '#0ea5e9', // Cloud & Infra - Sky Blue
  '#10b981', // Data & Streaming - Emerald
  '#8b5cf6', // Frameworks - Violet
  '#f59e0b', // Languages & Core - Amber
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index % colors.length],
}));

export { categories, skills };
