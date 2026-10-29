export const profile = {
  name: 'Sanjay Kumar Sulaniya',
  initials: 'SKS',
  role: 'MERN Stack Developer',
  email: 'sanjaysulaniya42@gmail.com',
  phone: '',
  location: 'City, State',
  github: 'https://github.com/Sanjaykumarsulaniya',
  linkedin: 'https://www.linkedin.com/in/sanjay-sulaniya-240174323',
  resume: '/resume.pdf',
  summary: 'I build responsive, user-focused web applications with the MERN stack. I enjoy turning complex ideas into clear interfaces and dependable backend experiences, with a growing interest in the Salesforce ecosystem.',
  learning: 'Currently sharpening my skills in advanced React patterns, API design, and Salesforce administration.',
}

export const skillGroups = [
  { title: 'Frontend', number: '01', skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Redux / Context API'] },
  { title: 'Backend', number: '02', skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT authentication'] },
  { title: 'Database', number: '03', skills: ['MongoDB', 'Mongoose'] },
  { title: 'Salesforce', number: '04', skills: ['Admin fundamentals', 'Objects & fields', 'Flows', 'Validation rules', 'Reports & dashboards', 'Security & profiles'] },
  { title: 'Tools', number: '05', skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel / Netlify'] },
]

export const experience = [
  { role: 'MERN Stack Developer', company: 'Laxamaya Technologies', date: '6 months', type: 'Professional Experience', points: ['Built and refined reusable React components for responsive web interfaces.', 'Developed REST API endpoints with Node.js and Express.js for application workflows.', 'Designed MongoDB schemas and integrated data models with Mongoose.', 'Investigated bugs, improved reliability, and collaborated on feature delivery.'] },
  { role: 'Salesforce Administrator Training', company: 'Salesforce Administration', date: 'Training & Certification', type: 'Professional Development', points: ['Completed Salesforce Administrator training covering core platform concepts.', 'Practiced configuring objects, fields, flows, validation rules, and reports.', 'Learned foundational security, profiles, and dashboard administration.'] },
]

export const education = [
  { title: 'Salesforce Administrator', institution: 'Administrator Training / Certification', detail: 'Platform administration fundamentals' },
  { title: 'Bachelor of Technology (B.Tech)', detail: '7+ CGPA', period: '2022-2026' },
]

export const socials = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
]
