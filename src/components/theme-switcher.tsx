"use client";

const ThemeSwitcher = () => {
  const handleThemeSwitch = () => {
    document.documentElement.dataset.theme =
      document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
  }

  return (
    <button onClick={handleThemeSwitch}>
      🌙 / ☀️
    </button>
  );
}

export default ThemeSwitcher;