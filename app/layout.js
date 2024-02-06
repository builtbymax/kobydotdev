import '@/styles/scss/project/app.scss';
import '@/styles/fonts/fontface.css';


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

//<script defer="" type="text/javascript" src="https://api.pirsch.io/pirsch.js" id="pirschjs" data-code="oDV9BmgdHavR1TYRutic0jlReSS5t30S"></script>

export default function Root({ children }) {
  return (
    <>{children}</>
  );
}