import Navigation from './Navigation';

export default function Header({ dict, lang }) {
  return (
    <header>
      <Navigation dict={dict} lang={lang} />
      <h1><b>{dict.home.header['headline-1']}</b>{dict.home.header['headline-2']}</h1>
    </header>
  )
};