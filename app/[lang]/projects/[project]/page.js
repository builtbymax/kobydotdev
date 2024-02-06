import { notFound } from 'next/navigation';
import { Header } from '@/components/Elements/Header/Header';
import { getDictionary } from '/dictionary';
import { Footer } from '@/components/Elements/Footer';
import { ContentSize, Section } from '@/components/UI/Section';
import { ContentText } from '@/components/Elements/Content/ContentText';
import { Media } from '@/components/UI/Media';
import { GridColumn, GridRow } from '@/components/UI/Grid';
import clsx from 'clsx';

export async function generateMetadata({ params }) {
  const lang = params?.lang || 'en';
  const project = params?.project;
  const titleProj = project.charAt(0).toUpperCase() + project.slice(1);
  const title = lang === 'de' ? `Projekt: ${titleProj}` : `Project: ${titleProj}`;

  return {
    title: title,
    description: lang === 'de' ? `Mehr über das Projekt ${titleProj} erfahren.` : `Learn more about the project ${titleProj}.`,
    robots: 'index, follow',
  }
}

export async function generateStaticParams({ params: { lang, project } }) {
  const projects = [
    { lang: 'en', project: 'halftime' },
    { lang: 'de', project: 'halftime' },
    { lang: 'en', project: 'taskline' },
    { lang: 'de', project: 'taskline' },
  ];

  return projects;
}

export default async function Project({ params: { lang, project } }) {
  const dict = await getDictionary(lang);
  const projectContent = dict[project];

  if (!projectContent) {
    return notFound();
  }

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
      <Header headline={projectContent.header.title} subline={projectContent.header.subline} lang={lang} layout={1} />
      <main>
        <Section>
          <ContentSize className="inner-section-wrapper">
            {projectContent.content.map((content, index) => {
              return <ContentElement key={index} content={content} />;
            })}
          </ContentSize>
        </Section>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  )
}