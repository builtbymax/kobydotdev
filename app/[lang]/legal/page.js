import { Header } from '@/components/Elements/Header/Header';
import { getDictionary } from '/dictionary';
import { Footer } from '@/components/Elements/Footer';
import { ContentSize, Section } from '@/components/UI/Section';
import { Headline, HeadlineContainer, Subline } from '@/components/UI/Headline';
import { ContentText } from '@/components/Elements/Content/ContentText';

export default async function Legal({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const contentArr = dict.legal.content;

  const ContentElement = ({ content }) => {
    const { component } = content;

    switch (component) {
      case 'ContentText':
        return <ContentText content={content} className="inner-section-element" />;
      default:
        return null;
    };
  };

  return (
    <>
      <Header headline={dict.legal.header.title} subline={dict.legal.header.subline} lang={lang} layout={1} />
      <main>
        <Section>
          <ContentSize className="inner-section-wrapper">
            {contentArr.map((content, index) => {
              return <ContentElement key={index} content={content} />;
            })}
          </ContentSize>
        </Section>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
};