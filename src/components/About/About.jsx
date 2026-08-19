import { useInView } from '../../hooks/useInView'
import { skills } from '../../data/content'
import './About.css'

const langues = [
  { name: 'Français', level: 4, label: 'C1' },
  { name: 'Anglais', level: 3, label: 'B2' },
  { name: 'Arabe', level: 5, label: 'Natif' },
  { name: 'Allemand', level: 2, label: 'A2' },
]

const passions = [
  { icon: 'fas fa-fist-raised', label: 'Kick-boxing', sub: '6 ans de pratique' },
  { icon: 'fas fa-chart-line', label: 'Crypto Trading', sub: 'Analyse technique' },
  { icon: 'fas fa-music', label: 'Beatmaking', sub: 'FL Studio' },
  { icon: 'fas fa-chess', label: 'Échecs', sub: '1473 chess.com' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="about-section">
      <div className="section-container" ref={ref}>
        <div className={`section-header anim${inView ? ' visible' : ''}`}>
          <span className="section-tag">Qui suis-je ?</span>
          <h2 className="section-title">À propos de moi</h2>
        </div>
        <div className="about-grid">
          <div className={`about-bio anim${inView ? ' visible' : ''} anim-delay-1`}>
            <div className="bio-card">
              <div className="bio-avatar"><i className="fas fa-user" /></div>
              <p className="bio-text">
                Étudiant en <strong>BUT Génie Électrique et Informatique Industrielle</strong> à l'IUT de Toulon, actuellement en 3ème année en alternance chez <strong>YES55</strong> au Luc.
              </p>
              <p className="bio-text">
                Passionné par l'électronique embarquée, le développement logiciel et l'automatisation. Je cherche à concevoir des systèmes intelligents qui répondent à de vrais besoins techniques.
              </p>
              <div className="bio-info-grid">
                <div className="bio-info-item"><i className="fas fa-map-marker-alt" /><span>Toulon, 83000</span></div>
                <div className="bio-info-item"><i className="fas fa-envelope" /><span>mhemdi.fahmi2022@gmail.com</span></div>
                <div className="bio-info-item"><i className="fas fa-car" /><span>Permis B</span></div>
              </div>
            </div>

            <div className="langues-section">
              <h3 className="subsection-title"><i className="fas fa-language" /> Langues</h3>
              <div className="langues-grid">
                {langues.map(l => (
                  <div key={l.name} className="langue-item">
                    <div className="langue-header">
                      <span className="langue-name">{l.name}</span>
                      <span className="langue-label">{l.label}</span>
                    </div>
                    <div className="langue-dots">
                      {[1,2,3,4,5].map(n => (
                        <div key={n} className={`dot${n <= l.level ? ' active' : ''}`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="passions-section">
              <h3 className="subsection-title"><i className="fas fa-heart" /> Passions</h3>
              <div className="passions-grid">
                {passions.map(p => (
                  <div key={p.label} className="passion-card">
                    <i className={p.icon} />
                    <span className="passion-name">{p.label}</span>
                    <span className="passion-sub">{p.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`about-skills anim${inView ? ' visible' : ''} anim-delay-2`}>
            <h3 className="subsection-title"><i className="fas fa-code" /> Compétences techniques</h3>
            <div className="skills-list">
              {skills.map((s, i) => (
                <div key={s.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name"><i className={s.icon} /> {s.name}</span>
                    <span className="skill-pct">{s.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      style={{ width: inView ? `${s.level}%` : '0%', transitionDelay: `${i * 0.08}s` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
