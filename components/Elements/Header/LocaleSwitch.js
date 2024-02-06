'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n } from '/i18n-config';
import { Globe } from '@/components/UI/Icons';

const LocaleSwitch = () => {
  const pathName = usePathname();
  let activeLocale;

  const getActiveLocal = () => {
    if (!pathName) return false;
    const segments = pathName.split('/');
    activeLocale = segments[1];
  };
  getActiveLocal();

  const redirectedPathName = (locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const LanguageIcon = () => {
    return (
      <div className="language-icon">
        <Globe />
      </div>
    );
  };

  return (
    <div className="language-menu">
      <LanguageIcon />
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link scroll={false} href={redirectedPathName(locale)} className={activeLocale === locale ? 'active' : ''}>{locale}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
};
LocaleSwitch.displayName = 'LocaleSwitch';

export { LocaleSwitch };