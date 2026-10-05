import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    const updateEnabled = () => setEnabled(media.matches);
    updateEnabled();
    media.addEventListener('change', updateEnabled);

    const move = (event) => {
      setPosition({ x: event.clientX - 18, y: event.clientY - 18 });
    };

    const over = (event) => {
      setActive(Boolean(event.target.closest('a, button, input, select, textarea')));
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);

    return () => {
      media.removeEventListener('change', updateEnabled);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className={`custom-cursor ${active ? 'is-active' : ''}`}
      aria-hidden="true"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    />
  );
}
