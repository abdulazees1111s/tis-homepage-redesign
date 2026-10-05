import { brand, navItems } from '../../data/siteData.js';

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <img src={brand.logo} alt="Tulas International School" />
        <p>
          {brand.name}, {brand.address}
        </p>
      </div>
      <nav aria-label="Footer navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <p>
        Admission Helpline <a href={`tel:${brand.phone}`}>{brand.phone}</a> ·{' '}
        <a href={`mailto:${brand.email}`}>{brand.email}</a>
      </p>
    </footer>
  );
}
