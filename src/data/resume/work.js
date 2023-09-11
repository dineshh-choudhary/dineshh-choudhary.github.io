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
    summary: 'Flipkart is an engineering powerhouse that has redefined the online shopping landscape in India. With its cutting-edge technology stack, data-driven decision-making, and a relentless focus on user experience, Flipkart has consistently delivered exceptional services to millions of customers. Its engineering teams work tirelessly to optimize supply chain logistics, develop user-friendly interfaces, and harness the power of data analytics to provide personalized shopping experiences. I worked as a Software Development Engineer II at Flipkart in Bengaluru, India, from December 2019 to August 2021. During my tenure, I made significant contributions to the User Insights team, which was responsible for generating valuable insights from user information.',
    highlights: [
    'Developed a client library that allowed users to search for lookalike users based on seed user information. I implemented multiple optimization techniques and preprocessing steps to ensure fast retrieval times, enhancing the efficiency of user data analysis.',
    'Designed and implemented a message auditing service that logged messages pushed to Kafka topics. This service provided custom aggregation and generated reports, contributing to improved data tracking and analysis within the organization.',
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
    'Contributed to the success of critical business features, including Supplier Return, e-commerce readiness, pre-packaging, and Green Packaging, by addressing complex supply chain problems. My work directly impacted the efficiency and effectiveness of Flipkart\'s operations in these areas.',
    'Single-handedly executed a database migration from one data center to another, achieving zero data loss and minimal downtime. This migration was a significant achievement that demonstrated my ability to handle complex technical challenges effectively.',
    ],
    },
];

export default work;
