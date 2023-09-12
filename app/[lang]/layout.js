import '../../styles/scss/project/app.scss';
import '../../styles/fonts/fontface.css';

export const metadata = {
  title: 'KOBY.DEV - Front-End Developer',
  description: 'bla bla',
}

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