import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState, useMemo } from 'react'
import { projects } from '../../data/content'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const prevNextSuffix = location.search || ''

  const goBack = (e) => {
    e.preventDefault()
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/', { replace: true })
    }
  }
  const project = projects.find(p => p.id === id)
  const [lightbox, setLightbox] = useState(null)

  const { prev, next } = useMemo(() => {
    if (!project) return { prev: null, next: null }
    const i = projects.findIndex(p => p.id === project.id)
    return {
      prev: i > 0 ? projects[i - 1] : null,
      next: i < projects.length - 1 ? projects[i + 1] : null,
    }
  }, [project])

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  useEffect(() => {
    if (!lightbox) return
    const onKey = e => { if (e.key === 'Escape') setLightbox(null) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox])

  if (!project) {
    return (
      <div className="pd-not-found">
        <i className="fas fa-exclamation-triangle" />
        <h2>Projet introuvable</h2>
        <Link to="#" onClick={goBack} className="pd-back-link">
          <i className="fas fa-arrow-left" /> Retour aux projets
        </Link>
      </div>
    )
  }

  const blocks = project.blocks || [{ type: 'text', content: project.description }]
  const headline = project.headline || project.title

  const renderBlock = (b, i) => {
    if (b.type === 'text') {
      return (
        <div key={i} className={`pd-block pd-text${b.wide ? ' pd-wide' : ''}`}>
          <p>{b.content}</p>
        </div>
      )
    }
    if (b.type === 'image') {
      return (
        <figure
          key={i}
          className={`pd-block pd-figure${b.wide ? ' pd-wide' : ''}`}
          onClick={() => setLightbox({ src: b.src, caption: b.caption })}
        >
          <div className="pd-figure-frame">
            <img src={b.src} alt={b.caption || ''} loading="lazy" />
            <button type="button" className="pd-figure-zoom" aria-label="Agrandir">
              <i className="fas fa-up-right-from-square" />
            </button>
          </div>
          {b.caption && <figcaption>{b.caption}</figcaption>}
        </figure>
      )
    }
    if (b.type === 'pdf') {
      return (
        <figure
          key={i}
          className={`pd-block pd-figure pd-pdf${b.wide ? ' pd-wide' : ''}`}
        >
          <div className="pd-figure-frame">
            <embed src={`${b.src}#toolbar=0&view=FitH`} type="application/pdf" />
            <a
              href={b.src}
              target="_blank"
              rel="noreferrer"
              className="pd-figure-zoom"
              aria-label="Ouvrir le PDF"
            >
              <i className="fas fa-up-right-from-square" />
            </a>
          </div>
          {b.caption && <figcaption>{b.caption}</figcaption>}
        </figure>
      )
    }
    if (b.type === 'link') {
      return (
        <div key={i} className={`pd-block pd-project-link${b.wide ? ' pd-wide' : ''}`}>
          <a href={b.href} target="_blank" rel="noreferrer">
            {b.label} <i className="fas fa-up-right-from-square" aria-hidden="true" />
          </a>
        </div>
      )
    }
    // placeholder
    return (
      <div
        key={i}
        className={`pd-block pd-figure pd-placeholder${b.wide ? ' pd-wide' : ''}`}
        title="Trace à ajouter"
      >
        <div className="pd-figure-frame">
          <div className="pd-placeholder-inner">
            <i className="fas fa-image" />
            <span>{b.label || 'Trace à venir'}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pd-page" style={{ '--pc': project.color }}>
      <header className="pd-topbar">
        <div className="pd-topbar-left">
          <Link to="#" onClick={goBack} className="pd-back-round" aria-label="Retour aux projets">
            <i className="fas fa-arrow-left" />
          </Link>
          <Link to="#" onClick={goBack} className="pd-pill">Projets</Link>
        </div>
        <h1 className="pd-headline">{headline}</h1>
      </header>

      <div className="pd-meta">
        <span className="pd-meta-year"><i className={project.icon} /> {project.year}</span>
        <div className="pd-meta-tags">
          {project.tags.map(t => <span key={t} className="pd-meta-tag">{t}</span>)}
        </div>
      </div>

      <main className="pd-body">
        <div className="pd-grid">
          {blocks.map(renderBlock)}
        </div>
      </main>

      <nav className="pd-nav">
        {prev ? (
          <Link to={`${prev.link}${prevNextSuffix}`} className="pd-nav-btn pd-nav-prev" style={{ '--nc': prev.color }}>
            <i className="fas fa-chevron-left" />
            <div className="pd-nav-meta">
              <span className="pd-nav-label">Projet précédent</span>
              <span className="pd-nav-title">{prev.title}</span>
            </div>
          </Link>
        ) : <span />}
        {next ? (
          <Link to={`${next.link}${prevNextSuffix}`} className="pd-nav-btn pd-nav-next" style={{ '--nc': next.color }}>
            <div className="pd-nav-meta pd-nav-meta-right">
              <span className="pd-nav-label">Projet suivant</span>
              <span className="pd-nav-title">{next.title}</span>
            </div>
            <i className="fas fa-chevron-right" />
          </Link>
        ) : <span />}
      </nav>

      {lightbox && (
        <div className="pd-lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button type="button" className="pd-lightbox-close" aria-label="Fermer" onClick={() => setLightbox(null)}>
            <i className="fas fa-times" />
          </button>
          <img src={lightbox.src} alt={lightbox.caption || ''} onClick={e => e.stopPropagation()} />
          {lightbox.caption && <p className="pd-lightbox-caption">{lightbox.caption}</p>}
        </div>
      )}
    </div>
  )
}

