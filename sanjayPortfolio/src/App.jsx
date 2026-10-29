import { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import emailjs from '@emailjs/browser'
import * as Tabs from '@radix-ui/react-tabs'
import * as Tooltip from '@radix-ui/react-tooltip'
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Check, ChevronUp, Code2, Download, Github, Linkedin, Mail, MapPin, Menu, Moon, Send, Sparkles, X } from 'lucide-react'
import { profile, skillGroups, experience, education } from './data/content'
import profilePhoto from './assets/sanjay-profile.png'
import { projects } from './data/projects'
import { useTheme } from './hooks/useTheme'
import { useActiveSection } from './hooks/useActiveSection'
import SectionHeading from './components/SectionHeading'
import ThemeToggle from './components/ThemeToggle'
import SkillCard from './components/SkillCard'
import TimelineItem from './components/TimelineItem'
import ProjectCard from './components/ProjectCard'

const navItems = [['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['experience', 'Experience'], ['projects', 'Projects'], ['contact', 'Contact']]
const ids = navItems.map(([id]) => id)

function Header() {
  const { theme, toggleTheme } = useTheme()
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: .001 })
  return <>
    <motion.div className="scroll-progress" style={{ scaleX: progress }} />
    <header className="site-header"><nav className="nav-wrap" aria-label="Main navigation"><a className="brand" href="#home" aria-label="Sanjay Kumar Sulaniya home"><span>SKS</span><i>.</i></a>
      <div className={`nav-links ${open ? 'is-open' : ''}`}>{navItems.map(([id, label]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}</div>
      <div className="nav-actions"><Tooltip.Provider delayDuration={200}><Tooltip.Root><Tooltip.Trigger asChild><span><ThemeToggle theme={theme} onClick={toggleTheme} /></span></Tooltip.Trigger><Tooltip.Portal><Tooltip.Content className="tooltip-content" sideOffset={8}>Toggle color theme<Tooltip.Arrow className="tooltip-arrow" /></Tooltip.Content></Tooltip.Portal></Tooltip.Root></Tooltip.Provider>
        <a className="button button-small button-outline resume-button" href={profile.resume} download><Download size={15} /> Resume</a><button className="mobile-menu icon-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button></div>
    </nav></header>
  </>
}

function Hero() {
  return <section className="hero section-shell" id="home"><div className="hero-grid"><div className="hero-copy">
    <motion.div className="availability" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}><span className="availability-dot" /> Available for opportunities</motion.div>
    <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}>Hello, I’m</motion.p>
    <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25 }}>{profile.name.split(' ').slice(0, 2).join(' ')}<br /><span>{profile.name.split(' ').slice(2).join(' ')}</span></motion.h1>
    <div className="hero-role"><span className="role-line" /><TypeAnimation sequence={['MERN Stack Developer', 1700, 'React Developer', 1700, 'Salesforce Admin', 1700]} wrapper="span" speed={48} repeat={Infinity} /></div>
    <p className="hero-description">I turn ideas into intuitive digital products with <span>thoughtful code</span> and a detail-first mindset.</p>
    <div className="hero-actions"><a className="button button-primary" href="#projects">View projects <ArrowRight size={17} /></a><a className="button button-text" href="#contact">Contact me <ArrowUpRight size={16} /></a></div>
    <div className="hero-socials"><span>Find me on</span><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17} /></a></div>
  </div><motion.div className="hero-visual" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }}><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="avatar-ring"><div className="avatar-inner"><img className="avatar-photo" src={profilePhoto} alt="Portrait of Sanjay Kumar Sulaniya" fetchPriority="high" /><div className="avatar-caption">Developer<br /><b>at work</b></div><div className="avatar-terminal"><span><i /> <i /> <i /></span><code><em>const</em> builder = <strong>"you"</strong>;</code><code>builder.<b>create</b>(ideas);</code></div></div></div><div className="floating-chip chip-code"><Code2 size={17} /><span>Clean code<br /><b>Always</b></span></div><div className="floating-chip chip-stack"><Sparkles size={17} /><span>Full stack<br /><b>Builder</b></span></div><div className="hero-index">01 <span>/ 04</span></div></motion.div></div><a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={15} /></a></section>
}

