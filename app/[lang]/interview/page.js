import Header from '@/components/header/Header';
import { getDictionary } from '/dictionary';
import Footer from '@/components/footer/Footer';
import Headline from '@/components/content-elements/HeadlineContainer';
import Section from '@/components/common/Section';

export default async function Interview({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <>
      <Header dict={dict} lang={lang} layout={1} />
      <main>
        <Section>
          <Headline 
            tag='h3'
            headline={dict.interview.content.textBlock.headline} 
            subline={dict.interview.content.textBlock.text}
            innerCopy={true}
          />
        </Section>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  )
}