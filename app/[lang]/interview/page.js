import { Header } from '@/components/header/Header';
import { getDictionary } from '/dictionary';
import { Footer } from '@/components/footer/Footer';

export default async function Interview({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <>
      <Header dict={dict} lang={lang} layout={1} />
      <main>
        {dict.interview.content.textBlock.headline}
        {dict.interview.content.textBlock.text}
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
};