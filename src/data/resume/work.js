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
    name: 'Salesforce',
    position: 'Member of Techincal Staff',
    url: 'https://salesforce.com',
    startDate: '2021-08-16',
    summary: `Salesforce is a trailblazer in the field of cloud-based software engineering, particularly in the realm of customer relationship management (CRM). With its robust and highly customizable platform, Salesforce empowers businesses of all sizes to streamline their operations, enhance customer engagement, and make data-driven decisions.`,
    highlights: [
      'Contributed to the Sales Enablement team, responsible for providing a platform to create data-driven programs that enhance productivity and efficiency.',
      'Designed and implemented REST APIs from scratch, including an error handling framework.',
      'Developed a user-friendly drag-and-drop builder using Lightning Web Components as the frontend and Java as the backend for creating outcome-based programs.',
    ],
  },
  {
    name: 'Flipkart',
    position: 'Software Development Engineer II',
    company: 'Flipkart',
    location: 'Bengaluru, India',
    startDate: '2019-12-01',
    endDate: '2021-08-16',
    summary: 'Flipkart is an engineering powerhouse that has redefined the online shopping landscape in India. With its cutting-edge technology stack, data-driven decision-making, and a relentless focus on user experience, I worked as a Software Development Engineer II at Flipkart in Bengaluru, India, from December 2019 to August 2021. During my tenure, I made significant contributions to the User Insights team, which was responsible for generating valuable insights from user information.',
    highlights: [
    'Developed a client library that empowered users to conduct lookalike user searches based on seed user information. This involved the implementation of various optimization techniques and preprocessing steps, resulting in significantly improved data retrieval speed and overall efficiency for user data analysis',
    'Architected and deployed a message auditing service designed to log messages transmitted to Kafka topics. This service offered customizable data aggregation capabilities and automated report generation, thereby strengthening data tracking and analytical capabilities throughout the organization\'s technical ecosystem.',
    ],
    },
    {
    name: 'Flipkart',
    position: 'Software Development Engineer I',
    company: 'Flipkart',
    location: 'Bengaluru, India',
    startDate: '2018-07-01',
    endDate: '2019-12-01',
    summary: 'I served as a Software Development Engineer I at Flipkart in Bengaluru, India, from July 2018 to December 2019. During this period, I was part of the Warehouse team, where I actively contributed to addressing complex supply chain challenges and played a crucial role in the successful release of critical business features.',
    highlights: [
    'Enhanced critical business features through collaborative problem-solving in complex supply chain scenarios, demonstrating leadership qualities',
    'Successfully led a zero-data-loss database migration, highlighting technical proficiency and teamwork.',
    ],
    },
];

export default work;
