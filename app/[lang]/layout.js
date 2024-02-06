export async function generateMetadata({ params }) {
  const lang = params?.lang || 'en';

  return {
    metadataBase: new URL('https://www.koby.dev'),
    title: {
      template: '%s | koby.dev | Front-End developer & digital designer',
      default: 'koby.dev | Front-End developer & digital designer',
    },
    description: lang === 'de' ? 'Front-End Entwicklung aus dem Herzen Bayerns | Craftsmanship since 2014.' : 'Front-End development from the heart of Bavaria | Craftsmanship since 2014.',
    openGraph: {
      images: ['/og-image-koby.jpg'],
    },
  }
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