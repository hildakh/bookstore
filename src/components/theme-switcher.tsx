'use client';

import { useEffect, useState } from 'react';

const THEME_KEY = 'bookstore-theme';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => {
      if (prevTheme === 'light') {
        return 'dark';
      } else {
        return 'light';
      }
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);

    if (!savedTheme) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme);
      localStorage.setItem(THEME_KEY, systemTheme);
    } else {
      setTheme(savedTheme as 'light' | 'dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <button onClick={handleThemeSwitch} className="text-2xl">
      {theme === 'light' ? '🌞' : '🌜'}
    </button>
  );
}