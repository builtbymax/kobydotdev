import { GridColumn, GridRow } from '@/components/UI/Grid';
import { ArrowExternal } from '@/components/UI/Icons';
import { ContentSize } from '@/components/UI/Section';
import { AvailableBlock } from '@/components/Common/AvailableBlock';
import { Logo } from '@/components/Common/Logo';
import Link from 'next/link';

const Footer = ({ dict, lang }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: dict.common.footer['home'],
      href: `/${lang}`,
    },
    {
      title: dict.common.footer['imprint'],
      href: `/${lang}/legal`,
    },
  ];

  const ExtLink = ({ href, title }) => {
    return (
      <Link  target="_blank" rel="noopener" href={href}>
        <span>{title}</span>
        <ArrowExternal color="var(--ext-link__icon__color)" />
      </Link>
    );
  };

  return (
    <footer>
      <ContentSize>
        <div className="inner-footer-container">
          <GridRow>
            <GridColumn columnSize={{ m: 6 }}>
              <div className="footer-block left-side">
                <div className="footer-logo">
                  <Logo color="light" />
                </div>
                <ul className="footer-link-list">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </GridColumn>
            <GridColumn columnSize={{ m: 6 }}>
              <div className="footer-block right-side">
                <ul className='social-media-list'>
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <ExtLink href={link.href} title={link.title} />
                    </li>
                  ))}
                </ul>
              </div>
            </GridColumn>
          </GridRow>
        </div>
        <div className="footer-copy-container">
          <GridRow>
            <GridColumn columnSize={{ m: 6 }} className="copy-col">
              <div className="footer-copy">
                <p>© {currentYear} - {dict.common.footer['copy']}</p>
              </div>
            </GridColumn>
            <GridColumn columnSize={{ m: 6 }} className="available-col">
              <AvailableBlock text={dict.common['available']} lang={lang} />
            </GridColumn>
          </GridRow>
        </div>
      </ContentSize>
    </footer>
  );
};
Footer.displayName = 'Footer';

export { Footer };

//  Static Content
//  --------------------------------------------------------------------------------------------

const socialLinks = [
  {
    title: 'GitHub',
    href: 'https://www.github.com/builtbymax',
  },
  {
    title: 'LinkedIn',
    href: 'www.linkedin.com/in/maxkobus',
  },
  {
    title: 'CodePen',
    href: 'https://codepen.io/builtbymax',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/kobydev',
  },
  {
    title: '𝕏 (Twitter)',
    href: 'https://www.twitter.com/builtbymax',
  },
];