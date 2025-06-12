import LocaleSwitcher from './locale-switcher';
import ThemeSwitcher from './theme-switcher';

export default function UtilityBar() {
  return (
    <div className="flex justify-end items-center gap-6">
      <LocaleSwitcher />
      <ThemeSwitcher />
    </div>
  );
};