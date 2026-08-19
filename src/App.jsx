import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import ScrollToHash from './components/ScrollToHash'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'

const ProjectDetail = lazy(() => import('./components/Projects/ProjectDetail'))
const NotFound = lazy(() => import('./components/NotFound/NotFound'))

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}

function RouteFallback() {
  return (
    <div style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', color: 'var(--text-muted, #888)' }}>
      <i className="fas fa-circle-notch fa-spin" style={{ fontSize: 28 }} aria-label="Chargement" />
    </div>
  )
}

export default function App() {
  return (
    <div className="app">
      <a href="#main-content" className="skip-link">Aller au contenu</a>
      <ScrollToHash />
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />
      <Navbar />
      <main id="main-content">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/projets/:id"
              element={<Suspense fallback={<RouteFallback />}><ProjectDetail /></Suspense>}
            />
            <Route
              path="*"
              element={<Suspense fallback={<RouteFallback />}><NotFound /></Suspense>}
            />
          </Routes>
        </ErrorBoundary>
      </main>
    </div>
  )
}
