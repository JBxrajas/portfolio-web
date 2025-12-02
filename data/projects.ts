export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  category: 'automation' | 'performance';
}

export const projects: Project[] = [
  // Automation Projects
  {
    id: 'trello-cypress-automation',
    title: 'Trello Automation Practice - Cypress',
    description: 'Comprehensive Cypress test suite for Trello automation with API authentication, Page Object Model, custom commands, fixtures, and cross-origin handling. Features automated CI/CD with GitHub Actions and live reporting.',
    technologies: ['Cypress', 'API Testing', 'CI/CD', 'GitHub Actions', 'Page Object Model'],
    githubUrl: 'https://github.com/JBxrajas/auto-trello-practices',
    demoUrl: 'https://jbxrajas.github.io/auto-trello-practices/',
    category: 'automation',
  },
  {
    id: 'cypress-code-challenge',
    title: 'QA Automation Code Challenge - Cypress',
    description: 'Automation code challenge implementation demonstrating Cypress best practices, test framework design, and JavaScript automation skills for QA assessment scenarios.',
    technologies: ['Cypress', 'JavaScript', 'Test Automation', 'GitHub', 'Python'],
    githubUrl: 'https://github.com/JBxrajas/qa-automation-coding-challenge',
    category: 'automation',
  },
  {
    id: 'playwright-pom-sandbox',
    title: 'Playwright Sandbox with POM',
    description: 'Modern web automation framework using Playwright with TypeScript. Implements Page Object Model design pattern with best practices for maintainable and scalable test automation.',
    technologies: ['Playwright', 'TypeScript', 'Page Object Model', 'Test Automation'],
    githubUrl: 'https://github.com/JBxrajas/bug-free-spork',
    category: 'automation',
  },
  {
    id: 'postman-api-automation',
    title: 'Postman API Automation with Newman',
    description: 'Automated API testing for Swagger PetStore using Postman collections and Newman. Features continuous testing with GitHub Actions integration and automated HTML reporting.',
    technologies: ['Postman', 'Newman', 'API Testing', 'CI/CD', 'GitHub Actions'],
    githubUrl: 'https://github.com/JBxrajas/postman-api-auto-tests',
    demoUrl: 'https://jbxrajas.github.io/postman-api-auto-tests/reports/newman-report.html',
    category: 'automation',
  },
  
  // Performance Projects
  {
    id: 'k6-grafana-performance',
    title: 'k6 Grafana Performance Practice',
    description: 'Performance testing framework using k6 with Grafana visualization. Includes load testing, stress testing, report generation, GitHub Actions automation, and deployment of results to GitHub Pages.',
    technologies: ['k6', 'Grafana', 'JavaScript', 'Load Testing', 'Stress Testing', 'GitHub Actions'],
    githubUrl: 'https://github.com/JBxrajas/k6-performance-tests',
    demoUrl: 'https://jbxrajas.github.io/k6-performance-tests/',
    category: 'performance',
  },
];

export const getProjectsByCategory = (category: 'automation' | 'performance') => {
  return projects.filter((project) => project.category === category);
};
