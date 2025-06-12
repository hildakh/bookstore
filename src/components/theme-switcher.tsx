'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const THEME_KEY = 'bookstore-theme';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const pathname = usePathname();

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem(THEME_KEY, newTheme);
      return newTheme;
    });
  };

  // Initial theme setup
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

  // Apply theme changes
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Reapply theme on route changes including language switches
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY) as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
    }
  }, [pathname]);

  return (
    <button
      onClick={handleThemeSwitch}
      className="text-2xl"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? '🌜' : '🌞'}
    </button>
  );
}