function About() {
  return <section className="section-shell section-block" id="about"><SectionHeading eyebrow="A little about me" title={<>I build things for<br /><span className="text-gradient">the web.</span></>} description="Curious by nature. Developer by choice." /><div className="about-layout"><motion.div className="about-copy" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><p className="lead-copy">{profile.summary}</p><p>I’ve spent the last six months at <b>Laxamaya Technologies</b> building and improving web applications. Alongside development, I’ve completed Salesforce Administrator training to broaden how I think about business tools and automation.</p><div className="learning-note"><span className="learning-icon"><Sparkles size={17} /></span><p><b>Currently learning</b><br />{profile.learning}</p></div><a className="inline-link" href="#experience">More about my journey <ArrowRight size={15} /></a></motion.div><div className="stats-grid"><motion.div className="stat-card stat-large" whileHover={{ y: -4 }}><span className="stat-value">06<span> mo</span></span><p>Building real products</p><div className="stat-mark">01</div></motion.div><motion.div className="stat-card" whileHover={{ y: -4 }}><span className="stat-value">{projects.length}<span>+</span></span><p>Selected projects</p><div className="stat-mark">02</div></motion.div><motion.div className="stat-card stat-salesforce" whileHover={{ y: -4 }}><span className="stat-value"><Check size={25} /></span><p>Salesforce Admin<br />trained</p><div className="stat-mark">03</div></motion.div></div></div></section>
}

function Skills() { return <section className="section-shell section-block" id="skills"><SectionHeading eyebrow="What I work with" title={<>My toolkit<span className="text-gradient">.</span></>} description="A practical set of technologies for building from interface to database." /><div className="skills-grid">{skillGroups.map((group, index) => <SkillCard key={group.title} group={group} index={index} />)}</div></section> }

function Experience() { return <section className="section-shell section-block" id="experience"><SectionHeading eyebrow="The journey so far" title={<>Experience &<br /><span className="text-gradient">growth.</span></>} description="Learning through building, shipping, and figuring things out." /><div className="timeline">{experience.map((item, index) => <TimelineItem key={item.role} item={item} index={index} />)}</div></section> }

function Projects() { return <section className="section-shell section-block" id="projects"><SectionHeading eyebrow="Things I’ve worked on" title={<>Selected projects<span className="text-gradient">.</span></>} description="A few ideas brought to life with care and a curious mindset." /><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div><div className="projects-footnote"><span>More work is always in progress.</span><a href={profile.github} target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={15} /></a></div></section> }

function Education() { return <section className="section-shell section-block education-section" id="education"><SectionHeading eyebrow="Learning never stops" title={<>Education &<br /><span className="text-gradient">certifications.</span></>} description="The foundations behind my work and the areas I’m exploring next." /><Tabs.Root className="education-tabs" defaultValue="education"><Tabs.List className="tabs-list" aria-label="Education and certifications"><Tabs.Trigger className="tab-trigger" value="education">Education</Tabs.Trigger><Tabs.Trigger className="tab-trigger" value="certifications">Certifications</Tabs.Trigger></Tabs.List><Tabs.Content className="tabs-content" value="education"><div className="education-card"><span className="education-icon"><BriefcaseBusiness size={20} /></span><div><span className="education-overline">Academic background</span><h3>{education[1].title}</h3><p>{education[1].detail}</p></div><span className="education-year">{education[1].period}</span></div></Tabs.Content><Tabs.Content className="tabs-content" value="certifications"><div className="education-card"><span className="education-icon"><Check size={20} /></span><div><span className="education-overline">Training completed</span><h3>{education[0].title}</h3><p>{education[0].institution}</p><small>{education[0].detail}</small></div><span className="education-year">Completed</span></div></Tabs.Content></Tabs.Root></section> }

