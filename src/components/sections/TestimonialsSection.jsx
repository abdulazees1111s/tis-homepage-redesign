import { Quote } from 'lucide-react';
import { Reveal } from '../animation/Reveal.jsx';
import { testimonials } from '../../data/siteData.js';

export function TestimonialsSection() {
  return (
    <section className="section section--muted" aria-labelledby="testimonials-title">
      <div className="section-shell">
        <Reveal className="section-heading">
          <span className="eyebrow">From the parents</span>
          <h2 id="testimonials-title">Confidence families can feel.</h2>
        </Reveal>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal className="testimonial-card" key={testimonial.name} delay={index * 0.06}>
              <Quote size={24} aria-hidden="true" />
              <p>{testimonial.quote}</p>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
