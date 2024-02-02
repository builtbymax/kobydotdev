import '../../styles/scss/project/app.scss';
import '../../styles/fonts/fontface.css';

export const metadata = {
  metadataBase: new URL('https://www.koby.dev'),
  title: {
    template: '%s | koby.dev | Front-End developer & digital designer',
    default: 'koby.dev | Front-End developer & digital designer',
  },
  description: {
    default: 'Front-End Entwicklung aus dem Herzen Bayerns | Craftsmanship since 2014.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'light',
  themeColor: '#202020',
  msTileColor: '#202020',
};

export const icons = {
  appleTouchIcon: '/apple-touch-icon.png',
  msTileIcon: '/mstile-150x150.png',
  safariPinnedTab: '/safari-pinned-tab.svg',
  androidChrome: '/android-chrome-512x512.png',
  androidChrome192: '/android-chrome-192x192.png',
};

/*
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7f0033">
<meta name="msapplication-TileColor" content="#7f0033">
<meta name="theme-color" content="#ffffff">
*/

//<script defer="" type="text/javascript" src="https://api.pirsch.io/pirsch.js" id="pirschjs" data-code="oDV9BmgdHavR1TYRutic0jlReSS5t30S"></script>

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