function Contact() {
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)
  async function submit(event) {
    event.preventDefault(); const form = event.currentTarget
    const service = import.meta.env.VITE_EMAILJS_SERVICE_ID, template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID, key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if (!service || !template || !key) {
      const values = new FormData(form)
      const sender = String(values.get('from_name') || '').trim()
      const senderEmail = String(values.get('reply_to') || '').trim()
      const message = String(values.get('message') || '').trim()
      const subject = encodeURIComponent(`Portfolio message from ${sender}`)
      const body = encodeURIComponent(`Name: ${sender}\nEmail: ${senderEmail}\n\nMessage:\n${message}`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('Your email app should open with the message ready. Press Send there to deliver it.')
      return
    }
    setSending(true); setStatus('')
    try { await emailjs.sendForm(service, template, form, key); form.reset(); setStatus('Thanks! Your message has been sent.') }
    catch { setStatus('Something went wrong. Please email me directly instead.') }
    finally { setSending(false) }
  }
  return <section className="section-shell section-block contact-section" id="contact"><SectionHeading eyebrow="Let’s talk" title={<>Have a project<br /><span className="text-gradient">in mind?</span></>} description="I’d love to hear what you’re working on. Drop me a note." /><div className="contact-layout"><motion.div className="contact-aside" initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><div className="contact-note"><span className="contact-spark"><Sparkles size={18} /></span><h3>Let’s make something<br />meaningful together.</h3><p>Have a project, an opportunity, or just want to say hi? My inbox is open.</p></div><a className="contact-detail" href={`mailto:${profile.email}`}><span><Mail size={17} /></span><div><small>Email me at</small><b>{profile.email}</b></div><ArrowUpRight size={15} /></a>{profile.phone && <a className="contact-detail" href={`tel:${profile.phone}`}><span><MapPin size={17} /></span><div><small>Give me a call</small><b>{profile.phone}</b></div><ArrowUpRight size={15} /></a>}<div className="contact-location"><MapPin size={15} /> Based in {profile.location}</div></motion.div><motion.form className="contact-form" onSubmit={submit} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><div className="form-heading"><span>Send a message</span><small>Usually replies within 1–2 days</small></div><input type="hidden" name="to_email" value={profile.email} /><label>Your name<input type="text" name="from_name" placeholder="Jane Smith" required minLength="2" /></label><label>Email address<input type="email" name="reply_to" placeholder="jane@example.com" required /></label><label>Your message<textarea name="message" placeholder="Tell me a little about what you have in mind..." rows="4" required minLength="10" /></label><button className="button button-primary submit-button" disabled={sending}>{sending ? 'Sending...' : 'Send message'} <Send size={16} /></button>{status && <p className="form-status" role="status">{status}</p>}<p className="privacy-note">Your details are only used to respond to your message.</p></motion.form></div></section>
}

function Footer() { return <footer className="site-footer"><div className="footer-main section-shell"><a className="brand" href="#home"><span>SKS</span><i>.</i></a><p>Thoughtful interfaces. Reliable code.<br /><span>Made with curiosity in {profile.location}.</span></p><div className="footer-socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17} /></a></div><a className="back-top" href="#home" aria-label="Back to top"><ChevronUp size={19} /></a></div><div className="footer-bottom section-shell"><span>© {new Date().getFullYear()} Sanjay Kumar Sulaniya</span><span>Built with React <i>✳</i></span><div>{navItems.slice(1).map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</div></div></footer> }

export default function App() {
  return <Tooltip.Provider><div className="app-shell"><Header /><main><Hero /><About /><Skills /><Experience /><Projects /><Education /><Contact /></main><Footer /></div></Tooltip.Provider>
}
