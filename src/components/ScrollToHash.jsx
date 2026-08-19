import { useEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

/**
 * Scrolls to the element matching `location.hash` on every route change.
 * Restores the saved scroll position on back/forward (POP) navigation,
 * otherwise scrolls to top. Memorizes positions per history entry (key).
 * Ignores search-param-only changes (filters) to avoid jumping to top.
 */
const scrollPositions = new Map()
if (typeof history !== 'undefined' && 'scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

export default function ScrollToHash() {
  const { pathname, hash, key } = useLocation()
  const navType = useNavigationType()
  const prevPathname = useRef(pathname)

  // Mémorise la position de scroll de l'entrée d'historique courante
  useEffect(() => {
    const onScroll = () => scrollPositions.set(key, window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      scrollPositions.set(key, window.scrollY)
      window.removeEventListener('scroll', onScroll)
    }
  }, [key])

  useEffect(() => {
    const samePage = prevPathname.current === pathname
    prevPathname.current = pathname

    // Retour depuis une fiche projet : on restaure la position exacte capturée au clic
    const savedProjects = sessionStorage.getItem('projectsScrollY')
    if (savedProjects != null && hash === '#projects') {
      sessionStorage.removeItem('projectsScrollY')
      const y = Number(savedProjects)
      const doScroll = () => window.scrollTo(0, y)
      requestAnimationFrame(() => { doScroll(); requestAnimationFrame(doScroll) })
      return
    }

    if (hash) {
      const id = hash.replace('#', '')
      const tryScroll = () => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      setTimeout(tryScroll, 50)
      setTimeout(tryScroll, 250)
      return
    }
    // Retour arrière/avant : on restaure la position mémorisée
    if (navType === 'POP') {
      const saved = scrollPositions.get(key)
      if (saved != null) {
        requestAnimationFrame(() => window.scrollTo(0, saved))
        return
      }
    }
    // Changement de filtre (même page, pas de hash) : on ne touche pas au scroll
    if (samePage) return

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash, key, navType])

  return null
}
