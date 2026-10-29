import { useEffect, useState } from 'react'
export function useActiveSection(ids) {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, .15, .4] })
    ids.forEach((id) => { const element = document.getElementById(id); if (element) observer.observe(element) })
    return () => observer.disconnect()
  }, [ids.join(',')])
  return active
}
