/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Coupang',
    position: 'Senior Software Engineer – First and Middle Mile Transportation',
    url: 'https://www.coupang.com',
    startDate: '2026-05-01',
    location: 'Bangalore, India',
    summary: 'Coupang is one of Asia’s largest retail and logistics technology leaders, revolutionizing end-to-end fulfillment, intelligent transportation, and next-day delivery networks.',
    highlights: [
      'Architected and built an LLM-powered OnCall Engine adopted across multiple teams, handling 10K+ executions/month by orchestrating MCP integrations across logs, Grafana, and Git; auto-generated root-cause analysis and full incident context directly in Slack, cutting on-call resolution time by roughly 15 minutes per incident.',
      'Built a self-updating Confluence knowledge base and query-routing engine within the OnCall Engine, automatically routing other teams’ on-call queries to the correct KB.',
      'Architected and led development of Alice, a new supplier pickup routing optimization service built from the ground up, currently handling 30K+ orders and designed to scale well beyond; supports VRP with heterogeneous fleets and time windows along with pluggable alternate planning models (e.g., vendor-based pickups) beyond classical VRP.',
      'Leading the re-architecture design of the milkrun process, driving migration away from a legacy service to improve transportation planning efficiency and middle-mile throughput.',
      'Built a task scheduling engine to generate and orchestrate tasks across transportation stages, from first mile to last mile.',
      'Re-architected the invoice printing service for disaster recovery, scaling it to absorb 2x Coupang’s total transportation volume during an availability-zone outage without service degradation.',
    ],
    technologies: ['Java', 'Python', 'Generative AI', 'Agentic AI', 'MCP', 'Spring Boot', 'Kafka', 'Grafana', 'VRP / Optimization', 'AWS'],
  },
  {
    name: 'Salesforce',
    position: 'Senior Member of Technical Staff / Member of Technical Staff',
    url: 'https://salesforce.com',
    startDate: '2021-08-16',
    endDate: '2025-05-31',
    location: 'Hyderabad, India',
    summary: 'Salesforce is the global trailblazer in cloud CRM and enterprise software, empowering organizations to automate processes, streamline operations, and harness data-driven productivity.',
    highlights: [
      'Designed and implemented observability and monitoring solutions on AWS for Spiff, achieving 20% cost savings and improved visibility for internal platforms.',
      'Mentored junior and other engineers on the team, providing technical guidance and design review across projects.',
      'Designed and developed Groups functionality in Spiff, enabling multiple people from different teams to be grouped together.',
      'Built a drag-and-drop builder using Lightning Web Components (frontend) and Java (backend), including a custom exercise feature enabling users to define exercises with custom error-handling logic.',
    ],
    technologies: ['Java', 'Lightning Web Components', 'AWS', 'Spring Boot', 'Observability', 'REST APIs', 'Distributed Systems'],
  },
  {
    name: 'Flipkart',
    position: 'Software Development Engineer I / II',
    url: 'https://flipkart.com',
    startDate: '2018-07-01',
    endDate: '2021-08-16',
    location: 'Bengaluru, India',
    summary: 'Flipkart is India’s premier e-commerce ecosystem, engineering high-scale supply chain, logistics, and user intelligence technologies serving hundreds of millions of consumers.',
    highlights: [
      'Led development of tools for the User Insights Team, providing analytics on user behavior that boosted user engagement metrics by 10%.',
      'Built a client library to search for lookalike users based on seed information, reducing search latency by 40% through optimization techniques.',
      'Drove technical design decisions across the Warehouse and User Insights teams, solving supply chain problems through system design and enhancing critical supply chain business features.',
    ],
    technologies: ['Java', 'Kafka', 'Lookalike Search', 'MySQL', 'Distributed Systems', 'Supply Chain Tech'],
  },
];

export default work;
