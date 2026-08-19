import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="nf-page">
      <div className="nf-glow" />
      <div className="nf-inner">
        <div className="nf-code">404</div>
        <h1 className="nf-title">Page introuvable</h1>
        <p className="nf-desc">
          Désolé, cette page n&apos;existe pas ou a été déplacée.
        </p>
        <Link to="/" className="nf-btn">
          <i className="fas fa-home" /> Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
