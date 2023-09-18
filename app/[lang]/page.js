import Header from '@/components/header/Header';
import { getDictionary } from '/dictionary';
import Headline from '@/components/content-elements/HeadlineContainer';
import Section from '@/components/common/Section';
import TextMedia from '@/components/content-elements/TextMedia';
import TeaserBorderGradient from '@/components/content-elements/TeaserBorderGradient';
import Footer from '@/components/footer/Footer';

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      <Header dict={dict} lang={lang} />
      <Section>
        <TextMedia 
          textAlignment="left"
          headline={dict.home['interview-teaser'].headline}
          text={dict.home['interview-teaser'].text}
          link={{
            url: `${lang}/interview`,
            title: dict.home['interview-teaser'].link,
          }}
          img={{
            src: '/assets/content-interview-teaser-image-2.jpg',
            alt: 'Interview Teaser',
            width: 700,
            height: 700,
            priority: true,
            quality: 100,
          }}
        />
      </Section>
      <Section>
        <Headline headline={dict.home['services'].headline.headline} subline={dict.home['services'].headline.subline}/>
        <div className="teaser-element-section">
          <div className="grid-row">
            {dict.home['services'].teaser.map((service, index) => {
              return (
                <div className="grid-col gd-xs-12 gd-m-4" key={index}>
                  <div className="teaser-element-container">
                    <div className="content-block">
                      <div className="copy-text">
                        <h3>{service.headline}</h3>
                        <p>{service.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Section>
      <Section>
        <Headline headline={dict.home['projects'].headline.headline} subline={dict.home['projects'].headline.subline}/>
        <div className="teaser-element-section">
          <div className="grid-row">
            <TeaserBorderGradient lang={lang} />
          </div>
        </div>
      </Section>
      <Footer dict={dict} lang={lang} />
    </>
  )
}