import {routing} from '@/i18n/routing';
import LocaleSwitcherSelect from './locale-switcher-select';
import { getLocale, getTranslations } from 'next-intl/server';

export default async function LocaleSwitcher() {
  const t = await getTranslations('LocaleSwitcher');
  const locale = await getLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {routing.locales.map((current) => (
        <option key={current} value={current}>
          {t('locale', {locale: current})}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}