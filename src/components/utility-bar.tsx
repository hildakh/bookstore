import LocaleSwitcher from "./locale-switcher";
import ThemeSwitcher from "./theme-switcher";

const UtilityBar = () => {
  return (
    <div className="flex justify-end items-center gap-6">
      <LocaleSwitcher />
      <ThemeSwitcher />
    </div>
  );
};

export default UtilityBar;