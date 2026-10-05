import { ChevronDown, Phone } from 'lucide-react';
import { Reveal } from '../animation/Reveal.jsx';
import { Button } from '../ui/Button.jsx';
import { actions, brand, stats } from '../../data/siteData.js';
import { StatCard } from '../ui/StatCard.jsx';

export function HeroSection() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__media">
        <img src={brand.campusImage} alt="Tulas International School campus" />
      </div>
      <div className="hero__overlay" />
      <div className="section-shell hero__content">
        <Reveal className="hero__copy">
          <span className="eyebrow">Boarding and day school excellence</span>
          <h1 id="hero-title">Tulas International School</h1>
          <p>
            A modern CBSE boarding and day school in Dehradun where academic focus,
            residential care, sports, arts, and leadership shape confident global learners.
          </p>
          <div className="hero__actions">
            <Button href={actions.primary.href} icon={actions.primary.icon}>
              {actions.primary.label}
            </Button>
            <Button href="tel:+919837983791" variant="secondary" icon={Phone}>
              Call Admissions
            </Button>
          </div>
        </Reveal>

        <div className="hero__stats">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={0.25 + index * 0.08}>
              <StatCard {...stat} />
            </Reveal>
          ))}
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
