import { Header } from '@/components/Elements/Header/Header';
import { getDictionary } from '/dictionary';
import { Footer } from '@/components/Elements/Footer';
import { ContentSize, Section } from '@/components/UI/Section';
import { Headline, HeadlineContainer, Subline } from '@/components/UI/Headline';
import { ContentText } from '@/components/Elements/Content/ContentText';
import { ImageAsset } from '@/components/UI/Media';

export default async function Interview({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const contentArr = dict.interview.content;

  const ContentElement = ({ content }) => {
    const { component } = content;

    switch (component) {
      case 'ContentText':
        return <ContentText content={content} classname="inner-section-element" />;
      case 'ContentHeadline':
        return (
          <HeadlineContainer classname="inner-section-element">
            <Headline as="h2">{content.title}</Headline>
          </HeadlineContainer>
        );
      case 'ContentImageDefault':
        return (
          <div className="inner-section-element">
            <ImageAsset asset={content.asset} />
          </div>
        );
      default:
        return null;
    };
  };

  return (
    <>
      <Header dict={dict} lang={lang} layout={1} />
      <main>
        <Section>
          <ContentSize>
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