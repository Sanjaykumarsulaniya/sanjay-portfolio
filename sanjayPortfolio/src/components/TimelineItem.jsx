import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
export default function TimelineItem({ item, index }) {
  return <motion.article className="timeline-item" initial={{ opacity: 0, x: index % 2 ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .5 }}>
    <span className="timeline-dot" /><div className="timeline-card"><div className="timeline-meta"><span>{item.type}</span><span>{item.date}</span></div><h3>{item.role}</h3><p className="timeline-company">{item.company} <ArrowUpRight size={14} /></p><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
  </motion.article>
}
