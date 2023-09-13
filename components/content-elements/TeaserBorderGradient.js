'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Teaser({ lang }) {

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

  const teaserList = [
    {
      title: 'halftime.space',
      logo: '/assets/logo-halftime.svg',
    },
    {
      title: 'halftime.space',
      logo: '/assets/logo-taskline.svg',
    },
    {
      title: 'halftime.space',
      logo: '/assets/logo-convertr.svg',
    },
    {
      title: 'halftime.space',
      logo: '/assets/logo-pfau.svg',
    },
  ];

  const TeaserElement = ({ title, logo}) => {
    return (
      <Link data-gradient-teaser href={`${lang}/halftime`} className="project-teaser-element">
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
          <div className="grid-col gd-xs-12 gd-m-6" key={index}>
            <TeaserElement title={teaser.title} logo={teaser.logo} />
          </div>
        )
      })}
    </>
  );
};