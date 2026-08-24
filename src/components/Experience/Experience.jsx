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
      { name: 'Concevoir', level: 'Niveau 1', color: '#c41e3a', projectIds: butCompetences[1].concevoir,
        acs: [
          { code: 'AC11.01', label: "Produire une analyse fonctionnelle d'un système simple" },
          { code: 'AC11.02', label: 'Réaliser un prototype pour des solutions techniques matériel et/ou logiciel' },
          { code: 'AC11.03', label: "Rédiger un dossier de conception à partir d'un cahier des charges partiel" },
        ],
        why: "Sur SmartLight j'ai couvert tout le cycle de conception : analyse fonctionnelle, prototype PCB conçu et soudé, puis dossier de conception rédigé à partir du cahier des charges. Les trois AC sont validés, d'où 100 %." },
      { name: 'Vérifier', level: 'Niveau 1', color: '#f4976c', projectIds: butCompetences[1].verifier,
        acs: [
          { code: 'AC12.01', label: "Appliquer une procédure d'essais" },
          { code: 'AC12.02', label: 'Identifier un dysfonctionnement' },
          { code: 'AC12.03', label: 'Mesurer les dysfonctionnements' },
        ],
        why: "Sur SmartLight j'ai appliqué la procédure d'essais, identifié et mesuré les dysfonctionnements de la carte. Il me manque encore un peu de recul sur des campagnes de tests plus poussées, d'où 90 %." },
      { name: 'Maintenir', level: 'Niveau 0', color: '#ffc94d', projectIds: butCompetences[1].maintenir,
        acs: [],
        why: "Compétence au niveau initiation en 1ʳᵉ année : aucun projet de maintenance n'a été réalisé, d'où 0 %." },
      { name: 'Intégrer', level: 'Niveau 0', color: '#7cb342', projectIds: butCompetences[1].integrer,
        acs: [],
        why: "Compétence au niveau initiation en 1ʳᵉ année : aucune installation ni mise en service n'a été réalisée, d'où 0 %." },
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
      title: 'Stage ESAT — Banc de test automatisé',
      impact: 'Integration robotique avec vision artificielle pour automatiser la prise de pieces.',
    },
    badge: 'Programme du parcours AII',
    badgeHref: '/prog-AII.pdf',
    quickTags: ['Concevoir N2', 'Vérifier N2', 'Maintenir N1', 'Intégrer N1'],
    competences: [
      { name: 'Concevoir', level: 'Niveau 2', color: '#c41e3a', projectIds: butCompetences[2].concevoir,
        acs: [
          { code: 'AC21.01', label: "Proposer des solutions techniques liées à l'analyse fonctionnelle" },
          { code: 'AC21.02', label: 'Distinguer les solutions techniques retenues' },
        ],
        why: "Au stage ESAT j'ai proposé plusieurs solutions techniques pour le banc de test (PCB, Arduino, sécurité 230 V) et justifié celles retenues à partir de l'analyse fonctionnelle. Les deux AC sont validés, d'où 100 %." },
      { name: 'Vérifier', level: 'Niveau 2', color: '#f4976c', projectIds: butCompetences[2].verifier,
        acs: [
          { code: 'AC22.01', label: "Identifier les tests et mesures à mettre en place pour valider le fonctionnement d'un système" },
          { code: 'AC22.02', label: "Certifier le fonctionnement d'un nouvel équipement industriel" },
        ],
        why: "Sur le robot détecteur d'obstacles j'ai défini et mené les tests de validation. La certification complète d'un équipement industriel reste partielle, d'où 80 %." },
      { name: 'Maintenir', level: 'Niveau 1', color: '#ffc94d', projectIds: butCompetences[2].maintenir,
        acs: [
          { code: 'AC13.01', label: "Exécuter l'entretien et le contrôle d'un système en respectant une procédure" },
          { code: 'AC13.02', label: 'Exécuter une opération de maintenance (corrective, préventive, améliorative)' },
          { code: 'AC13.03', label: "Identifier la cause racine d'un dysfonctionnement" },
          { code: 'AC13.04', label: 'Identifier la cause racine du dysfonctionnement' },
        ],
        why: "Sur le banc ESAT j'ai diagnostiqué une surchauffe (cause racine : régulateur LM7812 à 93 °C) et réalisé une maintenance améliorative (radiateur + ventilateur) qui a supprimé les redémarrages. Cycle complet, d'où 100 %." },
      { name: 'Intégrer', level: 'Niveau 1', color: '#7cb342', projectIds: butCompetences[2].integrer,
        acs: [
          { code: 'AC24.01AI', label: "Appliquer la procédure d'installation d'un système" },
          { code: 'AC24.02AI', label: "Exécuter la mise en service d'un système en respectant la procédure" },
        ],
        why: "Sur la ferme hydroponique j'ai installé et mis en service le système (API, Modbus, pompes) selon le dossier de fabrication. Quelques réglages fins restaient à finaliser, d'où 90 %." },
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
      { name: 'Concevoir', level: 'Niveau 3', color: '#c41e3a', projectIds: butCompetences[3].concevoir,
        acs: [
          { code: 'AC31.01', label: "Adopter une approche holistique intégrant les innovations technologiques en lien avec la stratégie de l'entreprise" },
          { code: 'AC31.02 · CE1.02', label: "Produire l'ensemble des documents nécessaires pour le client et les différents prestataires" },
          { code: 'AC31.03 · CE1.03', label: 'Communiquer de façon adaptée avec les différents acteurs avant et pendant la phase de conception' },
        ],
        why: "Le développement d'IntraYES55 m'a permis d'analyser le besoin métier, de sélectionner des solutions techniques adaptées, de produire la documentation du projet et de collaborer avec les équipes concernées. L'application étant déployée et utilisée en production, cette expérience justifie un niveau de maîtrise de 90 %." },
      { name: 'Vérifier', level: 'Niveau 3', color: '#f4976c', projectIds: butCompetences[3].verifier,
        acs: [
          { code: 'AC32.01', label: "Évaluer la cause racine d'un dysfonctionnement" },
          { code: 'AC32.02', label: 'Proposer une solution corrective à un dysfonctionnement' },
          { code: 'AC32.03', label: "Produire une procédure d'essais pour valider la conformité d'un système" },
        ],
        why: "Sur le parc Hager Witty Park 2 je programme et vérifie chaque borne (tests RFID, charge) et j'ai rédigé la procédure d'essais. Le cycle de vérification qualité est entièrement maîtrisé, d'où 100 %." },
      { name: 'Maintenir', level: 'Niveau 2', color: '#ffc94d', projectIds: butCompetences[3].maintenir,
        acs: [
          { code: 'AC23.01', label: 'Proposer une solution de maintenance' },
          { code: 'AC23.02', label: "Évaluer les coûts d'indisponibilité et de maintenance d'un système" },
          { code: 'AC23.03', label: 'Produire une procédure de maintenance' },
          { code: 'AC23.04', label: "Proposer un appui technique aux différents acteurs à l'échelle nationale et internationale" },
        ],
        why: "Sur les bornes Hager Witty XVL j'ai proposé et déployé une solution de maintenance (FTP + SteVe sur AWS), produit la procédure de reflash et fourni un appui technique, y compris en anglais avec la R&D. Cycle complet, d'où 100 %." },
      { name: 'Intégrer', level: 'Niveau 2', color: '#7cb342', projectIds: butCompetences[3].integrer,
        acs: [
          { code: 'AC34.01AI', label: "Planifier l'installation et la mise en service d'un équipement" },
          { code: 'AC34.02AI', label: "Produire une procédure d'installation et de mise en service d'un système" },
          { code: 'AC34.03AI', label: 'Produire le dossier de conformité du système (versionnage)' },
        ],
        why: "Sur les tests d'intégration OCPP je planifie et valide la mise en service de chaque nouveau matériel, je produis les procédures et le dossier de conformité (verdict d'acceptation catalogue), d'où 100 %." },
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
                    {comp.acs && comp.acs.length > 0 ? (
                      <ul className="but-modal-comp-acs">
                        {comp.acs.map(ac => (
                          <li key={ac.code}>
                            <span className="but-modal-ac-code" style={{ color: comp.color, borderColor: comp.color }}>{ac.code}</span>
                            <span className="but-modal-ac-label">{ac.label}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="but-modal-comp-text">Initiation — compétence non abordée cette année.</p>
                    )}
                    <div className="but-modal-meter-row">
                      <div className="but-modal-meter-track">
                        <div className="but-modal-meter-fill" style={{ width: `${progressByName[comp.name]?.value ?? 0}%`, background: comp.color }} />
                      </div>
                      <span className="but-modal-meter-val" style={{ color: comp.color }}>
                        {progressByName[comp.name]?.value ?? 0}%
                      </span>
                    </div>
                    {comp.why && (
                      <p className="but-modal-comp-why">
                        <span className="but-modal-why-q" style={{ color: comp.color }}>Pourquoi {progressByName[comp.name]?.value ?? 0}% ?</span> {comp.why}
                      </p>
                    )}
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
