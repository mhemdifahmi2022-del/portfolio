import { useState } from 'react'
import { useInView } from '../../hooks/useInView'
import './Contact.css'

const socials = [
  { icon: 'fab fa-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/mhemdi-fahmi/', color: '#0A66C2' },
]

const infos = [
  { icon: 'fas fa-envelope', label: 'Email', value: 'mhemdi.fahmi2022@gmail.com', href: 'mailto:mhemdi.fahmi2022@gmail.com' },
  { icon: 'fas fa-map-marker-alt', label: 'Localisation', value: 'Toulon, 83000', href: null },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')

    const payload = new FormData()
    payload.append('name', form.name)
    payload.append('email', form.email)
    payload.append('message', form.message)
    payload.append('_subject', `Nouveau message portfolio - ${form.name}`)
    payload.append('_captcha', 'false')
    payload.append('_template', 'table')

    try {
      const response = await fetch('https://formsubmit.co/ajax/mhemdi.fahmi2022@gmail.com', {
        method: 'POST',
        body: payload,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Envoi impossible')
      }

      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-container" ref={ref}>
        <div className={`section-header anim${inView ? ' visible' : ''}`}>
          <span className="section-tag">Restons en contact</span>
          <h2 className="section-title">Me contacter</h2>
        </div>

        <div className="contact-grid">
          {/* Formulaire */}
          <div className={`contact-card anim${inView ? ' visible' : ''} anim-delay-1`}>
            <div className="contact-cta">
              <div className="contact-chip"><span /> Réponse rapide sous 24h</div>
              <h3 className="cta-title">Parlons de votre projet</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cf-name">Nom</label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      placeholder="Votre nom"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-email">Email</label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="cf-message">Message</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={5}
                    placeholder="Décrivez votre projet ou demande..."
                    required
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn-contact-main" disabled={status === 'sending'}>
                    <i className={status === 'success' ? 'fas fa-check' : 'fas fa-paper-plane'} />
                    {status === 'sending' ? 'Envoi en cours...' : status === 'success' ? 'Message envoye !' : 'Envoyer le message'}
                  </button>
                  <a href="/Mhemdi_Fahmi_CV.pdf" download="Mhemdi_Fahmi_CV.pdf" className="btn-contact-secondary">
                    <i className="fas fa-download" /> CV
                  </a>
                </div>
                {status === 'success' && (
                  <p className="contact-feedback success">Message envoye avec succes. Merci !</p>
                )}
                {status === 'error' && (
                  <p className="contact-feedback error">Echec de l'envoi. Reessaie dans quelques secondes.</p>
                )}
              </form>
            </div>
          </div>

          {/* Infos */}
          <div className={`contact-infos anim${inView ? ' visible' : ''} anim-delay-2`}>
            {infos.map(info => (
              <div key={info.label} className="info-card">
                <div className="info-icon"><i className={info.icon} /></div>
                <div>
                  <p className="info-label">{info.label}</p>
                  {info.href
                    ? <a className="info-value" href={info.href}>{info.value}</a>
                    : <p className="info-value">{info.value}</p>
                  }
                </div>
              </div>
            ))}

            <div className="social-row">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-btn" style={{ '--sc': s.color }}>
                  <i className={s.icon} />
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={`contact-footer anim${inView ? ' visible' : ''} anim-delay-3`}>
          <p>© 2026 Fahmi Mhemdi — BUT3 GEII Alternance · IUT de Toulon</p>
        </div>
      </div>
    </section>
  )
}
