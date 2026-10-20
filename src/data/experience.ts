export type Experience = {
  company: string
  role: string
  location: string
  dates: string
  current?: boolean
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    company: 'RealPage',
    role: 'Software Development Testing Intern (SDET)',
    location: 'Hyderabad',
    dates: 'April 2026 – Present',
    current: true,
    bullets: [
      'Automate regression, maintenance, and navigational test cases on the Asset and Investment Management project using Java, Selenium, and TestNG.',
      'Manage and execute test cases in Eclipse, with tracking and organization in Azure DevOps.',
      'Use Git for version control to pull and push code changes.',
      'Use AI coding agents to accelerate the development of automation test cases.',
    ],
  },
  {
    company: 'Avison Technologies',
    role: 'Software Development & Testing Intern',
    location: 'Remote',
    dates: 'September 2025 – February 2026',
    bullets: [
      'Contributed to the development and testing of three web applications (Grab the Deals, eHundi, and PanditDesk) as part of a collaborative team.',
      'Took on a Team Lead role from the fourth month: coordinating team members, assigning tasks, and guiding implementation approaches while continuing to contribute individually.',
      'Identified and documented bugs as Jira stories, collaborated with the team to resolve issues, and validated fixes before deployment.',
      'Managed code changes through Git and GitHub across the full development lifecycle.',
    ],
  },
  {
    company: 'High Go Info Solutions',
    role: 'Software Development Intern',
    location: 'Hyderabad',
    dates: 'May 2025 – July 2025',
    bullets: [
      'Built an Employee Salary Prediction application that estimates salary from job role, experience, location, age, and other factors, supporting both CSV-based and manual input.',
      'Developed and deployed an interactive Streamlit application, using Git and GitHub for version control.',
    ],
  },
]
