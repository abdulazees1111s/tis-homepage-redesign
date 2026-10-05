import { Play, Sparkles } from 'lucide-react';
import { Reveal } from '../animation/Reveal.jsx';
import { brand, sports } from '../../data/siteData.js';

export function CampusLifeSection() {
  return (
    <section className="section campus-life" id="campus-life" aria-labelledby="campus-title">
      <div className="section-shell split-grid split-grid--reverse">
        <Reveal className="campus-card">
          <img src={brand.campusImage} alt="Students and facilities at Tulas International School" />
          <a href="https://tis.edu.in/#" aria-label="Open virtual tour">
            <Play size={22} fill="currentColor" />
          </a>
        </Reveal>

        <Reveal className="section-copy" delay={0.08}>
          <span className="eyebrow">Boarding life</span>
          <h2 id="campus-title">The foundation is bigger than facilities.</h2>
          <p>
            At Tulas, school life is built around academic structure, sports, wellness,
            creative exploration, and the small daily habits that help students feel capable.
          </p>
          <div className="sport-cloud" aria-label="Sports offered">
            {sports.map((sport) => (
              <span key={sport}>
                <Sparkles size={14} aria-hidden="true" />
                {sport}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
