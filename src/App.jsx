import { useEffect, useState } from 'react';
import { CustomCursor } from './components/animation/CustomCursor.jsx';
import { ScrollProgress } from './components/animation/ScrollProgress.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { Navbar } from './components/layout/Navbar.jsx';
import { AboutSection } from './components/sections/AboutSection.jsx';
import { AcademicsSection } from './components/sections/AcademicsSection.jsx';
import { AdmissionSection } from './components/sections/AdmissionSection.jsx';
import { CampusLifeSection } from './components/sections/CampusLifeSection.jsx';
import { HeroSection } from './components/sections/HeroSection.jsx';
import { TestimonialsSection } from './components/sections/TestimonialsSection.jsx';

const THEME_KEY = 'tis-theme';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem(THEME_KEY) || 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      <main>
        <HeroSection />
        <AboutSection />
        <AcademicsSection />
        <CampusLifeSection />
        <TestimonialsSection />
        <AdmissionSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
