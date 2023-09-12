'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n } from '/i18n-config';

export default function LocaleSwitcher() {
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
        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={20} fill="none" >
          <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19a9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9M1.51 7h16.87M1.51 13H10" />
          <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10c0-2.764-.723-5.528-2.167-7.94a2.114 2.114 0 0 0-3.665 0c-2.89 4.825-2.89 11.056 0 15.881a2.125 2.125 0 0 0 1.833 1.06M21 15.625 19.875 14.5l-1.125 1.125M12.75 16.375l1.125 1.125L15 16.375" />
          <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 17.5v-3a1.5 1.5 0 0 1 1.5-1.5h2.25M19.875 14.5v3c0 .825-.675 1.5-1.5 1.5h-2.242" />
        </svg>
      </div>
    )
  }

  return (
    <div className="language-menu">
      <LanguageIcon />
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)} className={activeLocale === locale ? 'active' : ''}>{locale}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}