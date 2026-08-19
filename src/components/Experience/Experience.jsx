import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../../hooks/useInView'
import { experiences, projects, butCompetences } from '../../data/content'
import './Experience.css'

const butYears = ['BUT1', 'BUT2', 'BUT3']

const butDetails = {
  BUT1: {
    period: '2023 — 2024',
    phase: 'Fondamentaux techniques',
    project: {
      title: 'Projet phare: SmartLight',
      impact: 'Conception PCB, soudure et tests fonctionnels sur carte electronique.',
    },
    quickTags: ['Bases Électronique', 'Programmation C', 'Énergie Électrique', 'Logique Numérique'],
    intro: "L'objectif de la première année de BUT est de former l'étudiant aux fondamentaux techniques du GEII :",
    bulletPoints: [
      "les lois de l'électricité et les montages de base de l'électronique",
      "les principes de production, transport, distribution et utilisation de l'énergie électrique",
      'la numération binaire et hexadécimale, la logique combinatoire et séquentielle',
      "l'algorithmique, la programmation en C et l'utilisation des microcontrôleurs",
    ],
    competences: [
      { name: 'Concevoir', level: 'Niveau 1', text: 'Mener une conception partielle intégrant une démarche projet', color: '#c41e3a', projectIds: butCompetences[1].concevoir },
      { name: 'Vérifier', level: 'Niveau 1', text: "Effectuer les tests et mesures nécessaires à une vérification d'un système", color: '#f4976c', projectIds: butCompetences[1].verifier },
      { name: 'Maintenir', level: 'Niveau 0', text: 'Initiation', color: '#ffc94d', projectIds: butCompetences[1].maintenir },
      { name: 'Intégrer', level: 'Niveau 0', text: 'Initiation', color: '#7cb342', projectIds: butCompetences[1].integrer },
    ],
    progress: [
      { name: 'Concevoir', value: 100, color: '#c41e3a' },
      { name: 'Vérifier', value: 90, color: '#f4976c' },
      { name: 'Maintenir', value: 0, color: '#ffc94d' },
      { name: 'Intégrer', value: 0, color: '#7cb342' },
    ],
  },
  BUT2: {
    period: '2024 — 2025',
    phase: 'Industrialisation et qualite',
    project: {
      title: 'Projet phare: Convoyeur Niryo NED2',
      impact: 'Integration robotique avec vision artificielle pour automatiser la prise de pieces.',
    },
    badge: 'Programme du parcours AII',
    badgeHref: '/prog-AII.pdf',
    quickTags: ['Concevoir N2', 'Vérifier N2', 'Maintenir N1', 'Intégrer N1'],
    competences: [
      { name: 'Concevoir', level: 'Niveau 2', text: 'Concevoir un système en fiabilisant les solutions proposées', color: '#c41e3a', projectIds: butCompetences[2].concevoir },
      { name: 'Vérifier', level: 'Niveau 2', text: "Mettre en place un protocole de tests pour valider le fonctionnement d'un système", color: '#f4976c', projectIds: butCompetences[2].verifier },
      { name: 'Maintenir', level: 'Niveau 1', text: 'Intervenir sur un système pour effectuer une opération de maintenance', color: '#ffc94d', projectIds: butCompetences[2].maintenir },
      { name: 'Intégrer', level: 'Niveau 1', text: 'Réaliser un système avec une démarche qualité conforme au dossier de fabrication', color: '#7cb342', projectIds: butCompetences[2].integrer },
    ],
    progress: [
      { name: 'Concevoir', value: 100, color: '#c41e3a' },
      { name: 'Vérifier', value: 80, color: '#f4976c' },
      { name: 'Maintenir', value: 100, color: '#ffc94d' },
      { name: 'Intégrer', value: 90, color: '#7cb342' },
    ],
  },
  BUT3: {
    period: '2025 — 2026',
    phase: 'Production et alternance',
    project: {
      title: 'Projet phare: IntraYES55',
      impact: 'Application web interne en production pour remplacer des fichiers Excel et centraliser les donnees.',
    },
    quickTags: ['Alternance', 'YES55', 'EV Charging', 'IntraYES55'],
    intro: "Pour ma 3e année de BUT GEII, j'ai choisi le parcours alternance chez YES55.",
    intro2: "Mes missions: programmer et superviser des bornes de recharge EV, réaliser des tests d'intégration fabricants et développer IntraYES55 pour remplacer les anciens fichiers Excel et papier.",
    competences: [
      { name: 'Concevoir', level: 'Niveau 3', text: 'Concevoir un système en adoptant une approche sélective dans ses choix technologiques', color: '#c41e3a', projectIds: butCompetences[3].concevoir },
      { name: 'Vérifier', level: 'Niveau 3', text: "Élaborer une procédure intégrant une démarche qualité pour valider le fonctionnement d'un système", color: '#f4976c', projectIds: butCompetences[3].verifier },
      { name: 'Maintenir', level: 'Niveau 2', text: 'Mettre en place une stratégie de maintenance pour garantir un fonctionnement optimal', color: '#ffc94d', projectIds: butCompetences[3].maintenir },
      { name: 'Intégrer', level: 'Niveau 2', text: "Interagir avec les acteurs lors de l'installation et de la mise en service d'un système", color: '#7cb342', projectIds: butCompetences[3].integrer },
    ],
    progress: [
      { name: 'Concevoir', value: 90, color: '#c41e3a' },
      { name: 'Vérifier', value: 100, color: '#f4976c' },
      { name: 'Maintenir', value: 100, color: '#ffc94d' },
      { name: 'Intégrer', value: 100, color: '#7cb342' },
    ],
  },
}

