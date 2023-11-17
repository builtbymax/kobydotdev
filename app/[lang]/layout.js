import '../../styles/scss/project/app.scss';
import '../../styles/fonts/fontface.css';

export const metadata = {
  title: 'KOBY.DEV - Front-End Developer',
  description: 'bla bla',
  
}

/*
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7f0033">
<meta name="msapplication-TileColor" content="#7f0033">
<meta name="theme-color" content="#ffffff">
*/

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'de' }]
}

export default function Root({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  )
}