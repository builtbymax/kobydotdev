import { Header } from '@/components/Elements/Header/Header';
import { getDictionary } from '/dictionary';
import { TextMedia } from '@/components/Elements/TextMedia';
import { TeaserBorderGradient } from '@/components/Elements/TeaserBorderGradient';
import { Footer } from '@/components/Elements/Footer';
import { Section, ContentSize } from '@/components/UI/Section';
import { Headline, HeadlineContainer, Subline } from '@/components/UI/Headline';
import { GridColumn, GridRow } from '@/components/UI/Grid';

export async function generateMetadata({ params }) {
  const lang = params?.lang || 'en';
  const titleSuffix = ' | koby.dev | Front-End developer & digital designer';

  return {
    title: lang === 'de' ? `Startseite ${titleSuffix}` : `Home ${titleSuffix}`,
    robots: 'index, follow',
  }
}

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      <Header dict={dict} lang={lang} />
      <Section>
        <ContentSize>
          <TextMedia 
            textAlignment="left"
            headline={dict.home['interview-teaser'].headline}
            text={dict.home['interview-teaser'].text}
            link={{
              url: `${lang}/interview`,
              title: dict.home['interview-teaser'].link,
            }}
            img={{
              src: '/assets/content-interview-teaser-home.jpg',
              alt: 'Interview Teaser',
              width: 700,
              height: 700,
              priority: true,
              quality: 100,
            }}
          />
        </ContentSize>
      </Section>
  
      <Section>
        <ContentSize>
          <HeadlineContainer>
            <Headline as="h2">{dict.home['services'].headline.headline}</Headline>
            <Subline>{dict.home['services'].headline.subline}</Subline>
          </HeadlineContainer>
          <div className="teaser-element-section">
              <GridRow>
                {dict.home['services'].teaser.map((service, index) => {
                  return (
                    <GridColumn columnSize={{ m: 4 }} key={index}>
                      <div className="teaser-element-container">
                        <div className="content-block">
                          <div className="copy-text">
                            <h3>{service.headline}</h3>
                            <p>{service.text}</p>
                          </div>
                        </div>
                      </div>
                    </GridColumn>
                  )
                })}
              </GridRow>
          </div>
        </ContentSize>
      </Section>

      <Section>
        <ContentSize>
          <HeadlineContainer>
            <Headline as="h2">{dict.home['projects'].headline.headline}</Headline>
            <Subline>{dict.home['projects'].headline.subline}</Subline>
          </HeadlineContainer>
          <div className="teaser-element-section">
            <GridRow>
              <TeaserBorderGradient lang={lang} projects={dict.projects} projectTagLabel={dict.common.new} />
            </GridRow>
          </div>
        </ContentSize>
      </Section>
      <Footer dict={dict} lang={lang} />
    </>
  );
};