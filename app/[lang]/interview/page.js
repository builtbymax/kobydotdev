import { Header } from '@/components/Elements/Header/Header';
import { getDictionary } from '/dictionary';
import { Footer } from '@/components/Elements/Footer';
import { ContentSize, Section } from '@/components/UI/Section';
import { Headline, HeadlineContainer, Subline } from '@/components/UI/Headline';

export default async function Interview({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const content = dict.interview.content.textBlock;
  return (
    <>
      <Header dict={dict} lang={lang} layout={1} />
      <main>
        <Section>
          <ContentSize>
            <HeadlineContainer>
              <Headline as="h2">{content.headline}</Headline>
              <Subline>{content.text}</Subline>
            </HeadlineContainer>
          </ContentSize>
        </Section>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
};