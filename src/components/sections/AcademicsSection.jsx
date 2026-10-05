import { Reveal } from '../animation/Reveal.jsx';
import { programs } from '../../data/siteData.js';

export function AcademicsSection() {
  return (
    <section className="section section--muted" id="academics" aria-labelledby="academics-title">
      <div className="section-shell">
        <Reveal className="section-heading">
          <span className="eyebrow">Academics and achievement</span>
          <h2 id="academics-title">Focused learning with room for every talent.</h2>
        </Reveal>

        <div className="program-grid">
          {programs.map((program, index) => (
            <Reveal className="program-card" key={program.title} delay={index * 0.07}>
              <program.icon size={26} aria-hidden="true" />
              <span>{program.eyebrow}</span>
              <h3>{program.title}</h3>
              <p>{program.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
