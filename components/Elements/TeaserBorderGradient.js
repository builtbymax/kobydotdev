'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GridColumn } from '../UI/Grid';

const TeaserBorderGradient = ({ lang, projects, projectTagLabel }) => {
  useEffect(() => {
    const getMousePosition = () => {
      const boxNodeList = document.querySelectorAll('[data-gradient-teaser]');
      if (boxNodeList.length === 0) return;

      boxNodeList.forEach((box) => {
        document.addEventListener('mousemove', (e) => {
          const rect = box.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          box.style.setProperty('--y__mouse__coordinate', `${y}px`);
          box.style.setProperty('--x__mouse__coordinate', `${x}px`);
        });
      });
    };
    getMousePosition();
  });

  const teaserList = [];
  projects.forEach((project) => {
    teaserList.push({
      title: project.link.title,
      logo: project.link.logo,
      slug: project.link.slug,
      external: project.link.external,
      new: project.link.new,
    });
  });

  const TeaserElement = ({ title, logo, slug, external, newTag }) => {
    const url = external ? slug : `/${lang}/projects/${slug}`;
    return (
      <Link data-gradient-teaser href={url} {...(external && {rel: 'noopener', target: '_blank'})} className="project-teaser-element">
        <div className="icon">
          <Image src={logo} alt={title} width={200} height={100} />
        </div>
        {newTag && <div className="tag layout-0">{projectTagLabel}</div>}
      </Link>
    );
  };

  return (
    <>
      {teaserList.map((teaser, index) => {
        return (
          <GridColumn key={index} columnSize={{ xs: 6, m: index < 2 ? 6 : 4 }}>
            <TeaserElement title={teaser.title} logo={teaser.logo} slug={teaser.slug} external={teaser.external} newTag={teaser.new} />
          </GridColumn>
        )
      })}
    </>
  );
};
TeaserBorderGradient.displayName = 'TeaserBorderGradient';

export { TeaserBorderGradient };