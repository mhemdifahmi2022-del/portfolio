import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught:', error, info)
    }
  }

  handleReset = () => {
    this.setState({ hasError: false })
    window.location.assign('/')
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          style={{
            minHeight: '70vh',
            display: 'grid',
            placeItems: 'center',
            textAlign: 'center',
            padding: '40px 20px',
            color: 'var(--text, #e6e6e6)',
          }}
        >
          <div style={{ maxWidth: 420 }}>
            <i className="fas fa-triangle-exclamation" style={{ fontSize: 40, color: '#f4976c' }} />
            <h2 style={{ margin: '16px 0 8px' }}>Une erreur est survenue</h2>
            <p style={{ opacity: 0.7, marginBottom: 24 }}>
              Quelque chose s'est mal passé lors de l'affichage de cette page.
            </p>
            <button
              type="button"
              onClick={this.handleReset}
              style={{
                cursor: 'pointer',
                padding: '10px 22px',
                borderRadius: 999,
                border: '1px solid currentColor',
                background: 'transparent',
                color: 'inherit',
                font: 'inherit',
              }}
            >
              <i className="fas fa-house" /> Retour à l'accueil
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
