import { notFound } from 'next/navigation';
import { Header } from '@/components/Elements/Header/Header';
import { getDictionary } from '/dictionary';
import { Footer } from '@/components/Elements/Footer';

export async function generateStaticParams({ params: { lang, project } }) {
  const dict = await getDictionary(lang);
  // create only the static pages that exist in the dictionary
  return dict.projects.map(proj => proj.link.slug);
}

export default async function Project({ params: { lang, project } }) {
  const dict = await getDictionary(lang);
  const projectSlugs = dict.projects.map(proj => proj.link.slug);
  
  if (!projectSlugs.includes(project)) {
    return notFound();
  }

  return (
    <>
      <Header dict={dict} lang={lang} layout={1} />
      <main>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  )
}