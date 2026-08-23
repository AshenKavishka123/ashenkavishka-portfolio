export const profile = {
  name: 'Ashen Kavishka',
  title: 'Quality Assurance Engineer',
  focus: ['Quality Engineering', 'Automation Testing', 'Manual Testing', 'Performance Testing'],
  tagline: '“Ensuring Quality. Delivering Confidence.”',
  location: 'Sri Lanka',
  email: 'ashenkavishka3224@gmail.com',
  phone: '+94 70 405 5549',
  cvPath: '/Ashen-Kavishka-CV.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/AshenKavishka123', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ashen-kavishka-47b962231/', icon: 'linkedin' },
    { label: 'Email', href: 'ashenkavishka3224@gmail.com', icon: 'mail' },
    { label: 'WhatsApp', href: 'https://wa.me/94704055549', icon: 'whatsapp' },
  ],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const skillGroups = [
  {
    title: 'Automation',
    items: ['Rest Assured','Selenium', 'Serenity BDD', 'Appium', 'Cucumber'],
  },
  {
    title: 'Programming Languages',
    items: ['Java', 'C'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'MS SQL', 'MongoDB', 'PostgreSQL', 'Oracle'],
  },
  {
    title: 'Performance Testing',
    items: ['Apache Jmeter', 'K6'],
  },
  {
    title: 'API Testing',
    items: ['Postman', 'Swagger', 'Insomnia'],
  },
  {
    title: 'Test Management',
    items: ['Jira', 'TestRail', 'Git', 'Bitbucket'],
  },
];

export const experience = [
  {
    role: 'Associate Quality Assurance Engineer',
    company: 'Cloud Solutions International',
    period: 'February 2025 - Present',
    summary: 'Contributed to end-to-end QA through API, UI, mobile, performance, and automation testing across Agile projects.',
    achievements: [
      'Worked as an Associate QA Engineer contributing to end-to-end quality assurance activities across multiple projects in Agile environments. Gained strong hands-on experience in API, UI, and mobile automation testing, designing and maintaining scalable automation frameworks using tools such as Rest Assured, Selenium, Serenity BDD, Appium, and Cucumber. Responsible for test case design, automation script development, test execution, defect reporting, and regression testing. Actively collaborated with developers, BAs, and cross-functional teams to analyze requirements, identify edge cases, and ensure high-quality releases. Performed performance testing using JMeter and K6, validated backend data using SQL and NoSQL databases, and contributed to CI/CD-driven testing workflows.',
    ],
  },
  {
    role: 'Intern Quality Assurance Engineer',
    company: 'Cloud Solutions International',
    period: 'April 2024 - February 2025',
    summary: 'Gained hands-on experience in manual testing, automation, API testing, and Agile QA practices.',
    achievements: [
      'Completed internship focusing on building foundational knowledge in software quality assurance, including both manual and automation testing practices. Gained practical exposure to API testing using Postman and Rest Assured, UI automation using Selenium, and database validation using MySQL and PostgreSQL. Assisted in writing and executing test cases, identifying defects, performing regression testing, and supporting pre-production validations. Learned to work within Agile/Scrum environments, participated in daily stand-ups, and collaborated with senior QA engineers and developers',
    ],
  },
];

export const projects = [
  {
    title: 'Detecting & Mitigating Racial, Gender and Socioeconomic Biases in GPT Models',
    category: 'Final year research project',
    summary: 'Analyzed and mitigated gender bias in GPT models using NLP techniques and augmented training.',
    highlights: [
      'Analyzed gender bias in GPT models using lexical analysis and NLP techniques to identify biased language patterns and assess fairness using standard metrics.',
      'Applied augmented training approaches to mitigate bias and improve model fairness, supporting more inclusive and ethical AI systems.',
    ],
    stack: ['Python', 'NLP', 'GPT', 'Machine Learning'],
    githubUrl: 'https://github.com/AshenKavishka123/Gender_Bias_Mitigation',
    // demoUrl: '',
    featured: true,
  },
  {
    title: 'API Testing and Serenity BDD UI Testing Project',
    category: 'Group Project',
    summary: 'Implemented BDD-based UI and API automation with CI/CD integration for continuous testing.',
    highlights: [
      'Implemented UI and API automation using Serenity BDD with Cucumber for BDD-based test scenarios in a group project.',
      'Set up GitHub Actions for CI/CD to enable automated test execution and continuous quality validation.',
    ],
    stack: ['Serenity BDD', 'Cucumber', 'API Automatiom', 'UI Automation', 'CI/CD'],
    // githubUrl: 'https://github.com/',
    // demoUrl: 'https://example.com/',
    featured: true,
  },
  {
    title: 'Quotation Requesting System for Event Photography ',
    category: 'Second year software project',
    summary: 'Developed a full-stack event photography quotation system with web and mobile applications.',
    highlights: [
      'Focused on premium design principles, accessibility, and responsive performance.',
      'Built as a reusable front-end system with clean content-driven architecture.',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'REST API', 'JavaScript'],
    githubUrl: 'https://github.com/AshenKavishka123/Level-2-project-ChildishThings',
    // demoUrl: 'https://example.com/',
    featured: true,
  },
  {
    title: 'Automatic Boxing Training Machine',
    category: 'First year hardware project',
    summary: 'Developed an automated boxing training machine using an ATmega32 microcontroller for opponent-free training.',
    highlights: [
      'Developed an automatic boxing training machine using an ATmega32 microcontroller, programmed in C for opponent-free training and performance improvement.',
    ],
    stack: ['ATmega32', 'C', 'Sensors', 'Embedded Hardware', 'Microcontroller Programming'],
    githubUrl: 'https://github.com/AshenKavishka123/Automatic-Boxing-Training-Machine',
    // demoUrl: 'https://example.com/',
    featured: true,
  },
];

export const education = [
  {
    degree: 'B.Sc. (Hons) in Information Technology',
    school: 'University of Moratuwa',
    period: 'Jun 2021 - Jun 2025',
    summary: 'Graduated with Second Lower Class Honours',
  }
];
