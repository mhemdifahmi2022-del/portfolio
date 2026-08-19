import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useInView } from '../../hooks/useInView'
import { projects, butCompetences } from '../../data/content'
import './Projects.css'

const butFilters = [
  { label: 'Tous', value: null },
  { label: 'BUT3', value: 3 },
  { label: 'BUT2', value: 2 },
  { label: 'BUT1', value: 1 },
]
const competenceFilters = [
  { label: 'Concevoir', value: 'concevoir' },
  { label: 'Vérifier', value: 'verifier' },
  { label: 'Maintenir', value: 'maintenir' },
  { label: 'Intégrer', value: 'integrer' },
]

export default function Projects() {
  const [ref, inView] = useInView(0.05)
  const [searchParams, setSearchParams] = useSearchParams()
  const currentQuery = searchParams.toString()

  const activeBut = searchParams.get('but') ? Number(searchParams.get('but')) : null
  const rawCompetence = searchParams.get('competence')
  const competence = rawCompetence === 'implanter' ? 'integrer' : rawCompetence

  const updateParams = (mutate) => setSearchParams(prev => {
    const next = new URLSearchParams(prev)
    mutate(next)
    return next
  }, { replace: true })

  const setBut = (value) => updateParams(p => {
    if (value == null) p.delete('but'); else p.set('but', String(value))
    // Si la compétence active n'existe plus pour ce BUT, on la retire
    const comp = p.get('competence')
    if (comp && value != null && !(butCompetences[value]?.[comp]?.length)) {
      p.delete('competence')
    }
  })

  const toggleCompetence = (value) => updateParams(p => {
    if (competence === value) p.delete('competence'); else p.set('competence', value)
  })

  // Filtrage aligné sur la table butCompetences (même source que la modal Expérience).
  const filtered = useMemo(() => {
    if (competence) {
      // Complétence sélectionnée : on prend les projets listés dans la table.
      const ids = activeBut != null
        ? (butCompetences[activeBut]?.[competence] ?? [])
        : Object.values(butCompetences).flatMap(c => c[competence] ?? [])
      const uniqueIds = [...new Set(ids)]
      return uniqueIds.map(id => projects.find(p => p.id === id)).filter(Boolean)
    }
    // Pas de compétence : filtre par année uniquement.
    return projects.filter(p => activeBut == null || p.but === activeBut)
  }, [activeBut, competence])
  const completion = Math.round((filtered.length / projects.length) * 100)

  // Compétences disponibles pour le BUT actif (sinon bouton désactivé)
  const availableCompetences = useMemo(() => {
    const set = new Set()
    const buckets = activeBut != null
      ? [butCompetences[activeBut]]
      : Object.values(butCompetences)
    for (const bucket of buckets) {
      if (!bucket) continue
      for (const [comp, ids] of Object.entries(bucket)) {
        if (ids.length) set.add(comp)
      }
    }
    return set
  }, [activeBut])

  return (
    <section id="projects" className="projects-section">
      <div className="section-container" ref={ref}>
        <div className={`section-header anim${inView ? ' visible' : ''}`}>
          <span className="section-tag">Réalisations</span>
          <h2 className="section-title">Mes Projets</h2>
        </div>
        <div className={`projects-mission anim${inView ? ' visible' : ''}`}>
          <div className="mission-left">
            <p className="mission-label">Mission Board</p>
            <p className="mission-value">{filtered.length} projets affichés sur {projects.length}</p>
          </div>
          <div className="mission-right">
            <span>{completion}%</span>
            <div className="mission-track">
              <div className="mission-fill" style={{ width: `${completion}%` }} />
            </div>
          </div>
        </div>
        <div className={`projects-filters anim${inView ? ' visible' : ''} anim-delay-1`} role="group" aria-label="Filtrer par année">
          {butFilters.map(f => (
            <button
              key={f.label}
              type="button"
              className={`filter-btn${activeBut === f.value ? ' active' : ''}`}
              aria-pressed={activeBut === f.value}
              onClick={() => setBut(f.value)}
            >{f.label}</button>
          ))}
        </div>
        <div className={`projects-comp-filters anim${inView ? ' visible' : ''} anim-delay-1`} role="group" aria-label="Filtrer par compétence">
          {competenceFilters.map(f => {
            const disabled = !availableCompetences.has(f.value)
            return (
              <button
                key={f.value}
                type="button"
                className={`comp-filter-btn comp-${f.value}${competence === f.value ? ' active' : ''}`}
                aria-pressed={competence === f.value}
                aria-disabled={disabled}
                disabled={disabled}
                onClick={() => toggleCompetence(f.value)}
              >{f.label}</button>
            )
          })}
        </div>
        {filtered.length === 0 && (
          <p className="projects-empty">Aucun projet ne correspond à ces filtres.</p>
        )}
        <div className="projects-grid">
          {filtered.map((p, i) => (
            <Link
              key={p.id}
              to={`${p.link}${currentQuery ? `?${currentQuery}` : ''}`}
              onClick={() => sessionStorage.setItem('projectsScrollY', String(window.scrollY))}
              className={`project-card${p.size === 'large' ? ' project-large' : ''} anim${inView ? ' visible' : ''}`}
              style={{ '--pc': p.color, transitionDelay: `${(i % 4) * 0.1}s` }}
            >
              <div className="project-glow" />
              <div className="project-icon-wrap">
                <i className={p.icon} />
              </div>
              <div className="project-body">
                <div className="project-meta">
                  <span className="project-year">{p.year}</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags">
                  {p.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
              <div className="project-arrow"><i className="fas fa-arrow-right" /></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
