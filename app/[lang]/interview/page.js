import { Header } from '@/components/Elements/Header/Header';
import { getDictionary } from '/dictionary';
import { Footer } from '@/components/Elements/Footer';
import { ContentSize, Section } from '@/components/UI/Section';
import { ContentText } from '@/components/Elements/Content/ContentText';
import { Media } from '@/components/UI/Media';
import clsx from 'clsx';
import { GridColumn, GridRow } from '@/components/UI/Grid';

export default async function Interview({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const contentArr = dict.interview.content;

  const ContentElement = ({ content }) => {
    const { component } = content;

    switch (component) {
      case 'ContentText':
        return <ContentText content={content} className="inner-section-element" />;
      case 'ContentImageDefault':
        return (
          <div className={clsx('media-element-container', 'inner-section-element')}>
            <Media asset={content.asset} quality={content.asset.quality} />
          </div>
        );
      case 'ContentGridImage':
        return (
          <div className={clsx('media-element-container', 'grid-image-element-container', 'inner-section-element')}>
            <GridRow>
              {content.asset.map((asset, index) => {
                return (
                  <GridColumn key={index} className="grid-image-element" columnSize={content.gridSize}>
                    <Media asset={asset} quality={asset.quality} />
                  </GridColumn>
                );
              })}
            </GridRow>
          </div>
        );
      default:
        return null;
    };
  };

  return (
    <>
      <Header headline={dict.interview.header.title} subline={dict.interview.header.subline} lang={lang} layout={1} />
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