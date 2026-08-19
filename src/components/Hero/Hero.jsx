import { useState, useEffect } from 'react'
import heroPic from '../../assets/hero.jpg'
import { useCounter } from '../../hooks/useCounter'
import { projects } from '../../data/content'
import './Hero.css'

const roles = ['Étudiant BUT3 GEII','Alternant YES55','Développeur Python / FastAPI','Passionné d\'Électronique','Concepteur de Solutions IoT']

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  const [refProjects, nProjects] = useCounter(projects.length)
  const [refYears, nYears] = useCounter(3)
  const [refExp, nExp] = useCounter(2)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => { setIdx(i => (i + 1) % roles.length); setVisible(true) }, 400)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name">
            Fahmi<br />
            <span className="hero-name-accent">Mhemdi</span>
          </h1>
          <div className="hero-role">
            <span className={`role-text${visible ? ' visible' : ''}`}>{roles[idx]}</span>
          </div>
          <p className="hero-desc">
            Étudiant en BUT GEII 3ème année en alternance chez YES55. Passionné par l'électronique, le développement logiciel et l'automatisation des systèmes.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <i className="fas fa-code" /> Voir mes projets
            </a>
            <a href="#contact" className="btn-secondary">
              <i className="fas fa-paper-plane" /> Me contacter
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat" ref={refProjects}><span className="stat-num">{nProjects}</span><span className="stat-label">Projets</span></div>
            <div className="stat-divider" />
            <div className="stat" ref={refYears}><span className="stat-num">{nYears}</span><span className="stat-label">Années BUT</span></div>
            <div className="stat-divider" />
            <div className="stat" ref={refExp}><span className="stat-num">{nExp}+</span><span className="stat-label">Expériences</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-avatar-wrap">
            <div className="avatar-ring" />
            <div className="avatar-ring avatar-ring-2" />
            <div className="hero-avatar">
              <img src={heroPic} alt="Fahmi Mhemdi" className="hero-avatar-img" decoding="async" fetchPriority="high" width="320" height="320" />
            </div>
            <div className="floating-badge fb-1"><i className="fab fa-python" /> Python</div>
            <div className="floating-badge fb-2"><i className="fas fa-microchip" /> GEII</div>
            <div className="floating-badge fb-3"><i className="fas fa-charging-station" /> EV Tech</div>
            <div className="hero-hud" aria-hidden="true">
              <p><span>Status</span><strong>ONLINE</strong></p>
              <p><span>Focus</span><strong>Embedded + AI</strong></p>
              <p><span>Location</span><strong>Toulon / Le Luc</strong></p>
            </div>
          </div>
        </div>
      </div>
      <a href="#about" className="hero-scroll-hint">
        <span>Défiler</span>
        <i className="fas fa-chevron-down" />
      </a>
    </section>
  )
}
