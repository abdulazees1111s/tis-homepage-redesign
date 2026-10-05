import { Mail, MapPin, Phone } from 'lucide-react';
import { Reveal } from '../animation/Reveal.jsx';
import { Button } from '../ui/Button.jsx';
import { actions, brand } from '../../data/siteData.js';

export function AdmissionSection() {
  return (
    <section className="section admissions" id="admissions" aria-labelledby="admissions-title">
      <div className="section-shell admission-panel">
        <Reveal className="section-copy">
          <span className="eyebrow">Admissions open</span>
          <h2 id="admissions-title">Start the conversation with TIS.</h2>
          <p>
            Explore programs, campus life, achievements, and why TIS is a preferred
            choice for parents across India.
          </p>
          <Button href={actions.primary.href} icon={actions.primary.icon}>
            Apply Now
          </Button>
        </Reveal>

        <Reveal className="contact-list" delay={0.08}>
          <a href={`tel:${brand.phone}`}>
            <Phone size={20} />
            <span>{brand.phone}</span>
          </a>
          <a href={`mailto:${brand.email}`}>
            <Mail size={20} />
            <span>{brand.email}</span>
          </a>
          <a href="https://maps.app.goo.gl/" target="_blank" rel="noreferrer">
            <MapPin size={20} />
            <span>{brand.address}</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
