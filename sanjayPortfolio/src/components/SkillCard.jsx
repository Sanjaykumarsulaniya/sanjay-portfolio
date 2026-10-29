import { motion } from 'framer-motion'
import { Code2, Database, Wrench, Cloud, Braces } from 'lucide-react'
const icons = { Frontend: Code2, Backend: Braces, Database, Salesforce: Cloud, Tools: Wrench }
export default function SkillCard({ group, index }) {
  const Icon = icons[group.title] || Code2
  return <motion.article className="skill-card" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .07 }} whileHover={{ y: -5 }}>
    <div className="skill-card-top"><span className="skill-icon"><Icon size={19} /></span><span className="skill-number">{group.number}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
  </motion.article>
}