const projectsById = Object.fromEntries(projects.map(p => [p.id, p]))

export default function Experience() {
  const [selectedButYear, setSelectedButYear] = useState('BUT3')
  const [modalOpen, setModalOpen] = useState(false)
  const [activeComp, setActiveComp] = useState(null)
  const [progOpen, setProgOpen] = useState(false)
  const currentBut = butDetails[selectedButYear]
  const progressByName = useMemo(
    () => Object.fromEntries(currentBut.progress.map(item => [item.name, item])),
    [currentBut]
  )
  const [ref, inView] = useInView()

  // Restaurer l'état de la modal si on revient d'une fiche projet
  useEffect(() => {
    const saved = sessionStorage.getItem('expModalState')
    if (saved) {
      try {
        const { but, comp, scrollY } = JSON.parse(saved)
        sessionStorage.removeItem('expModalState')
        setSelectedButYear(but)
        setModalOpen(true)
        if (comp) setActiveComp(comp)
        if (typeof scrollY === 'number') {
          requestAnimationFrame(() => window.scrollTo(0, scrollY))
        }
      } catch {}
    }
  }, [])

  const openModal = (year) => { setSelectedButYear(year); setActiveComp(null); setModalOpen(true) }
  const closeModal = () => { setModalOpen(false); setActiveComp(null); setProgOpen(false) }

  // Fermer le pop-up « Programme du parcours AII » quand on change d'année BUT
  useEffect(() => { setProgOpen(false) }, [selectedButYear])

  useEffect(() => {
    if (!modalOpen) return
    const onKey = (e) => { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [modalOpen])

  return (
    <section id="experience" className="exp-section">
      <div className="section-container" ref={ref}>
        <div className={`section-header anim${inView ? ' visible' : ''}`}>
          <span className="section-tag">Parcours</span>
          <h2 className="section-title">Expériences & Formations</h2>
        </div>
        <div className="timeline">
          {experiences.map((e, i) => (
            <div
              key={e.title}
              className={`timeline-item anim${inView ? ' visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="timeline-dot" style={{ background: e.color, boxShadow: `0 0 16px ${e.color}66` }}>
                <i className={e.icon} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <p className="timeline-date">{e.date}</p>
                    <h3 className="timeline-title">{e.title}</h3>
                    <p className="timeline-company"><i className="fas fa-building" /> {e.company}</p>
                  </div>
                </div>
                <p className="timeline-desc">{e.description}</p>
                <div className="timeline-tags">
                  {e.tags.map(t => (
                    <span key={t} className="timeline-tag" style={{ '--tc': e.color }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`formations-grid anim${inView ? ' visible' : ''} anim-delay-3`}>
          <div className="formation-but-wrap">
            <div className="formation-card">
              <p className="but-dashboard-title">BUT GEII</p>
              <p className="but-dashboard-hint">Clique sur BUT1, BUT2 ou BUT3 pour voir le détail en plein écran.</p>
              <div className="formation-year">2023 — 2026</div>
              <div className="formation-degree">BUT GEII — Génie Électrique et Informatique Industrielle</div>
              <div className="formation-school"><i className="fas fa-university" /> IUT de Toulon</div>
              <div className="formation-tags">
                {currentBut.quickTags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="but-branch" aria-hidden="true">
              <span className="branch-trunk" />
              <span className="branch-bar" />
              <span className="branch-leg branch-leg-1" />
              <span className="branch-leg branch-leg-2" />
              <span className="branch-leg branch-leg-3" />
            </div>
            <div className="but-year-buttons" role="tablist" aria-label="Années BUT">
              {butYears.map(year => (
                <button
                  key={year}
                  type="button"
                  className={`but-year-btn${selectedButYear === year ? ' active' : ''}`}
                  onClick={() => openModal(year)}
                  role="tab"
                  aria-selected={selectedButYear === year}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
          <div className="formation-card">
            <div className="formation-year">2022</div>
            <div className="formation-degree">Baccalauréat Informatique (Tunisie) — Mention Très bien</div>
            <div className="formation-school"><i className="fas fa-school" /> Lycée Technique de Médenine</div>
            <div className="formation-tags">
              <span>Python</span><span>HTML/CSS</span><span>JavaScript</span><span>Arduino</span><span>PHP</span><span>MySQL</span>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="but-modal-overlay" onClick={closeModal} role="dialog" aria-modal="true" aria-label={`Détails ${selectedButYear}`}>
          <div className="but-modal" onClick={e => e.stopPropagation()}>
            <button className="but-modal-close" onClick={closeModal} aria-label="Fermer">
              <i className="fas fa-times" />
            </button>

            <div className="but-modal-header">
              <div className="but-modal-title-row">
                <button
                  className="but-modal-nav-btn"
                  onClick={() => { const i = butYears.indexOf(selectedButYear); if (i > 0) { setSelectedButYear(butYears[i - 1]); setActiveComp(null) } }}
                  disabled={butYears.indexOf(selectedButYear) === 0}
                  aria-label="Année précédente"
                >
                  <i className="fas fa-chevron-left" />
                </button>
                <span className="but-modal-year-label">{selectedButYear}</span>
                <button
                  className="but-modal-nav-btn"
                  onClick={() => { const i = butYears.indexOf(selectedButYear); if (i < butYears.length - 1) { setSelectedButYear(butYears[i + 1]); setActiveComp(null) } }}
                  disabled={butYears.indexOf(selectedButYear) === butYears.length - 1}
                  aria-label="Année suivante"
                >
                  <i className="fas fa-chevron-right" />
                </button>
                <span className="but-modal-period-badge">{currentBut.period}</span>
              </div>
              <p className="but-modal-phase">{currentBut.phase}</p>
            </div>

            {currentBut.badge && (
              currentBut.badgeHref
                ? <button
                    type="button"
                    className="but-modal-badge but-modal-badge-link"
                    onClick={() => setProgOpen(true)}
                  >
                    <i className="fas fa-file-pdf" /> {currentBut.badge}
                  </button>
                : <span className="but-modal-badge">{currentBut.badge}</span>
            )}
            {currentBut.intro && <p className="but-modal-intro">{currentBut.intro}</p>}
            {currentBut.intro2 && <p className="but-modal-intro">{currentBut.intro2}</p>}
            {currentBut.bulletPoints && (
              <ul className="but-modal-list">
                {currentBut.bulletPoints.map(pt => <li key={pt}>{pt}</li>)}
              </ul>
            )}

            <p className="but-modal-comp-hint">
              <i className="fas fa-mouse-pointer" /> Cliquez sur une compétence pour voir les projets associés
            </p>
            <div className="but-modal-comp-grid">
              {currentBut.competences.map(comp => {
                const isActive = activeComp === comp.name
                const linked = (comp.projectIds || []).map(id => projectsById[id]).filter(Boolean)
                return (
                  <div
                    key={comp.name}
                    className={`but-modal-comp${isActive ? ' active' : ''}${linked.length ? ' clickable' : ''}`}
                    style={{ '--comp-color': comp.color }}
                    onClick={() => linked.length && setActiveComp(isActive ? null : comp.name)}
                    role={linked.length ? 'button' : undefined}
                    tabIndex={linked.length ? 0 : undefined}
                  >
                    <div className="but-modal-comp-header">
                      <span className="but-modal-comp-name">{comp.name}</span>
                      <span className="but-modal-comp-level">{comp.level}</span>
                    </div>
                    <p className="but-modal-comp-text">{comp.text}</p>
                    <div className="but-modal-meter-row">
                      <div className="but-modal-meter-track">
                        <div className="but-modal-meter-fill" style={{ width: `${progressByName[comp.name]?.value ?? 0}%`, background: comp.color }} />
                      </div>
                      <span className="but-modal-meter-val" style={{ color: comp.color }}>
                        {progressByName[comp.name]?.value ?? 0}%
                      </span>
                    </div>
                    {linked.length > 0 && (
                      <div className="but-modal-comp-footer">
                        <span className="but-modal-comp-count">
                          <i className="fas fa-folder-open" /> {linked.length} projet{linked.length > 1 ? 's' : ''}
                        </span>
                        <i className={`fas fa-chevron-${isActive ? 'up' : 'down'} but-modal-comp-chev`} />
                      </div>
                    )}
                    {isActive && linked.length > 0 && (
                      <div className="but-modal-comp-projects" onClick={e => e.stopPropagation()}>
                        {linked.map(p => (
                          <Link
                            key={p.id}
                            to={p.link}
                            className="but-modal-proj-card"
                            style={{ '--pc': comp.color }}
                            onClick={() => {
                              sessionStorage.setItem('expModalState', JSON.stringify({
                                but: selectedButYear,
                                comp: comp.name,
                                scrollY: window.scrollY,
                              }))
                            }}
                          >
                            <div className="but-modal-proj-icon"><i className={p.icon} /></div>
                            <div className="but-modal-proj-meta">
                              <span className="but-modal-proj-title">{p.title}</span>
                              <span className="but-modal-proj-year">{p.year}</span>
                            </div>
                            <i className="fas fa-arrow-right but-modal-proj-arrow" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="but-modal-project">
              <i className="fas fa-star" />
              <div>
                <p className="but-modal-project-title">{currentBut.project.title}</p>
                <p className="but-modal-project-impact">{currentBut.project.impact}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {progOpen && (
        <div className="prog-layer">
          <div className="prog-backdrop" onClick={() => setProgOpen(false)} />
          <div className="prog-window" role="dialog" aria-modal="true" aria-label="Programme du parcours AII">
            <div className="prog-titlebar">
              <span className="prog-titlebar-name">Programme du parcours AII</span>
              <a
                className="prog-titlebar-ext"
                href={currentBut.badgeHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Ouvrir dans un nouvel onglet"
              >
                <i className="fas fa-up-right-from-square" />
              </a>
              <button
                type="button"
                className="prog-close-btn"
                onClick={() => setProgOpen(false)}
                aria-label="Fermer"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="prog-body">
              <iframe
                src={`${currentBut.badgeHref}#toolbar=1&view=FitH`}
                title="Programme du parcours AII"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
