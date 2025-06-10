"use client";

const Header = () => {
  const handleThemeSwitch = () => {
    document.documentElement.dataset.theme =
      document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
  }

  return (
    <button onClick={handleThemeSwitch} className="fixed top-3 right-3 bg-background">
      🌙 / ☀️
    </button>
  );
}

export default Header;