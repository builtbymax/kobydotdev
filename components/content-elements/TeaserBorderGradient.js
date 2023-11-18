'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Teaser({ lang, projects }) {

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
  }, []);

  const teaserList = [];
  projects.forEach((project) => {
    teaserList.push({
      title: project.link.title,
      logo: project.link.logo,
      slug: project.link.slug,
      external: project.link.external,
    });
  });

  const TeaserElement = ({ title, logo, slug, external }) => {
    const url = external ? slug : `/${lang}/projects/${slug}`;
    return (
      <Link data-gradient-teaser href={url} {...(external && {rel: 'noopener', target: '_blank'})} className="project-teaser-element">
        <div className="icon">
          <Image src={logo} alt={title} width={200} height={100} />
        </div>
      </Link>
    );
  };

  return (
    <>
      {teaserList.map((teaser, index) => {
        return (
          <div className="grid-col gd-xs-6 gd-m-6" key={index}>
            <TeaserElement title={teaser.title} logo={teaser.logo} slug={teaser.slug} external={teaser.external} />
          </div>
        )
      })}
    </>
  );
};