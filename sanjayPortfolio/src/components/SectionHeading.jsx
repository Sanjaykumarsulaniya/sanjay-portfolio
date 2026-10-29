import { motion } from 'framer-motion'
export default function SectionHeading({ eyebrow, title, description }) {
  return <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .5 }} className="section-heading">
    <span className="eyebrow"><i />{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}
  </motion.div>
}
