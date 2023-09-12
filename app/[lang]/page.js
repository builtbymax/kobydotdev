import Header from '@/components/header/Header';
import { getDictionary } from '/dictionary';
import Headline from '@/components/content-elements/HeadlineContainer';
import Section from '@/components/common/Section';
import TextMedia from '@/components/content-elements/TextMedia';

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
            src: '/assets/content-interview-teaser-image.jpg',
            alt: 'Interview Teaser',
            width: 500,
            height: 500,
          }}
        />
      </Section>
    </>
  )
}