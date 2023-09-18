import AvailableBlock from '../common/AvailableBlock';
import Logo from '../common/Logo';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer({ dict, lang }) {
  const socialLinks = [
    {
      title: 'GitHub',
      href: 'https://www.github.com/builtbymax',
    },
    {
      title: '𝕏 (Twitter)',
      href: 'https://www.twitter.com/builtbymax',
    },
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/kobydev',
    },
    {
      title: 'LinkedIn',
      href: 'www.linkedin.com/in/maxkobus',
    },
  ];

  const footerLinks = [
    {
      title: dict.common.footer['home'],
      href: `/${lang}`,
    },
    {
      title: dict.common.footer['imprint'],
      href: `/${lang}/imprint`,
    },
    {
      title: dict.common.footer['privacy'],
      href: `/${lang}/privacy`,
    }
  ];

  const currentYear = new Date().getFullYear();

  const ExtLink = ({ href, title }) => {
    return (
      <Link href={href}>
        <span>{title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width={9} height={9} fill="none" >
          <path fill="var(--ext-link__icon__color)" d="m8.126 1.413-.077 5.291a.883.883 0 0 1-.255.615.883.883 0 0 1-.614.255.824.824 0 0 1-.854-.854l.054-3.202-4.338 4.339c-.341.341-.89.351-1.22.021-.33-.33-.32-.879.021-1.22L5.182 2.32l-3.232.055a.824.824 0 0 1-.854-.854.897.897 0 0 1 .885-.885L7.27.559a.824.824 0 0 1 .855.854Z" />
        </svg>
      </Link>
    );
  }
  return (
    <footer>
      <div className="content-size-sl footer-content-size">
        <div className="inner-footer-container">
          <div className="grid-row">
            <div className="grid-col gd-xs-12 gd-m-6">
              <div className="footer-block left-side">
                <div className="footer-logo">
                  <Logo color="light" />
                </div>
                <ul className="footer-link-list">
                  {footerLinks.map((link, index) => {
                    return (
                      <li key={index}>
                        <Link href={link.href}>{link.title}</Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="grid-col gd-xs-12 gd-m-6">
              <div className="footer-block right-side">
                <ul className='social-media-list'>
                  {socialLinks.map((link, index) => {
                    return (
                      <li key={index}>
                        <ExtLink href={link.href} title={link.title} />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copy-container">
          <div className="grid-row">
            <div className="grid-col gd-xs-12 gd-m-6 copy-col">
              <div className="footer-copy">
                <p>© {currentYear} - {dict.common.footer['copy']}</p>
              </div>
            </div>
            <div className="grid-col gd-xs-12 gd-m-6 available-col">
              <AvailableBlock text={dict.common['available']} lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};