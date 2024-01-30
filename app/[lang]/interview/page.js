import { Header } from '@/components/Elements/Header/Header';
import { getDictionary } from '/dictionary';
import { Footer } from '@/components/Elements/Footer';
import { ContentSize, Section } from '@/components/UI/Section';

export default async function Interview({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <>
      <Header dict={dict} lang={lang} layout={1} />
      <main>
        <Section>
          <ContentSize>
            {dict.interview.content.textBlock.headline}
            {dict.interview.content.textBlock.text}
          </ContentSize>
        </Section>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
};