import { Reveal } from '../animation/Reveal.jsx';
import { brand, highlights } from '../../data/siteData.js';

export function AboutSection() {
  return (
    <section className="section section--split" id="about" aria-labelledby="about-title">
      <div className="section-shell split-grid">
        <Reveal className="section-copy">
          <span className="eyebrow">Established in 2012</span>
          <h2 id="about-title">A school designed for seamless opportunities.</h2>
          <p>
            Tulas International School was established under the aegis of Rishabh
            Educational Trust to impart education through a rich mix of academics,
            co-curricular learning, mentorship, and residential life.
          </p>
          <p>
            Students are encouraged to grow through curiosity, creativity, discipline,
            and everyday chances to lead.
          </p>
        </Reveal>

        <Reveal className="image-panel" delay={0.08}>
          <img src={brand.alternateCampusImage} alt="Campus view at Tulas International School" />
        </Reveal>
      </div>

      <div className="section-shell highlight-grid">
        {highlights.map((item, index) => (
          <Reveal className="feature-card" key={item.title} delay={index * 0.06}>
            <item.icon size={24} aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
