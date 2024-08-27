import { useState, useEffect } from 'react';
import './ThemeToggler.css';
import IconMoon from '../../../public/images/icon-moon.svg'
import IconSun from '../../../public/images/icon-sun.svg'

function ThemeToggler() {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('devfinder-theme') || 'light');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  function applyThemeToPage() {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  function saveThemeSettings(theme) {
    setCurrentTheme(theme);
    localStorage.setItem('devfinder-theme', theme);
  }

  useEffect(() => {
    applyThemeToPage();
  }, [currentTheme]);

  return (
    <label className="theme-toggler" onClick={() => saveThemeSettings(nextTheme)}>
      <span className="switch-to">{nextTheme}</span>
      {nextTheme === 'dark' ? (
        <img src={IconMoon} alt="Moon Icon" />
      ) : (
        <img src={IconSun} alt="Sun Icon" />
      )}
    </label>
  );
}

export default ThemeToggler;
