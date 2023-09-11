import Header from '@/components/header/Header';
import { getDictionary } from '/dictionary';

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      <Header dict={dict} lang={lang} />
    </>
  )
}