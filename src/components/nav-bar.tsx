import Link from "next/link";
import { useTranslations } from "next-intl";
import UtilityBar from "./utility-bar";

const NavBar = () => {
  const t = useTranslations('HomePage');

  return (
    <div className="flex justify-between items-center py-2 px-4">
      <Link href="/" className="text-md">{t('home_page')}</Link>
      <UtilityBar />
    </div>
  );
};

export default NavBar;